import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import { Link } from 'react-router-dom';

import { StoreState } from 'store/types';
import { getSelectedArchitectureItem } from 'store/reducers';
import { componentMap } from 'architecturalComponents/componentMap';

type Props = {
  selectedArchitectureItem: string;
};

export const LeftNav = connect((state: StoreState) => ({
  selectedArchitectureItem: getSelectedArchitectureItem(state),
}))(
  class extends React.Component<Props> {
    getSelectedItem = () =>
      find(
        componentMap,
        component => component.id === this.props.selectedArchitectureItem,
      );

    renderLinks = () => {
      return (
        <>
          <Link to="/visitor-request-processing">
            Visitor request processing
          </Link>
        </>
      );
    };

    render() {
      const selectedItem = this.getSelectedItem();
      const { Documentation } = selectedItem || ({} as any);

      return (
        <div>{Documentation ? <Documentation /> : this.renderLinks()}</div>
      );
    }
  },
);
