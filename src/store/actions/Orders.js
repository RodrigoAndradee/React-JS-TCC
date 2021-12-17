import ordersClient from "../../configs/ordersClient";

// Assets
import * as constants from "../../assets/constants-file.json";

// Constants
import { NOTIFICATION_TYPES } from "../../constants/systemConstants";
import { LOADING_MESSAGES } from "../../constants/loadingConstants";

// Helpers
import sendNotification from "../../helpers/NotificationsHelper";

// Reducers
import { hideLoading, showLoading } from "../reducers/Loading";
import { CHANGE_STATUS, FETCH_ORDERS, REJECT_ORDER } from "../ActionTypes";

const { ERRORS_CONSTANTS, SUCCESS_CONSTANTS } = constants.default;
const {
  GET_ORDERS_ERROR,
  CHANGE_STATUS_ERROR,
  REJECT_ORDER_ERROR,
} = ERRORS_CONSTANTS.ORDERS_PAGE;
const {
  CHANGE_STATUS: CHANGE_STATUS_MESSAGE,
  REJECT_ORDER: REJECT_ORDER_MESSAGE,
} = SUCCESS_CONSTANTS.ORDERS_PAGE;

function fetchOrders(orderStatus) {
  return async (dispatches) => {
    const [dispatch, dispatchLoading] = dispatches;
    try {
      dispatchLoading(showLoading(LOADING_MESSAGES.LOADING_ORDERS));

      const url = `/orders/${orderStatus}`;

      const { data } = await ordersClient.get(url);

      dispatch({ type: FETCH_ORDERS, ordersData: data });
      dispatchLoading(hideLoading());
    } catch {
      sendNotification(NOTIFICATION_TYPES.ERROR, GET_ORDERS_ERROR);
      dispatchLoading(hideLoading());
    }
  };
}

function approveOrder(orderId) {
  return async (dispatches) => {
    const [dispatch, dispatchLoading] = dispatches;

    try {
      dispatchLoading(showLoading(LOADING_MESSAGES.LOADING_ORDERS));

      const url = `orders/changeStatus/${orderId}`;

      const { data } = await ordersClient.put(url);

      dispatch({ type: CHANGE_STATUS, ordersData: data });

      sendNotification(NOTIFICATION_TYPES.SUCCESS, CHANGE_STATUS_MESSAGE);
      dispatchLoading(hideLoading());
    } catch {
      sendNotification(NOTIFICATION_TYPES.ERROR, CHANGE_STATUS_ERROR);
      dispatchLoading(hideLoading());
    }
  };
}

function rejectOrder(orderId, justification) {
  return async (dispatches) => {
    const [dispatch, dispatchLoading] = dispatches;

    try {
      dispatchLoading(showLoading(LOADING_MESSAGES.LOADING_ORDERS));

      const url = `orders/rejectOrder/${orderId}`;
      const { data } = await ordersClient.put(url, justification);

      dispatch({ type: REJECT_ORDER, ordersData: data });

      sendNotification(NOTIFICATION_TYPES.SUCCESS, REJECT_ORDER_MESSAGE);
      dispatchLoading(hideLoading());
    } catch {
      sendNotification(NOTIFICATION_TYPES.ERROR, REJECT_ORDER_ERROR);
      dispatchLoading(hideLoading());
    }
  };
}

export { approveOrder, fetchOrders, rejectOrder };
