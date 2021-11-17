import {
  CREATE_STOCK_INFO,
  DELETE_STOCK,
  STOCK_INFO,
  UPDATE_STOCK_INFO,
} from "../ActionTypes";

export function StockReducer(state = {}, action) {
  const {
    createStockInfo,
    deleteStockInfo,
    stockInfo,
    type,
    updateStockInfo,
    loading = false,
  } = action;

  switch (type) {
    case STOCK_INFO:
      return { stockInfo, loading };
    case CREATE_STOCK_INFO:
      return createStockInfo;
    case UPDATE_STOCK_INFO:
      return updateStockInfo;
    case DELETE_STOCK:
      return deleteStockInfo;
    default:
      return state;
  }
}
