import React, { useEffect } from "react";
import { Menu } from "antd";
import { Route, Switch, useHistory } from "react-router-dom";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import GenericPage from "../../components/genericPage/GenericPage";

import { StyledOrders } from "./Orders.styles";
import BasicOrders from "../../components/basicOrders/BasicOrders";

const orders = {
  pending: [
    {
      client: "Gabriel Talles",
      address: "Rua 123",
      zipCode: "13.145-873",
      complement: "Condomínio ABC",
      hour: "19:55",
      number: 101,
      order: [
        { item: "Carne Moída", quantity: 5, price: 55.5 },
        { item: "Picanha", quantity: 1, price: 65.9 },
        { item: "Carvão 5kg", quantity: 1, price: 15.5 },
      ],
    },
    {
      client: "Rodrigo Andrade",
      address: "Rua 123 de Oliveira 12",
      zipCode: "13.145-873",
      complement: "",
      hour: "15:35",
      number: 55,
      status: 1,
      order: [
        { item: "Carne Moída", quantity: 5, price: 55.5 },
        { item: "Picanha", quantity: 1, price: 65.9 },
        { item: "Carvão 5kg", quantity: 1, price: 15.5 },
        { item: "Maminha", quantity: 2, price: 65.9 },
        { item: "Linguiça Defumada", quantity: 2, price: 25.45 },
        { item: "Queijo Qualho", quantity: 2, price: 23.59 },

        { item: "Carne Moída", quantity: 5, price: 55.5 },
        { item: "Picanha", quantity: 1, price: 65.9 },
        // { item: "Carvão 5kg", quantity: 1, price: 15.5 },
        // { item: "Maminha", quantity: 2, price: 65.9 },
        // { item: "Linguiça Defumada", quantity: 2, price: 25.45 },
        // { item: "Queijo Qualho", quantity: 2, price: 23.59 },

        // { item: "Carne Moída", quantity: 5, price: 55.5 },
        // { item: "Picanha", quantity: 1, price: 65.9 },
        // { item: "Carvão 5kg", quantity: 1, price: 15.5 },
        // { item: "Maminha", quantity: 2, price: 65.9 },
        // { item: "Linguiça Defumada", quantity: 2, price: 25.45 },
        // { item: "Queijo Qualho", quantity: 2, price: 23.59 },
      ],
    },
  ],
  preparing: [
    {
      client: "Carolina Cannos",
      address: "Rua 1234",
      zipCode: "13.145-873",
      complement: "Condomínio Teste",
      hour: "20:55",
      number: 48,
      order: [
        { item: "Cerveja Becks", quantity: 5, price: 35.4 },
        { item: "Picanha", quantity: 1, price: 65.9 },
        { item: "Carvão 5kg", quantity: 1, price: 15.5 },
      ],
    },
  ],
  delivery: [
    {
      client: "Josué Algusto",
      address: "Rua 1234",
      zipCode: "13.145-873",
      complement: "Condomínio Teste 2",
      hour: "20:55",
      number: 76,
      order: [
        { item: "Cerveja Becks", quantity: 5, price: 35.4 },
        { item: "Picanha", quantity: 1, price: 65.9 },
        { item: "Carvão 5kg", quantity: 1, price: 15.5 },
      ],
    },
  ],
};

export default function Orders() {
  // const [selectedMenuOption, setSelectedMenuOption] = useState("1");

  const routeHistory = useHistory();

  const handleClickSecondaryMenu = (e) => {
    switch (e.key) {
      case "1":
        routeHistory.push("/orders/pending");
        break;
      case "2":
        routeHistory.push("/orders/preparing");
        break;
      case "3":
        routeHistory.push("/orders/delivery");
        break;
      default:
        routeHistory.push("/orders");
    }
  };

  const secondaryMenu = (
    <Menu
      className="menu"
      defaultSelectedKeys="1"
      mode="vertical"
      onClick={handleClickSecondaryMenu}
    >
      <Menu.ItemGroup>
        <Menu.Item key="1" icon={<AccessTimeIcon />}>
          Pendentes
        </Menu.Item>
        <Menu.Item key="2" icon={<MoreHorizIcon />}>
          Preparação
        </Menu.Item>
        <Menu.Item key="3" icon={<DirectionsRunIcon />}>
          Entrega
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  const pageContent = (
    <Switch>
      <Route path="/orders/pending">
        <BasicOrders
          detailsTitle="Detalhes do Pedido"
          orders={orders.pending}
          ordersTitle="Pedidos Pendentes"
        />
      </Route>

      <Route path="/orders/preparing">
        <BasicOrders
          detailsTitle="Detalhes do Pedido"
          orders={orders.preparing}
          ordersTitle="Pedidos em Preparação"
        />
      </Route>

      <Route path="/orders/delivery">
        <BasicOrders
          detailsTitle="Detalhes do Pedido"
          orders={orders.delivery}
          ordersTitle="Pedidos em Rota de Entrega"
        />
      </Route>
    </Switch>
  );

  // useEffect(() => {
  //   const currentURL = window.location.href;
  //   if (!currentURL.includes("/orders/pending")) {
  //     window.location.replace("orders/pending");
  //   }
  // }, []);

  return (
    <StyledOrders>
      <GenericPage
        // toolbar={secondaryMenu}
        body={
          <div className="orders-body">
            <span className="secondary-menu">{secondaryMenu}</span>
            <span className="page-content">{pageContent} </span>
          </div>
        }
      />
    </StyledOrders>
  );
}
