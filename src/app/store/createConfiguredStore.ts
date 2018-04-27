import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';
import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import { reducer } from './reducer';

declare const global: NodeJS.Global & {
  /**
   * Added by Redux DevTools extension for Chrome and Firefox
   * See https://github.com/zalmoxisus/redux-devtools-extension
   */
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose | undefined;
};

export type CreateConfiguredStoreOptions = {
  history: History;
  initialState?: any;
  additionalMiddleware?: Middleware[];
};

// Added by Webpack
declare const module: {
  hot?: {
    accept(path?: string, cb?: () => void): void;
  };
};

const defaultInitialState: any = {
  routing: {
    location: null,
  },
  statusCode: 200,
  redirectionUrl: null,
  shouldFocusSearch: false,
};

export function createConfiguredStore({
  history,
  initialState = defaultInitialState,
}: CreateConfiguredStoreOptions) {
  let composeEnhancers = compose;

  if (global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const middlewares = [routerMiddleware(history)];

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      // tslint:disable-next-line no-require-imports
      const nextRootReducer = require('./reducer').reducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return {
    store,
    initialState,
    middlewares,
    history,
  };
}
