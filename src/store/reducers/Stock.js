import { STOCK_INFO } from "./ActionTypes";

export function StockReducer(state = {}, action) {
  const { stockInfo, type } = action;

  switch (type) {
    case STOCK_INFO:
      return stockInfo;
    default:
      return state;
  }
}
