# Hollowverse Architectures [![Build Status](https://travis-ci.org/hollowverse/architecture.svg?branch=master)](https://travis-ci.org/hollowverse/architecture)

This repository contains documentation of the various architectures used in Hollowverse.

## Architectures

* [Serving `index.html` of hollowverse.com](./architectures/serveIndexHtml.md)
* [After downloading `index.html`](./architectures/afterDownloadingIndexHtml.md)
* [hollowverse.com CloudFront distribution](./architectures/hollowverseComCloudFront.md)
* [hollowverse.com origin server](./architectures/originServer.md)
* [How deployment works in Hollowverse](./architectures/deployment.md)

---

## Contributing and making edits

### File and folder structure

The architectures are documented in [`/architectures`](./architectures). Each markdown file describes one architecture. Inside `/architectures`, there's a folder named [`/diagrams`](./architectures/diagrams), which contains the [PlantUML](http://plantuml.com/) (`.puml`) files as well as the `svg` images which are generated from the `puml` files.

The `svg` images are referenced inside the markdown files to illustrate the documented architectures.

### Editing files

To get started

1.  Clone this repo
1.  `cd` into it
1.  `yarn install`

Now feel free to edit stuff. We recommend using VS Code and installing the [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) extension so that you can preview the PlantUML files as you edit them.

When you're done, run

```bash
yarn build
```

...to build the `svg` files from the `puml` files.

---

[If you'd like to tell us something, or need help with anything...](https://github.com/hollowverse/hollowverse/wiki/Help)
