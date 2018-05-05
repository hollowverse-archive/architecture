# hollowverse.com CloudFront distribution

<p align="center">
<img src="./diagrams/hollowverseComCloudFront.puml.svg">
</p>

When CloudFront receives the request for the page, it executes the [Lambda@Edge](https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html) associated with the `viewer-request` stage. This is [`assignEnvironmentToViewerRequest`](https://github.com/hollowverse/route-request/blob/master/src/assignEnvironmentToViewerRequest.ts).

`assignEnvironmentToViewerRequest`, as the name implies, modifies the request to add an environment. Specifically, it adds the `x-hollowverse-assigned-environment` header, whose value is either:

* a random environment name picked based on predefined weights (e.g. 75% of traffic should be served from `master` and 25% from `beta`) if the incoming request has no `env` cookie in the `Cookie` header, or if the value of that cookie is invalid (e.g. the environment has been removed or renamed).
* the same value of the `env` cookie if this cookie exists in the incoming request's headers and the value is a valid environment name.

CloudFront then looks for a cached copy of the page that matches exactly the headers of the request _after_ the request has been modified by `assignEnvironmentToViewerRequest`.

If a cached response is available for the resulting cache key, CloudFront returns that copy and the viewer request does not hit the origin server.

If no cached response is available, CloudFront will execute the Lambda@Edge assigned to the `origin-request` stage, which is [`routeRequestToOrigin`](https://github.com/hollowverse/route-request/blob/master/src/routeRequestToOrigin.ts).

`routeRequestToOrigin` reads the `x-hollowverse-assigned-environment` header and modifies the request so that it is directed to the corresponding environment. The process of fetching the origin response is described in detail in [Origin Server](./originServer.md).

After retrieving the content from the corresponding environment, CloudFront executes the Lambda@Edge associated with the `origin-response` stage. This is [`setHeadersOnOriginResponse`](https://github.com/hollowverse/route-request/blob/master/src/setHeadersOnOriginResponse.ts).

`setHeadersOnOriginResponse`, as the name implies, sets some headers on the origin response, including `Set-Cookie` which allows the user to stay on the same environment for the lifetime of the cookie.

CloudFront takes the response _after_ it has been modified by `setHeadersOnOriginResponse` and stores it in the edge cache so it's available for subsequent requests.
