import httpClient from "../../configs/httpClient";

import { STOCK_INFO } from "../reducers/ActionTypes";

import sendNotification from "../../helpers/NotificationsHelper";

function StockActions() {
  return async (dispatch) => {
    try {
      const url = "/stock";

      const data = await httpClient.get(url);

      dispatch({ stockInfo: data.data, type: STOCK_INFO });
    } catch (error) {
      sendNotification("ERROR", error, "Erro ao Obter ao Obter o Estoque");

      dispatch({ stockInfo: error, type: STOCK_INFO });
    }
  };
}

export { StockActions };
