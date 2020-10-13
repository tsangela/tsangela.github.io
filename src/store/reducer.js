import { combineReducers } from 'redux';

import types from './types';
import { getTab } from '../resources/utils';
import { idMap } from '../resources/data';

const INITIAL_STATE = {
  tab: getTab(window.location.hash),
  selectedItem: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_TAB:
      // set current tab
      return {
        ...state,
        tab: action.tab,
        selectedItem: action.tab !== idMap.landing.id && state.selectedItem,
      };

    case types.SELECT_ITEM:
      // set current selected item
      return {
        ...state,
        selectedItem: action.item,
      };

    default:
      // default state
      return INITIAL_STATE;
  }
};

const getReducers = (extraReducers) => {
  return combineReducers({
    reducer,
    ...extraReducers,
  });
};

export default getReducers;
