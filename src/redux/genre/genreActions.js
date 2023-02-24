import { ACTIONS } from "./genreTypes";

export const setGenre = (payload) => {
  return {
    type: ACTIONS.SET_GENRE,
    payload: payload,
  };
};
