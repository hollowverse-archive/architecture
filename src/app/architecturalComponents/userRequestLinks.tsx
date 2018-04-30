import React from 'react';
import { CardTitle } from 'reactstrap';

import { componentMap } from 'architecturalComponents/componentMap';
import { enhanceLink } from 'architecturalComponents/helpers';
import { AcDocumentation } from 'components/AcDocumentation/AcDocumentation';

export const userRequest = {
  'user-browser': enhanceLink({
    from: componentMap.userComponent,
    to: componentMap.browserComponent,
    Documentation: () => (
      <AcDocumentation>
        <CardTitle>User → Browser</CardTitle>

        <p>
          The user requests <code>http:{'//'}hollowverse.com</code> in the
          browser
        </p>

        <CardTitle>User ← Browser</CardTitle>
        <p>
          The browser displays the content of{' '}
          <code>http:{'//'}hollowverse.com</code>
        </p>
      </AcDocumentation>
    ),
    arrows: 'to, from',
  }),
};
