import ordersClient from "../../configs/ordersClient";

import { LOADING_MESSAGES } from "../../constants/loadingConstants";

import sendNotification from "../../helpers/NotificationsHelper";

import { FETCH_ORDERS } from "../ActionTypes";
import { hideLoading, showLoading } from "../reducers/Loading";

function fetchOrders(orderStatus) {
  return async (dispatches) => {
    const [dispatch, dispatchLoading] = dispatches;
    try {
      dispatchLoading(showLoading(LOADING_MESSAGES.LOADING_ORDERS));

      const url = `/orders/${orderStatus}`;

      const { data } = await ordersClient.get(url);

      dispatchLoading(hideLoading());
      dispatch({ type: FETCH_ORDERS, ordersData: data });
    } catch {
      sendNotification("ERROR", "Erro ao Obter os Pedidos", "Error");

      dispatchLoading(hideLoading());
    }
  };
}

export { fetchOrders };
