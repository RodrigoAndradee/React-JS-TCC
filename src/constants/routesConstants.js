export const ROUTES = {
  home: { path: "/home", roles: ["admin", "stock", "separator"], exact: false },
  orders: { path: "/orders", roles: ["admin", "separator"], exact: false },
  others: { path: "/*", exact: false },
  products: { path: "/products", roles: ["admin", "stock"], exact: false },
  sales: { path: "/sales", roles: ["admin"], exact: false },
  sign_in: { path: "/signIn", exact: false },
  stock: { path: "/stock", roles: ["admin", "stock"], exact: false },
};
