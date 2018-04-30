// TODO: fix disabled rule below
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { hot } from 'react-hot-loader';
import cc from 'classcat';
import Helmet from 'react-helmet-async';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { LoadableHome } from 'pages/Home/LoadableHome';
import { LoadableUserRequest } from 'pages/UserRequest/LoadableUserRequest';
import { Container, Row, Col } from 'reactstrap';
import { LeftNav } from 'components/LeftNav/LeftNav';

import css from './App.module.scss';

export const App = class extends React.Component {
  render() {
    return (
      <div className={cc([css.root])}>
        <Helmet
          titleTemplate="%s - Hollowverse Architecture"
          defaultTitle="The architecture of Hollowverse"
        >
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no"
          />
        </Helmet>

        <Container>
          <div>
            <Link className="h1" to="/">
              Hollowverse Architectures
            </Link>
          </div>

          <Row className={css.content}>
            <Col sm={{ size: 4 }} className={css.leftNav}>
              <LeftNav />
            </Col>
            <Col sm={{ size: 8 }}>
              <Switch>
                <Route
                  path="/user-request-processing"
                  component={LoadableUserRequest}
                />
                <Route component={LoadableHome} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export const HotApp = hot(module)(App);
