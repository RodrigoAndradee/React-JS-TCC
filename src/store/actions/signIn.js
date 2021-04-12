import httpClient from "../../configs/httpClient";

import { USER_INFO } from "../reducers/actionTypes";

function signIn({ userName, password }) {
  return async (dispatch) => {
    try {
      const url = "internal/login";

      const data = await httpClient.post(url, { userName, password });

      console.log("data: ", data);
      dispatch({ userInfo: data, type: USER_INFO });
    } catch (error) {
      console.log("error: ", error);
      dispatch({ userInfo: [], type: USER_INFO });
    }
  };
}

export { signIn };
