import { FETCH_ORDERS } from "../ActionTypes";

export function OrdersReducer(state = {}, action) {
  const { type, ordersData } = action;

  switch (type) {
    case FETCH_ORDERS:
      return ordersData;
    default:
      return state;
  }
}
