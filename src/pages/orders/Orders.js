import React, { useEffect, useReducer, useState } from "react";
import { Menu } from "antd";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  CarOutlined,
  ClockCircleOutlined,
  FlagOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
// import moment from "moment";

import GenericPage from "../../components/genericPage/GenericPage";
import BasicOrders from "../../components/basicOrders/BasicOrders";

import { OrdersReducer } from "../../store/reducers/Orders";

import { controlOrdersRoutes } from "../../helpers/OrderHelpers";

import { PAGE_INFOS } from "../../constants/routesConstants";

import { StyledOrders, StyledOrdersBody } from "./Orders.styles";

// const defaultReloadDelay = 5000;

const OrdersPage = [
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

export default function Orders() {
  // state
  const [selectedMenuOption, setSelectedMenuOption] = useState("1");
  const [currentSelectedOrder, setCurrentSelectedOrder] = useState({});

  // reducers
  const dispatchLoading = useDispatch();
  const [ordersItems, dispatchOrders] = useReducer(OrdersReducer);

  const routeHistory = useHistory();

  const handleClickSecondaryMenu = (e) => {
    setSelectedMenuOption(e.key);
  };

  // const reloadPageData = useCallback(() => {
  //   window.setInterval(() => {
  //     controlOrdersRoutes(
  //       dispatchLoading,
  //       dispatchOrders,
  //       routeHistory,
  //       selectedMenuOption
  //     );
  //   }, defaultReloadDelay);
  // }, [dispatchLoading, routeHistory, selectedMenuOption]);

  // useEffect(() => {
  //   reloadPageData();
  // }, [reloadPageData]);

  useEffect(() => {
    controlOrdersRoutes(
      dispatchLoading,
      dispatchOrders,
      routeHistory,
      selectedMenuOption
    );
  }, [dispatchLoading, dispatchOrders, routeHistory, selectedMenuOption]);

  return (
    <StyledOrders>
      <GenericPage
        body={
          <StyledOrdersBody>
            <div className="secondary-menu">
              <Menu
                className="menu"
                defaultSelectedKeys="1"
                mode="vertical"
                onClick={handleClickSecondaryMenu}
              >
                <Menu.ItemGroup>
                  <Menu.Item key="1" icon={<ClockCircleOutlined />}>
                    Pendentes
                  </Menu.Item>
                  <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                    Separação
                  </Menu.Item>
                  <Menu.Item key="3" icon={<CarOutlined />}>
                    Entrega
                  </Menu.Item>
                  <Menu.Item key="4" icon={<FlagOutlined />}>
                    Finalizado
                  </Menu.Item>
                </Menu.ItemGroup>
              </Menu>
            </div>

            <div className="page-content">
              {/* <div className="context-bar">
                <TimePicker
                  defaultValue={moment("12:08:23", "HH:mm:ss")}
                  size="large"
                />
              </div> */}

              <Switch>
                {OrdersPage.map((item) => (
                  <Route path={item.path} key={item.path}>
                    <BasicOrders
                      approveButtonLabel={item.approveButtonLabel}
                      // blockApprove={!ordersItems.length}
                      // blockCancel={!ordersItems.length}
                      currentSelectedOrder={currentSelectedOrder}
                      orders={ordersItems}
                      ordersTitle={item.ordersTitle}
                      setCurrentSelectedOrder={setCurrentSelectedOrder}
                    />
                  </Route>
                ))}
              </Switch>
            </div>
          </StyledOrdersBody>
        }
      />
    </StyledOrders>
  );
}
