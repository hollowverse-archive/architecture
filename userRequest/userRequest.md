# User Request

```mermaid
graph TD
  user(User makes a request to<br>hollowverse.com<br>in a browser) --> cache{Is<br>hollowverse.com<br>cached in the<br>browser?}
  cache --> |Yes| finish(Return content to user)
  cache --> |No| dns{Is IP<br>address<br>cached?}
  dns --> |Yes| hcf[Get content from<br>hollowverse.com CloudFront]
  hcf --> finish
  dns --> |No| route53[Get IP address from<br>Route 53]
  route53 --> hcf
```

A user request to Hollowverse is handled as illustrated in this diagram.

Hollowverse uses [AWS Route 53](./TK-link-to-configurations) for DNS management.

`hollowverse.com` points to a [CloudFront distribution](../hollowverseComCloudFront.md).
