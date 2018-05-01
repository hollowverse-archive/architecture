# Web browser

If the browser has cache of the content, it will return it right away
to the user.

If the browser does not have a cache of the content, it will hit{' '}
`https://hollowverse.com`, which points to the [NAME OF
CLOUDFRONT DISTRIBUTION], which serves the `index.html`.

Once the browser has `index.html`, it will:

* Download the static content from [NAME OF CLOUDFRONT DISTRIBUTION] which serves the static assets
* Send a request to `https://api.hollowverse.com`
