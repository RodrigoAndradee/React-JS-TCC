import { PAGE_INFOS } from "./routesConstants";

export const ORDERS_TYPE = Object.freeze({
  delivery: "DELIVERY",
  finished: "FINISHED",
  pending: "PENDING",
  preparing: "PREPARING",
  rejected: "REJECTED",
});

export const OrdersPage = [
  {
    approveButtonLabel: 'Promover para "Em Separação"',
    ordersTitle: "Pedidos Pendentes",
    path: PAGE_INFOS.ORDERS.children.pending.path,
  },
  {
    approveButtonLabel: 'Promover para "Rota de Entrega"',
    ordersTitle: "Pedidos em Preparação",
    path: PAGE_INFOS.ORDERS.children.preparing.path,
  },
  {
    approveButtonLabel: 'Promover para "Finalizado"',
    ordersTitle: "Pedidos em Rota de Entrega",
    path: PAGE_INFOS.ORDERS.children.delivery.path,
  },
  {
    approveButtonLabel: "",
    ordersTitle: "Pedidos finalizados",
    path: PAGE_INFOS.ORDERS.children.finished.path,
  },
];
