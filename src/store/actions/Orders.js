import ordersClient from "../../configs/ordersClient";

import { LOADING_MESSAGES } from "../../constants/loadingConstants";

import sendNotification from "../../helpers/NotificationsHelper";

import { CHANGE_STATUS, FETCH_ORDERS } from "../ActionTypes";
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

function approveOrder(orderId) {
  console.log("orderId: ", orderId);
  return async (dispatches) => {
    const [dispatch, dispatchLoading] = dispatches;

    try {
      dispatchLoading(showLoading(LOADING_MESSAGES.LOADING_ORDERS));

      const url = `orders/changeStatus/${orderId}`;

      const { data } = await ordersClient.put(url);

      dispatch({ type: CHANGE_STATUS, ordersData: data });

      dispatchLoading(hideLoading());
    } catch {
      sendNotification("ERROR", "Erro ao mudar de status", "Error");

      dispatchLoading(hideLoading());
    }
  };
}

export { approveOrder, fetchOrders };
