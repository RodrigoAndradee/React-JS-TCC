import {
  CREATE_STOCK_INFO,
  STOCK_INFO,
  UPDATE_STOCK_INFO,
} from "./ActionTypes";

export function StockReducer(state = {}, action) {
  const { stockInfo, type } = action;

  switch (type) {
    case STOCK_INFO:
      return stockInfo;
    default:
      return state;
  }
}

export function CreateStockReducer(state = {}, action) {
  const { createStockInfo, type } = action;

  switch (type) {
    case CREATE_STOCK_INFO:
      return createStockInfo;
    default:
      return state;
  }
}

export function UpdateStockReducer(state = {}, action) {
  const { updateStockInfo, type } = action;

  switch (type) {
    case UPDATE_STOCK_INFO:
      return updateStockInfo;
    default:
      return state;
  }
}
