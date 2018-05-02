import React from 'react';
import { Router } from 'react-router';
import domready from 'domready';
import { render } from 'react-dom';
import { createHashHistory } from 'history';

import { HotApp as App } from 'App/App';
import { HelmetProvider } from 'react-helmet-async';

const history = createHashHistory();

// This has to be a class in order for hot module replacement to work
class Root extends React.PureComponent {
  render() {
    return (
      <HelmetProvider>
        <Router history={history}>
          <App />
        </Router>
      </HelmetProvider>
    );
  }
}

const renderApp = () => {
  render(
    <Root />,
    // tslint:disable-next-line:no-non-null-assertion
    document.getElementById('app')!,
  );
};

const renderOnDomReady = () => {
  domready(renderApp);
};

declare const module: {
  hot?: { accept(path?: string, cb?: () => void): void };
};

if (module.hot) {
  module.hot.accept();
}

renderOnDomReady();
