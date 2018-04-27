import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const appReducers = {};

/**
 * This is the root reducer of the app.
 * It includes Hollowverse `appReducer` as well as other reducers
 * that may be required by external modules.
 */
export const reducer = combineReducers({
  ...appReducers,
  routing: routerReducer,
});
