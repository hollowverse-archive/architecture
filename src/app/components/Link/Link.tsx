import { Link as RrdLink, LinkProps } from 'react-router-dom';
import cc from 'classcat';
import { connect } from 'react-redux';
import { StoreState } from 'store/types';
import React from 'react';

// type OwnProps = LinkProps & { activeClassName: string };

// type StateProps = {
//   location: StoreState['routing']['location'];
// };

// TODO: fix typing
export const Link = connect<any, any, any, any>((state: StoreState) => ({
  location: state.routing.location,
}))(
  class extends React.Component<any, any> {
    render() {
      const { className, activeClassName, dispatch, location, ...rest } = this
        .props as any;
      const classes = [className];

      if (activeClassName && this.props.to === location.pathname) {
        classes.push(activeClassName);
      }

      return <RrdLink {...rest} className={cc(classes)} />;
    }
  },
);
