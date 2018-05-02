import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import Markdown from 'react-remarkable';

import css from './Documentation.module.scss';

type Props = {
  title?: string;
  source: string;
  onClose(val: null): void;
};

export class Documentation extends React.Component<Props> {
  handleCloseButton = () => this.props.onClose(null);

  render() {
    return (
      <Card className={css.root}>
        <CardBody>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={this.handleCloseButton}
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <Markdown source={this.props.source} />
        </CardBody>
      </Card>
    );
  }
}
