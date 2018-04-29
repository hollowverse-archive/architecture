/* React Component for Architectural Component Documentation */
import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardBody, Button } from 'reactstrap';

import { setSelectedItem } from 'store/actions';
// import closeSvg from '!!url-loader!assets/close.svg';

type DispatchProps = {
  setSelectedItem(selectedItem: any): any;
};

type OwnProps = {
  title: string;
};

type Props = OwnProps & DispatchProps;

export const AcDocumentation = connect<null, DispatchProps, OwnProps>(null, {
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

            <CardTitle>{this.props.title}</CardTitle>

            <div>{this.props.children}</div>
          </CardBody>
        </Card>
      );
    }
  },
);