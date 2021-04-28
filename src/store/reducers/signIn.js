import { USER_INFO } from "./ActionTypes";

export function LoginReducer(state = {}, action) {
  const { userInfo, type } = action;

  switch (type) {
    case USER_INFO:
      return userInfo;
    default:
      return state;
  }
}
