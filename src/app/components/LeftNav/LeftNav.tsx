import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import { Link } from 'react-router-dom';

import { StoreState, ActionTypeToPayloadType } from 'store/types';
import { getSelectedArchitectureItem } from 'store/reducers';
import { componentMap } from 'architecturalComponents/componentMap';
import { linkMap } from 'architecturalComponents/linkMap';

type Props = {
  selectedArchitectureItem:
    | ActionTypeToPayloadType['SET_SELECTED_ARCHITECTURE_ITEM']
    | null;
};

export const LeftNav = connect((state: StoreState) => ({
  selectedArchitectureItem: getSelectedArchitectureItem(state),
}))(
  class extends React.Component<Props> {
    getSelectedItem = () => {
      if (this.props.selectedArchitectureItem !== null) {
        const { itemId, architecture } = this.props.selectedArchitectureItem;

        return (
          find(componentMap, component => component.id === itemId) ||
          find(linkMap[architecture], link => link.id === itemId)
        );
      }

      return false;
    };

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
      const selectedItem = this.getSelectedItem() as any; // TODO: fix typing
      const Documentation = selectedItem ? selectedItem.Documentation : false;

      return (
        <div>{Documentation ? <Documentation /> : this.renderLinks()}</div>
      );
    }
  },
);
