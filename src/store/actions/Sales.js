import ordersClient from "../../configs/ordersClient";

// Assets
import * as constants from "../../assets/constants-file.json";

// Constants
import { NOTIFICATION_TYPES } from "../../constants/systemConstants";

// Helpers
import sendNotification from "../../helpers/NotificationsHelper";
import { normalizedSalesData } from "../../helpers/SalesHelpers";

// Reducers
import { FETCH_SALES } from "../ActionTypes";

const { ERRORS_CONSTANTS } = constants.default;
const { GET_ORDER_ERROR } = ERRORS_CONSTANTS.SALES_PAGE;

function fetchSalesData(orderStatus) {
  return async (dispatch) => {
    try {
      const url = `/orders/${orderStatus}`;

      dispatch({ type: FETCH_SALES, isLoading: true });

      const { data } = await ordersClient.get(url);

      dispatch({ type: FETCH_SALES, data: normalizedSalesData(data) });
    } catch {
      sendNotification(NOTIFICATION_TYPES.ERROR, GET_ORDER_ERROR);
    }
  };
}

export { fetchSalesData };
