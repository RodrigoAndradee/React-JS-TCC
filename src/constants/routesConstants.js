export const PAGE_INFOS = {
  home: {
    label: "Home",
    pageName: "home",
  },
  orders: {
    label: "Pedidos",
    pageName: "orders",
  },
  products: {
    label: "Produtos",
    pageName: "products",
  },
  sales: {
    label: "Vendas",
    pageName: "sales",
  },
  stock: {
    label: "Estoque",
    pageName: "stock",
  },
};

export const ROUTES_CONSTANTS = [
  {
    exact: false,
    label: PAGE_INFOS.home.label,
    pageName: PAGE_INFOS.home.pageName,
    path: "/home",
    roles: ["admin"],
  },
  {
    exact: false,
    label: PAGE_INFOS.products.label,
    pageName: PAGE_INFOS.products.pageName,
    path: "/products",
    roles: ["admin", "stock"],
  },
  {
    exact: false,
    label: PAGE_INFOS.stock.label,
    pageName: PAGE_INFOS.stock.pageName,
    path: "/stock",
    roles: ["admin", "stock"],
  },
  {
    exact: false,
    label: PAGE_INFOS.orders.label,
    pageName: PAGE_INFOS.orders.pageName,
    path: "/orders",
    roles: ["admin", "separator"],
  },
  {
    exact: false,
    label: PAGE_INFOS.sales.label,
    pageName: PAGE_INFOS.sales.pageName,
    path: "/sales",
    roles: ["admin"],
  },
];
