import httpClient from "../../configs/httpClient";

import { USER_INFO } from "../reducers/actionTypes";

function signIn(user, password) {
  return async (dispatch) => {
    try {
      const url = "http://192.168.15.200:8081/auth/login";
      const { data } = await httpClient.post(url, {
        userName: user,
        password,
      });

      dispatch({ userInfo: data, type: USER_INFO });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
}

export { signIn };
