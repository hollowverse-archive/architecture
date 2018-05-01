// TODO: fix disabled rule below
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Route } from 'react-router';
import { hot } from 'react-hot-loader';
import cc from 'classcat';
import Helmet from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { Container } from 'reactstrap';
import { LoadableArchitectures } from 'pages/Architectures/LoadableArchitectures';
import { architectures } from 'architectures/architectures';
// import { LeftNav } from 'components/LeftNav/LeftNav';

import css from './App.module.scss';

export const App = class extends React.Component {
  render() {
    return (
      <div className={cc([css.root])}>
        <Helmet
          titleTemplate="%s - Hollowverse Architecture"
          defaultTitle="Hollowverse Architecture"
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

          <Route path="/" component={LoadableArchitectures} />
        </Container>
      </div>
    );
  }
};

export const HotApp = hot(module)(App);