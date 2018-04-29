import React from 'react';

import { ArchitecturalComponent } from 'app/types';
import { AcDocumentation } from 'components/AcDocumentation/AcDocumentation';

export const visitorComponent: ArchitecturalComponent = {
  id: 'visitor',
  name: 'Visitor',
  Documentation: () => {
    return (
      <AcDocumentation title="Hollowverse visitor">
        The visitor will type <code>http:{'//'}hollowverse.com</code> into their
        browser to visit Hollowverse
      </AcDocumentation>
    );
  },
};
