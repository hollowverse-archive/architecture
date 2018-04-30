import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import { Architecture } from 'components/Architecture/Architecture';
import { componentMap } from 'architecturalComponents/componentMap';
import { linkMap } from 'architecturalComponents/linkMap';
import { setSelectedItem } from 'store/actions';
import { Link } from 'app/types';

const { userComponent, browserComponent } = componentMap;

const userBrowserLink = linkMap.userRequest['user-browser'];

class UserRequestClass extends React.PureComponent<{
  setSelectedItem(selectedItem: any): any;
}> {
  components = [userComponent, browserComponent];

  links: Link[] = [userBrowserLink];

  handleClick = (itemId: string) => {
    this.props.setSelectedItem({
      architecture: 'userRequest',
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

export const UserRequest = hot(module)(
  connect(undefined, { setSelectedItem })(UserRequestClass),
);
