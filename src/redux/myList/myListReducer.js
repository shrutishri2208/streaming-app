import { ACTIONS } from "./myListTypes";

const initialState = {
  myList: [],
  myListId: [0],
};

const myListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return {
        // myList: [...state.myList, action.payload.summary.id],
        myListId: !state.myList.includes(action.payload.summary.id)
          ? [...state.myListId, action.payload.summary.id]
          : state.myList,
        myList: !state.myList.includes(action.payload)
          ? [...state.myList, action.payload]
          : state.myList,
      };
    case ACTIONS.DELETE_ITEM:
      return {
        myList: state.myList.filter(
          (item) => item.summary.id !== action.payload
        ),
        myListId: state.myListId.filter((item) => item !== action.payload),
      };
    case ACTIONS.CLEAR_LIST:
      return {
        myList: [],
        myListId: [0],
      };
    default:
      return state;
  }
};

export default myListReducer;
