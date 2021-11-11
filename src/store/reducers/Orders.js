import { CHANGE_STATUS, FETCH_ORDERS } from "../ActionTypes";

export function OrdersReducer(state = {}, action) {
  const { type, ordersData } = action;

  switch (type) {
    case FETCH_ORDERS:
      return ordersData;
    case CHANGE_STATUS:
      return ordersData;
    default:
      return state;
  }
}
