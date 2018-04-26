import React from 'react';
import { hot } from 'react-hot-loader';
import cc from 'classcat';
import Helmet from 'react-helmet-async';
import { Route, Switch } from 'react-router';
import { LoadableHome } from 'pages/Home/LoadableHome';

import classes from './App.module.scss';

import { ScrollTo } from 'components/ScrollTo/ScrollTo';

/**
 * Main app component
 */
export const App = class extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cc([classes.root])}>
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
        <Route>
          {props => <ScrollTo updateKey={props.location.pathname} />}
        </Route>
        <div className={classes.view}>
          <Switch>
            <Route component={LoadableHome} />
          </Switch>
        </div>
      </div>
    );
  }
};

export const HotApp = hot(module)(App);
