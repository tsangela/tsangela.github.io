import types from './types';

export const setTab = (tab) => {
  return {
    type: types.SET_TAB,
    tab,
  };
};

export const selectItem = (item) => {
  return {
    type: types.SELECT_ITEM,
    item,
  };
};
