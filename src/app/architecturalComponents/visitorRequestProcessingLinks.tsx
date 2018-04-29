import React from 'react';
import { CardTitle } from 'reactstrap';

import { componentMap } from 'architecturalComponents/componentMap';
import { enhanceLink } from 'architecturalComponents/helpers';
import { AcDocumentation } from 'components/AcDocumentation/AcDocumentation';

export const visitorRequestProcessing = {
  'visitor-browser': enhanceLink({
    from: componentMap.visitorComponent,
    to: componentMap.browserComponent,
    Documentation: () => (
      <AcDocumentation>
        <CardTitle>Visitor → Browser</CardTitle>

        <p>
          The visitor requests <code>http:{'//'}hollowverse.com</code> in the
          browser
        </p>

        <CardTitle>Visitor ← Browser</CardTitle>
        <p>
          The browser displays the content of{' '}
          <code>http:{'//'}hollowverse.com</code>
        </p>
      </AcDocumentation>
    ),
    arrows: 'to, from',
  }),
};
