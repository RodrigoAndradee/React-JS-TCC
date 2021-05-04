import httpClient from "../../configs/httpClient";

import { USER_INFO } from "../reducers/ActionTypes";

function SignIn({ userName, password }) {
  return async (dispatch) => {
    try {
      const url = "internal/login";

      const data = await httpClient.post(url, { userName, password });

      dispatch({ userInfo: data, type: USER_INFO });
    } catch (error) {
      dispatch({ userInfo: error, type: USER_INFO });
    }
  };
}

export { SignIn };
