import { USER_INFO } from "./actionTypes";

export function login(state = {}, action) {
  const { userInfo, type } = action;

  switch (type) {
    case USER_INFO:
      return userInfo;
    default:
      return state;
  }
}
