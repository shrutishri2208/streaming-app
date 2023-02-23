import { combineReducers } from "redux";
import myListReducer from "./myList/myListReducer";
import titlesReducer from "./titles/titlesReducer";

const rootReducers = combineReducers({
  myList: myListReducer,
  titles: titlesReducer,
});

export default rootReducers;
