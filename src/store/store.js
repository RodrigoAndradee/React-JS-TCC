import { createStore, combineReducers } from "redux";

import LoginReducer from "./reducers/SignIn";

const appReducer = combineReducers({ LoginReducer });

function setupStore() {
  return createStore(appReducer);
}

const store = setupStore();

export { store };
