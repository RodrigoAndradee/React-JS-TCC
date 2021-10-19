export const PAGE_INFOS = {
  HOME: {
    label: "Home",
    pageName: "home",
    path: "/home",
  },
  ORDERS: {
    children: {
      delivery: { path: "/orders/delivery" },
      pending: { path: "/orders/pending" },
      preparing: { path: "/orders/preparing" },
      finished: { path: "/orders/finished" },
    },
    label: "Pedidos",
    pageName: "orders",
    path: "/orders",
  },
  PRODUCTS: {
    label: "Produtos",
    pageName: "products",
    path: "/products",
  },
  SALES: {
    label: "Vendas",
    pageName: "sales",
    path: "/sales",
  },
  STOCK: {
    label: "Estoque",
    pageName: "stock",
    path: "/stock",
  },
};

export const ROUTES_CONSTANTS = [
  {
    exact: false,
    label: PAGE_INFOS.HOME.label,
    pageName: PAGE_INFOS.HOME.pageName,
    path: PAGE_INFOS.HOME.path,
    roles: ["admin"],
  },
  {
    exact: false,
    label: PAGE_INFOS.PRODUCTS.label,
    pageName: PAGE_INFOS.PRODUCTS.pageName,
    path: PAGE_INFOS.PRODUCTS.path,
    roles: ["admin", "stock"],
  },
  {
    exact: false,
    label: PAGE_INFOS.STOCK.label,
    pageName: PAGE_INFOS.STOCK.pageName,
    path: PAGE_INFOS.STOCK.path,
    roles: ["admin", "stock"],
  },
  {
    exact: false,
    label: PAGE_INFOS.ORDERS.label,
    pageName: PAGE_INFOS.ORDERS.pageName,
    path: PAGE_INFOS.ORDERS.path,
    roles: ["admin", "separator"],
  },
  {
    exact: false,
    label: PAGE_INFOS.SALES.label,
    pageName: PAGE_INFOS.SALES.pageName,
    path: PAGE_INFOS.SALES.path,
    roles: ["admin"],
  },
];
