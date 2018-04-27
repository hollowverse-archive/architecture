import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import domready from 'domready';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { HotApp as App } from 'components/App/App';
import { createConfiguredStore } from 'store/createConfiguredStore';
import { HelmetProvider } from 'react-helmet-async';

const history = createBrowserHistory();

const { store } = createConfiguredStore({
  history,
});

// This has to be a class in order for hot module replacement to work
class Root extends React.PureComponent {
  render() {
    return (
      <HelmetProvider>
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
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
