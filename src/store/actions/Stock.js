import httpClient from "../../configs/httpClient";

// Assets
import * as constants from "../../assets/constants-file.json";

// Constants
import { NOTIFICATION_TYPES } from "../../constants/systemConstants";

// Helpers
import sendNotification from "../../helpers/NotificationsHelper";

// Reducers
import {
  CREATE_STOCK_INFO,
  STOCK_INFO,
  UPDATE_STOCK_INFO,
} from "../ActionTypes";

const { ERRORS_CONSTANTS, SUCCESS_CONSTANTS } = constants.default;
const {
  ADD_STOCK_ERROR,
  DELETE_STOCK_ERROR,
  EDIT_STOCK_ERROR,
  GET_STOCK_ERRORS,
} = ERRORS_CONSTANTS.STOCK_PAGE;
const { ADD_STOCK, DELETE_STOCK, EDIT_STOCK } = SUCCESS_CONSTANTS.STOCK_PAGE;

function StockActions() {
  return async (dispatch) => {
    try {
      const url = "/stock";

      dispatch({ loading: true, type: STOCK_INFO });
      const data = await httpClient.get(url);

      dispatch({ stockInfo: data.data, type: STOCK_INFO });
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, GET_STOCK_ERRORS);
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

      sendNotification(NOTIFICATION_TYPES.SUCCESS, ADD_STOCK);
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, ADD_STOCK_ERROR);
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

      sendNotification(NOTIFICATION_TYPES.SUCCESS, EDIT_STOCK);
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, EDIT_STOCK_ERROR);
    }
  };
}

function DeleteStockActions(stockId) {
  return async (dispatch) => {
    try {
      const url = `/stock/deleteStock/${stockId}`;

      const data = await httpClient.delete(url);

      dispatch({ updateStockInfo: data, type: UPDATE_STOCK_INFO });

      sendNotification(NOTIFICATION_TYPES.SUCCESS, DELETE_STOCK);
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, DELETE_STOCK_ERROR);
    }
  };
}

export {
  CreateStockActions,
  DeleteStockActions,
  StockActions,
  UpdateStockActions,
};
