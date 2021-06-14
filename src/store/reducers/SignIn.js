import { LOG_OUT, USER_INFO } from "../ActionTypes";

function LoginReducer(state = {}, action) {
  const { userInfo, type } = action;

  switch (type) {
    case USER_INFO:
      return userInfo;
    case LOG_OUT:
      return {};
    default:
      return state;
  }
}

export default LoginReducer;
