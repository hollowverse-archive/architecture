# After Downloading `index.html`

This documents what happens after the user loads `index.html` of `hollowverse.com`

## Any Hollowverse page

<p align="center">
<img src="./diagrams/afterDownloadingIndexHtmlAnyHollowversePage.puml.svg">
</p>

After the browser downloads `index.html` for any page, as described [here](./serveIndexHtml.md), the first thing the browser will do is request the CSS and JS files from [hollowverse.com CloudFront distribution](./hollowverseComCloudFront.md).

Most hollowverse.com also send logging and analytics events to SumoLogic and Google Analytics.

SumoLogic logging is used for short term debugging and monitoring.

Google Analytics logging is used for long-term analytics purposes.

## Notable Person page (e.g. `/Tom_Hanks`)

<p align="center">
<img src="./diagrams/afterDownloadingIndexHtmlNotablePersonPage.puml.svg">
</p>

hollowverse.com data is retrievable from `api.hollowverse.com`, an AWS Lambda that executes [`serveApi`](https://github.com/hollowverse/api/blob/master/src/serveApi.ts).

`api.hollowverse.com` is queryable using GraphQL and it uses AWS Aurora, a managed relational MySQL-compatible database service.

After the browser receives the response from `api.hollowverse.com`, it will know where to find the photo of the Notable Person, so it requests the photo from `photos.hollowverse.com` which is backed by an AWS S3 bucket.

Both `api.hollowverse.com` and `photos.hollowverse.com` use CloudFront for caching.

## Search page (`/search`)

<p align="center">
<img src="./diagrams/afterDownloadingIndexHtmlSearchPage.puml.svg">
</p>

The search page works in a very similar manner to the Notable Person page with the exception that the data is retrieved from AlgoliaSearch instead of `api.hollowverse.com`.
