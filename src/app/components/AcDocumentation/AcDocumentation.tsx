/* React Component for Architectural Component Documentation */
import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardBody, Button } from 'reactstrap';

import { setSelectedItem } from 'store/actions';
import { ActionTypeToPayloadType } from 'store/types';
// import closeSvg from '!!url-loader!assets/close.svg';

type DispatchProps = {
  setSelectedItem(
    payload: ActionTypeToPayloadType['SET_SELECTED_ARCHITECTURE_ITEM'] | null,
  ): any;
};

type OwnProps = {
  title?: string;
};

type Props = OwnProps & DispatchProps;

export const AcDocumentation = connect<{}, DispatchProps, OwnProps>(undefined, {
  setSelectedItem,
})(
  class extends React.Component<Props> {
    handleCloseButton = () => this.props.setSelectedItem(null);

    render() {
      return (
        <Card>
          <CardBody>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.handleCloseButton}
            >
              <span aria-hidden="true">&times;</span>
            </button>

            {this.props.title ? (
              <CardTitle>{this.props.title}</CardTitle>
            ) : null}

            <div>{this.props.children}</div>
          </CardBody>
        </Card>
      );
    }
  },
);
