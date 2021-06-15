import { CREATE_USER } from "../ActionTypes";

export function UserReducer(state = {}, action) {
  const { createUserInfo, type } = action;

  switch (type) {
    case CREATE_USER:
      return createUserInfo;

    default:
      return state;
  }
}
