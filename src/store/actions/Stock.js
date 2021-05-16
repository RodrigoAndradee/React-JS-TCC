import httpClient from "../../configs/httpClient";

import { CREATE_STOCK_INFO, STOCK_INFO } from "../reducers/ActionTypes";

import sendNotification from "../../helpers/NotificationsHelper";

function StockActions() {
  return async (dispatch) => {
    try {
      const url = "/stock";

      const data = await httpClient.get(url);

      dispatch({ stockInfo: data.data, type: STOCK_INFO });
    } catch (error) {
      sendNotification("ERROR", "Erro ao Obter ao Obter o Estoque", "Erro");

      dispatch({ stockInfo: error, type: STOCK_INFO });
    }
  };
}

function CreateStockActions(stockInfo) {
  return async (dispatch) => {
    try {
      const url = "/stock/createStock";

      const data = await httpClient.get(url, stockInfo);

      dispatch({ createStockInfo: data.data, type: CREATE_STOCK_INFO });
    } catch (error) {
      sendNotification("ERROR", "Erro ao Adicionar Produto no Estoque", "Erro");

      dispatch({ createStockInfo: error, type: CREATE_STOCK_INFO });
    }
  };
}

export { CreateStockActions, StockActions };
