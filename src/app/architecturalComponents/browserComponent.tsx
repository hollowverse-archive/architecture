import React from 'react';

import { ArchitecturalComponent } from 'app/types';
import { AcDocumentation } from 'components/AcDocumentation/AcDocumentation';

export const browserComponent: ArchitecturalComponent = {
  id: 'browser',
  name: 'Browser',
  Documentation: () => {
    return (
      <AcDocumentation title="Web browser">
        <p>
          If the browser has cache of the content, it will return it right away
          to the visitor.
        </p>

        <p>
          If the browser does not have a cache of the content, it will hit{' '}
          <code>https:{'//'}hollowverse.com</code>, which points to the [NAME OF
          CLOUDFRONT DISTRIBUTION], which serves the <code>index.html</code>.
        </p>

        <p>
          Once the browser has <code>index.html</code>, it will:
        </p>

        <ul>
          <li>
            Download the static content from [NAME OF CLOUDFRONT DISTRIBUTION]
            which serves the static assets
          </li>

          <li>
            Send a request to <code>https:{'//'}api.hollowverse.com</code>
          </li>
        </ul>
      </AcDocumentation>
    );
  },
};
