import React from 'react';
import cc from 'classcat';
import { Route, Switch } from 'react-router';
import { map } from 'lodash';

import { Architectures, Architecture } from 'app/types';
import { Row, Col, ListGroup } from 'reactstrap';
import { Link } from './Link';
import { ArchitectureDiagram } from './ArchitectureDiagram';

import css from './ArchitecturesLayout.module.scss';

type Props = {
  architectures: Architectures;
  defaultView: React.ComponentType;
};

type State = {
  selectedItem: string | null;
};

export class ArchitecturesLayout extends React.PureComponent<Props, State> {
  state: State = {
    selectedItem: null,
  };

  createArchitectureDiagramComponent = (architecture: Architecture) => () => (
    <ArchitectureDiagram
      selectedItem={this.state.selectedItem}
      architecture={architecture}
      onClick={this.handleArchitectureDiagramClick}
    />
  );

  handleArchitectureDiagramClick = (itemId: string) => {
    this.setState({
      selectedItem: itemId,
    });
  };

  render() {
    return (
      <div className={cc([css.root])}>
        <Row className={css.content}>
          <Col sm={{ size: 4 }} className={css.leftNav}>
            <ListGroup>
              {map(this.props.architectures, (architecture, key) => (
                <Link
                  key={key}
                  activeClassName="active"
                  className="list-group-item list-group-item-action"
                  to={`/${key}`}
                >
                  {architecture.name}
                </Link>
              ))}
            </ListGroup>
          </Col>
          <Col sm={{ size: 8 }}>
            <Switch>
              {map(this.props.architectures, (architecture, key) => (
                <Route
                  key={key}
                  path={`/${key}`}
                  component={this.createArchitectureDiagramComponent(
                    architecture,
                  )}
                />
              ))}
              <Route component={this.props.defaultView} />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}
