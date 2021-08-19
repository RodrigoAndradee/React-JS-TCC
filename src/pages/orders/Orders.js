import React from "react";
import { Menu } from "antd";
import { Route, Switch, useHistory } from "react-router-dom";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import GenericPage from "../../components/genericPage/GenericPage";

import { StyledOrders } from "./Orders.styles";
import BasicOrders from "../../components/basicOrders/BasicOrders";

export default function Orders() {
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
    <Menu className="menu" mode="vertical" onClick={handleClickSecondaryMenu}>
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
        <BasicOrders />
      </Route>

      <Route path="/orders/preparing">
        <BasicOrders />
      </Route>

      <Route path="/orders/delivery">
        <BasicOrders />
      </Route>
    </Switch>
  );

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
