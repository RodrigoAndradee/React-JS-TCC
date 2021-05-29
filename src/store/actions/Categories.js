import httpClient from "../../configs/httpClient";

import { CATEGORY_INFO } from "../reducers/ActionTypes";

import sendNotification from "../../helpers/NotificationsHelper";

function CategoryActions() {
  return async (dispatch) => {
    try {
      const url = "/category";

      const data = await httpClient.get(url);

      dispatch({ categoryInfo: data.data, type: CATEGORY_INFO });
    } catch (error) {
      sendNotification("ERROR", "Erro ao Obter as Categorias", "Error");
    }
  };
}

export { CategoryActions };
