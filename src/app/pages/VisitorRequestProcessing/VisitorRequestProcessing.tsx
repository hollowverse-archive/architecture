import React from 'react';
import { hot } from 'react-hot-loader';

import { Network } from 'components/Network/Network';
import { visitor, browser } from 'architecturalComponents/components';
import { link, colors } from 'architecturalComponents/helpers';

class VisitorRequestProcessingClass extends React.PureComponent<{}, {}> {
  container: any;

  getNodes = () => [visitor, browser];

  getEdges = () => [
    link(
      visitor,
      browser,
      colors.green,
      'Visitor requests Hollowverse content from the browser',
    ),
    link(
      browser,
      visitor,
      colors.blue,
      'Browser returns Hollowverse content to visitor',
    ),
  ];

  handleClick = (params: any) => {
    // console.log('params', params);
  };

  render() {
    return (
      <Network
        nodes={this.getNodes()}
        edges={this.getEdges()}
        onClick={this.handleClick}
      />
    );
  }
}

export const VisitorRequestProcessing = hot(module)(
  VisitorRequestProcessingClass,
);
