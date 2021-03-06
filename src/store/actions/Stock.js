import httpClient from "../../configs/httpClient";

import {
  CREATE_STOCK_INFO,
  STOCK_INFO,
  UPDATE_STOCK_INFO,
} from "../ActionTypes";

import sendNotification from "../../helpers/NotificationsHelper";

function StockActions() {
  return async (dispatch) => {
    try {
      const url = "/stock";

      dispatch({ loading: true, type: STOCK_INFO });
      const data = await httpClient.get(url);

      dispatch({ stockInfo: data.data, type: STOCK_INFO });
    } catch (error) {
      sendNotification("ERROR", "Erro ao Obter ao Obter o Estoque", "Erro");
    }
  };
}

function CreateStockActions(stockInfo) {
  return async (dispatch) => {
    try {
      const url = "/stock/createStock";

      const data = await httpClient.post(url, stockInfo);

      dispatch({ createStockInfo: data.data, type: CREATE_STOCK_INFO });

      StockActions();

      sendNotification("SUCCESS", "Produto Adicionado com Sucesso", "Sucesso");
    } catch (error) {
      sendNotification("ERROR", "Erro ao Adicionar Produto no Estoque", "Erro");
    }
  };
}

function UpdateStockActions(stockInfo) {
  const enhancedStockInfo = { ...stockInfo, productId: stockInfo.id };

  return async (dispatch) => {
    try {
      const url = `/stock/updateStock/${stockInfo.id}`;

      const data = await httpClient.put(url, enhancedStockInfo);

      dispatch({ updateStockInfo: data, type: UPDATE_STOCK_INFO });

      StockActions();

      sendNotification("SUCCESS", "Produto Editado com Sucesso", "Sucesso");
    } catch (error) {
      sendNotification("ERROR", "Erro ao Editar Produto no Estoque", "Erro");
    }
  };
}

function DeleteStockActions(stockId) {
  return async (dispatch) => {
    try {
      const url = `/stock/deleteStock/${stockId}`;

      const data = await httpClient.delete(url);

      dispatch({ updateStockInfo: data, type: UPDATE_STOCK_INFO });

      sendNotification("SUCCESS", "Produto Deletado com Sucesso", "Sucesso");
    } catch (error) {
      sendNotification("ERROR", "Erro ao Deletar Produto no Estoque", "Erro");
    }
  };
}

export {
  CreateStockActions,
  DeleteStockActions,
  StockActions,
  UpdateStockActions,
};
