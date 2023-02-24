import { combineReducers } from "redux";
import myListReducer from "./myList/myListReducer";
import genreReducer from "./genre/genreReducer";

const rootReducers = combineReducers({
  myList: myListReducer,
  genre: genreReducer,
});

export default rootReducers;
