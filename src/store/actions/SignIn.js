import httpClient from "../../configs/httpClient";

import { LOG_OUT, USER_INFO } from "../ActionTypes";

import sendNotification from "../../helpers/NotificationsHelper";

function SignIn({ userName, password }) {
  return async (dispatch) => {
    try {
      const url = "internal/login";

      const data = await httpClient.post(url, { userName, password });

      dispatch({ userInfo: data.data, type: USER_INFO });

      sendNotification("SUCCESS", "Login efetuado com sucesso", "Sucesso");
    } catch (error) {
      sendNotification("ERROR", "Erro ao efetuar Login", "Erro");
    }
  };
}

function LogOut() {
  return { type: LOG_OUT };
}

export { LogOut, SignIn };
