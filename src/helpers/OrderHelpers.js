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
      fetchOrders("pending")([dispatchOrders, dispatchLoading]);
      break;
    case "2":
      routeHistory.push(PAGE_INFOS.ORDERS.children.preparing.path);
      fetchOrders("preparing")([dispatchOrders, dispatchLoading]);
      break;
    case "3":
      routeHistory.push(PAGE_INFOS.ORDERS.children.delivery.path);
      fetchOrders("delivery")([dispatchOrders, dispatchLoading]);
      break;
    case "4":
      routeHistory.push(PAGE_INFOS.ORDERS.children.finished.path);
      fetchOrders("finished")([dispatchOrders, dispatchLoading]);
      break;
    default:
      routeHistory.push(PAGE_INFOS.ORDERS.path);
  }
};
