/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from "redux";

import userData from "./reducers/SignIn";

const appReducer = combineReducers({ userData });

function setupStore() {
  return createStore(
    appReducer,
    /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const store = setupStore();

export { store };
