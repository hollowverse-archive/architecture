import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { StoreState, ReducerMap } from './types';

import { selectedArchitectureItemReducer } from 'store/reducers';

const appReducers: ReducerMap = {
  selectedArchitectureItem: selectedArchitectureItemReducer,
};

export const reducer = combineReducers<StoreState>({
  ...appReducers,
  routing: routerReducer,
});
