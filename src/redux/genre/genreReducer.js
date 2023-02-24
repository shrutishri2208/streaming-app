import { ACTIONS } from "./genreTypes";

const initialState = {
  genre: "trending",
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_GENRE:
      return { genre: action.payload };
    default:
      return state;
  }
};

export default genreReducer;
