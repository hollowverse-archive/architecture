import React from 'react';
import cc from 'classcat';
import { Route, Switch } from 'react-router';
import { map, find } from 'lodash';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Row, Col, ListGroup } from 'reactstrap';

import {
  Architectures,
  Architecture,
  ArchitectureComponent,
  ArchitectureLink,
} from 'app/types';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { Documentation } from './Documentation';

import css from './ArchitecturesLayout.module.scss';

type Props = {
  architectures: Architectures;
  defaultView: React.ComponentType;
};

type State = {
  selectedItemId: string | null;
};

export const ArchitecturesLayout = withRouter(
  class extends React.PureComponent<Props & RouteComponentProps<any>, State> {
    state: State = {
      selectedItemId: null,
    };

    handleArchitectureDiagramClick = (itemId: string | null) => {
      this.setState({ selectedItemId: itemId });
    };

    createArchitectureDiagramRenderer = (architecture: Architecture) => () => (
      <ArchitectureDiagram
        selectedItemId={this.state.selectedItemId}
        architecture={architecture}
        onClick={this.handleArchitectureDiagramClick}
      />
    );

    isSelectedArchitecture = (architectureName: string) =>
      this.props.location.pathname === `/${architectureName}`;

    getSelectedArchitecture = () =>
      find(this.props.architectures, (_1, architectureName) =>
        this.isSelectedArchitecture(architectureName),
      );

    renderLinksToArchitectures = () => (
      <ListGroup>
        {map(this.props.architectures, (architecture, architectureName) => (
          <Link
            key={architectureName}
            className={cc([
              'list-group-item list-group-item-action',
              {
                active: this.isSelectedArchitecture(architectureName),
              },
            ])}
            to={`/${architectureName}`}
          >
            {architecture.name}
          </Link>
        ))}
      </ListGroup>
    );

    renderSelectedItemDocumentation = () => {
      const {
        components,
        links,
      } = this.getSelectedArchitecture() as Architecture;
      const { selectedItemId } = this.state;

      // prettier-ignore
      const selectedItem = (
        find(components, ({ id }) => id === selectedItemId) ||
        find(links, ({ id }) => id === selectedItemId)
      ) as ArchitectureComponent | ArchitectureLink;

      return (
        <Documentation
          title={selectedItem.name}
          source={selectedItem.documentation}
          onClose={this.handleArchitectureDiagramClick}
        />
      );
    };

    render() {
      return (
        <div className={cc([css.root])}>
          <Row className={css.content}>
            <Col sm={{ size: 4 }} className={css.leftNav}>
              {this.state.selectedItemId
                ? this.renderSelectedItemDocumentation()
                : this.renderLinksToArchitectures()}
            </Col>
            <Col sm={{ size: 8 }}>
              <Switch>
                {map(this.props.architectures, (architecture, key) => (
                  <Route
                    key={key}
                    path={`/${key}`}
                    render={this.createArchitectureDiagramRenderer(
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
  },
);
