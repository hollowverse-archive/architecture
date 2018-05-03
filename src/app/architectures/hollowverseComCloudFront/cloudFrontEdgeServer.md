CloudFront edge server looks for a cached copy of the page that matches the headers exactly as sent by `assignEnvironmentToViewerRequest`.

If a cached copy of the page is available for the headers, CloudFront returns that copy to the request source and request does not hit the origin server.
