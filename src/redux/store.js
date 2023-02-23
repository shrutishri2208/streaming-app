import { createStore, applyMiddleware } from "redux";
import myListReducer from "./myList/myListReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, myListReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

// import { createStore } from "redux";
// import myListReducer from "./myList/myListReducer";

// export const store = createStore(myListReducer);
