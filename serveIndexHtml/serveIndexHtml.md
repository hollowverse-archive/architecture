# Serving `index.html`

```mermaid
graph TD
  user(User types <br>hollowverse.com<br>in a browser) --> dns{Is IP<br>address<br>cached?}
  dns --> |Yes| hcf[Get index.html from<br>hollowverse.com CloudFront]
  hcf --> response(Send index.html to the browser)
  dns --> |No| route53[Get IP address from<br>Route 53]
  route53 --> hcf
```

An initial user request to Hollowverse is handled as illustrated in this diagram.

Hollowverse uses [AWS Route 53](./TK-link-to-configurations) for DNS management.

`hollowverse.com` points to a CloudFront distribution that is [documented here](../hollowverseComCloudFront/hollowverseComCloudFront.md).
