import { createStore, applyMiddleware } from "redux";
import myListReducer from "./myList/myListReducer";
import rootReducers from "./rootReducers";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import genreReducer from "./genre/genreReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["genre"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

// import { createStore } from "redux";
// import myListReducer from "./myList/myListReducer";

// export const store = createStore(myListReducer);
