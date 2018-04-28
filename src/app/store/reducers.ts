import { createReducerForStoreKey, isActionOfType } from 'store/helpers';
import { StoreState } from 'store/types';

export const selectedArchitectureItemReducer = createReducerForStoreKey<
  'selectedArchitectureItem'
>(
  {
    SET_SELECTED_ARCHITECTURE_ITEM: (state, action) => {
      if (isActionOfType(action, 'SET_SELECTED_ARCHITECTURE_ITEM')) {
        return action.payload;
      }

      return state;
    },
  },
  null,
);

export const getSelectedArchitectureItem = (state: StoreState) =>
  state.selectedArchitectureItem;
