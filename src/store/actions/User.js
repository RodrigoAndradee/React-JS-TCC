import httpClient from "../../configs/httpClient";

import { CREATE_USER } from "../ActionTypes";

import sendNotification from "../../helpers/NotificationsHelper";

function CreateUser(userInfo) {
  return async (dispatch) => {
    try {
      const url = "/internal/create";

      const data = await httpClient.post(url, userInfo);

      dispatch({ stockInfo: data.data, type: CREATE_USER });
      sendNotification(
        "SUCCESS",
        `Usuário(a) "${userInfo.email}" criado com sucesso`,
        "Sucesso"
      );
    } catch (error) {
      sendNotification("ERROR", "Erro ao criar usuário", "Erro");
    }
  };
}

export { CreateUser };
