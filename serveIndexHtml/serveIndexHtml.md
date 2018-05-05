# Serving `index.html`

```mermaid
sequenceDiagram
  participant browser as Browser
  participant route53 as AWS Route 53
  participant hcf as hollowverse.com CloudFront

  browser ->> route53: Request IP address of hollowverse.com
  route53 ->> browser: Return IP address
  browser ->> hcf: Request index.html
  hcf ->> browser: Return index.html
```

An initial user request to Hollowverse is handled as illustrated in the diagram above.

Hollowverse uses [AWS Route 53](./TK-link-to-configurations) for DNS management.

`hollowverse.com` points to a CloudFront distribution that is [documented here](../hollowverseComCloudFront/hollowverseComCloudFront.md).
