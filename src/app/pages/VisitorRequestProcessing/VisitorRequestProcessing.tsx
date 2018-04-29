import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import { Architecture } from 'components/Architecture/Architecture';
import { visitor, browser } from 'architecturalComponents/components';
import { setSelectedItem } from 'store/actions';
import { Link } from 'app/types';

class VisitorRequestProcessingClass extends React.PureComponent<
  {
    setSelectedItem(selectedItem: any): any;
  },
  {}
> {
  components = [visitor, browser];

  links: Link[] = [[visitor, browser, { arrows: 'to, from' }]];

  handleClick = ({
    componentId,
    linkId,
  }: {
    componentId: string;
    linkId: string;
  }) => {
    const payload = componentId || null;

    this.props.setSelectedItem(payload);
  };

  render() {
    return (
      <Architecture
        components={this.components}
        links={this.links}
        onClick={this.handleClick}
      />
    );
  }
}

export const VisitorRequestProcessing = hot(module)(
  connect(undefined, { setSelectedItem })(VisitorRequestProcessingClass),
);
