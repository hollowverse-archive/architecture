# After Downloading `index.html`

This documents what happens after the user loads `index.html` of `hollowverse.com`

## Notable Person page (e.g. /Tom_Hanks)

```mermaid
sequenceDiagram
  participant browser as Browser
  participant api as api hollowverse com
  participant aurora as AWS Aurora
  participant photos as photos hollowverse com
  participant s3 as AWS S3 bucket

  browser ->> api: Request Notable Person data
  api ->> aurora: Request Notable Person data
  aurora ->> api: Return Notable Person data
  api ->> browser: Return Notable Person data (including photo URL)
  browser ->> photos: Request photo
  photos ->> s3: Request photo
  s3 ->> photos: Return photo
  photos ->> browser: Return photo
```

## Search page (/search)

```mermaid
sequenceDiagram
    participant browser as Browser
    participant algolia as AlgoliaSearch
    participant photos as photos hollowverse com
    participant s3 as AWS S3 bucket

    browser ->> algolia: Request results for user search
    algolia ->> browser: Return search results (including photo URLs)
    browser ->> photos: Request photo
    photos ->> s3: Request photo
    s3 ->> photos: Return photo
    photos ->> browser: Return photo
```

## Any Hollowverse page

```mermaid
sequenceDiagram
  participant browser as Browser
  participant sl as SumoLogic
  participant ga as Google Analytics

  browser ->> sl: Log events to SumoLogic
  browser ->> ga: Log events to Google Analytics
```

All of Hollowverse pages log events to SumoLogic and Google Analytics.

SumoLogic logging is used for short term debugging and monitoring.

Google Analytics logging is used for long-term analytics purposes.
