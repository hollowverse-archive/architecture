import React from 'react';

import { componentMap } from 'architecturalComponents/componentMap';
import { enhanceLink } from 'architecturalComponents/helpers';
import { AcDocumentation } from 'components/AcDocumentation/AcDocumentation';

export const visitorRequestProcessing = {
  'visitor-browser': enhanceLink([
    componentMap.visitorComponent,
    componentMap.browserComponent,
    { arrows: 'to, from' },
    () => (
      <>
        <AcDocumentation title="Visitor → Browser">
          The visitor requests <code>http:{'//'}hollowverse.com</code> in the
          browser
        </AcDocumentation>

        <AcDocumentation title="Browser → Visitor">
          The browser displays the content of{' '}
          <code>http:{'//'}hollowverse.com</code>
        </AcDocumentation>
      </>
    ),
  ]),
};
