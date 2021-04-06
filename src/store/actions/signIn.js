import httpClient from "../../configs/httpClient";

import { USER_INFO } from "../reducers/actionTypes";

function signIn({ userName, password }) {
  return async (dispatch) => {
    try {
      const url = "internal/login";

      const requestBody = { userName, password };

      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const data = await httpClient.post(url, requestBody, config);

      console.log("data: ", data);
      dispatch({ userInfo: data, type: USER_INFO });
    } catch (error) {
      console.log("error: ", error);
      dispatch({ userInfo: [], type: USER_INFO });
    }
  };
}

export { signIn };
