import React from 'react';
import { hot } from 'react-hot-loader';

import { ArchitecturesLayout } from 'pages/Architectures/ArchitecturesLayout';
import { architectures } from 'architectures/architectures';
import { DefaultView } from './DefaultView';

export const Architectures = hot(module)(
  class extends React.PureComponent {
    render() {
      return (
        <ArchitecturesLayout
          architectures={architectures}
          defaultView={DefaultView}
        />
      );
    }
  },
);
