import httpClient from "../../configs/httpClient";

import { USER_INFO } from "../reducers/ActionTypes";

import sendNotification from "../../helpers/NotificationsHelper";

function SignIn({ userName, password }) {
  return async (dispatch) => {
    try {
      const url = "internal/login";

      const data = await httpClient.post(url, { userName, password });

      dispatch({ userInfo: data, type: USER_INFO });

      sendNotification("SUCCESS", "Login efetuado com sucesso", "Sucesso");
    } catch (error) {
      sendNotification("ERROR", error.data.error, "Erro");
    }
  };
}

export { SignIn };
