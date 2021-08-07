export const ROUTES = {
  home: {
    exact: false,
    pageName: "home",
    path: "/home",
    roles: ["admin"],
  },
  orders: {
    exact: false,
    pageName: "orders",
    path: "/orders",
    roles: ["admin", "separator"],
  },
  others: { path: "/*", exact: false },
  products: {
    exact: false,
    pageName: "products",
    path: "/products",
    roles: ["admin", "stock"],
  },
  sales: { exact: false, pageName: "sales", path: "/sales", roles: ["admin"] },
  sign_in: { exact: false, pageName: "signIn", path: "/signIn" },
  stock: {
    exact: false,
    pageName: "stock",
    path: "/stock",
    roles: ["admin", "stock"],
  },
};
