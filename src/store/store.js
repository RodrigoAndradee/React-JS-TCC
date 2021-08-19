import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userData from "./reducers/SignIn";

const KEY_STORE = "root";
const appReducer = combineReducers({ userData });

const persistConfig = {
  key: KEY_STORE,
  storage,
};

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function setupStore() {
  return createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const store = setupStore();
const persistor = persistStore(store);

export { store, persistor };
