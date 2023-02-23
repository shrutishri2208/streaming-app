import { ACTIONS } from "./myListTypes";

export const addItem = (listItem) => {
  return {
    type: ACTIONS.ADD_ITEM,
    payload: listItem,
  };
};

export const deleteItem = (id) => {
  return {
    type: ACTIONS.DELETE_ITEM,
    payload: id,
  };
};

export const clearList = () => {
  return {
    type: ACTIONS.CLEAR_LIST,
  };
};
