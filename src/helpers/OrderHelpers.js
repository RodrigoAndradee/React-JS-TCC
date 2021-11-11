import isEmpty from "lodash.isempty";
import { ORDERS_TYPE } from "../constants/ordersConstants";

import { PAGE_INFOS } from "../constants/routesConstants";
import { fetchOrders } from "../store/actions/Orders";

export const controlOrdersRoutes = (
  dispatchLoading,
  dispatchOrders,
  routeHistory,
  selectedMenuOption
) => {
  switch (selectedMenuOption) {
    case "1":
      routeHistory.push(PAGE_INFOS.ORDERS.children.pending.path);
      fetchOrders(ORDERS_TYPE.pending)([dispatchOrders, dispatchLoading]);
      break;
    case "2":
      routeHistory.push(PAGE_INFOS.ORDERS.children.preparing.path);
      fetchOrders(ORDERS_TYPE.preparing)([dispatchOrders, dispatchLoading]);
      break;
    case "3":
      routeHistory.push(PAGE_INFOS.ORDERS.children.delivery.path);
      fetchOrders(ORDERS_TYPE.delivery)([dispatchOrders, dispatchLoading]);
      break;
    case "4":
      routeHistory.push(PAGE_INFOS.ORDERS.children.finished.path);
      fetchOrders(ORDERS_TYPE.finished)([dispatchOrders, dispatchLoading]);
      break;
    default:
      routeHistory.push(PAGE_INFOS.ORDERS.path);
  }
};

export const blockActionsButtons = (currentSelectedOrder = {}) => {
  if (isEmpty(currentSelectedOrder)) {
    return true;
  }

  if (currentSelectedOrder.status === ORDERS_TYPE.finished) {
    return true;
  }

  return false;
};

export const handleFilter = (dataToFilter, targetFilter, targetDate) => {
  let data = dataToFilter;

  if (targetFilter) {
    data = data.filter(
      (order) =>
        order.userId.toLowerCase().includes(targetFilter.toLowerCase()) ||
        order.address.zipCode.includes(targetFilter) ||
        order.orderNumber === Number(targetFilter)
    );
  }

  if (targetDate) {
    data = data.filter((item) =>
      item.createdDate.includes(targetDate.format("YYYY-MM-DD"))
    );
  }

  return data;
};