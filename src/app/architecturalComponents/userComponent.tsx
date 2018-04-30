import React from 'react';

import { ArchitecturalComponent } from 'app/types';
import { AcDocumentation } from 'components/AcDocumentation/AcDocumentation';

export const userComponent: ArchitecturalComponent = {
  id: 'user',
  name: 'User',
  Documentation: () => {
    return (
      <AcDocumentation title="Hollowverse user">
        The user will type <code>http:{'//'}hollowverse.com</code> into their
        browser to visit Hollowverse
      </AcDocumentation>
    );
  },
};
