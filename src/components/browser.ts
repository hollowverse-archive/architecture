import { Component } from '../types';
import { api } from './api';
import { servePages } from './servePages';
import { oneLine } from 'common-tags';

export const browser: Component = {
  name: 'Web browser',
  relationships: [
    [
      servePages,
      {
        upLink: oneLine`
          If the browser does not have the Hollowverse web app loaded,
          it requests index.html (without data) from servePages
        `,
        downLink: oneLine`
          servePages returns index.html (without data) to the browser
        `,
      },
    ],
    [
      api,
      {
        upLink: oneLine`
          If the browser has the Hollowverse web app loaded,
          it requests the content from the API
        `,
        downLink: oneLine`
          The API returns the content to the Hollowverse web app
        `,
      },
    ],
  ],
};
