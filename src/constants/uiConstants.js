const PAGE_NAME = [
  {
    label: "Home",
    url: "/",
    exact: true,
    roles: ["admin", "stock", "separator"],
  },
  {
    label: "Produtos",
    url: "/products",
    exact: false,
    roles: ["admin", "stock"],
  },
  {
    label: "Estoque",
    url: "/stock",
    exact: false,
    roles: ["admin", "stock"],
  },
  { label: "Vendas", url: "/sales", exact: false, roles: ["admin"] },
  {
    label: "Pedidos",
    url: "/orders",
    exact: false,
    roles: ["admin", "separator"],
  },
];

export { PAGE_NAME };
