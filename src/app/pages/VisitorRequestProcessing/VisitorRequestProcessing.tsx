import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import { Architecture } from 'components/Architecture/Architecture';
import { componentMap } from 'architecturalComponents/componentMap';
import { linkMap } from 'architecturalComponents/linkMap';
import { setSelectedItem } from 'store/actions';
import { Link } from 'app/types';

const { visitorComponent, browserComponent } = componentMap;

const visitorBrowserLink = linkMap.visitorRequestProcessing['visitor-browser'];

class VisitorRequestProcessingClass extends React.PureComponent<
  {
    setSelectedItem(selectedItem: any): any;
  },
  {}
> {
  components = [visitorComponent, browserComponent];

  links: Link[] = [visitorBrowserLink];

  handleClick = (itemId: string) => {
    this.props.setSelectedItem({
      architecture: 'visitorRequestProcessing',
      itemId,
    });
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
