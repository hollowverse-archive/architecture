/* React Component for Architectural Component Documentation */
import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import Markdown from 'react-remarkable';

type Props = {
  title?: string;
  source: string;
  onClose(val: null): void;
};

export class Documentation extends React.Component<Props> {
  handleCloseButton = () => this.props.onClose(null);

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

          {this.props.title ? <CardTitle>{this.props.title}</CardTitle> : null}

          <Markdown source={this.props.source} />
        </CardBody>
      </Card>
    );
  }
}
