import ordersClient from "../../configs/ordersClient";

import sendNotification from "../../helpers/NotificationsHelper";
import { normalizedSalesData } from "../../helpers/SalesHelpers";

import { FETCH_SALES } from "../ActionTypes";

function fetchSalesData(orderStatus) {
  return async (dispatch) => {
    try {
      const url = `/orders/${orderStatus}`;

      dispatch({ type: FETCH_SALES, isLoading: true });

      const { data } = await ordersClient.get(url);

      dispatch({ type: FETCH_SALES, data: normalizedSalesData(data) });
    } catch {
      sendNotification("ERROR", "Erro ao Obter os dados da página", "Error");
    }
  };
}

export { fetchSalesData };
