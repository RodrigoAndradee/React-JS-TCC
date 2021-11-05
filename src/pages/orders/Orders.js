import React, { useCallback, useEffect, useReducer, useState } from "react";
import { DatePicker, Input, Menu, Tooltip, Tabs } from "antd";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  CarOutlined,
  ClockCircleOutlined,
  FlagOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

// components
import GenericPage from "../../components/genericPage/GenericPage";
import BasicOrders from "./basicOrders/BasicOrders";

// constants
import { OrdersPage } from "../../constants/ordersConstants";

// helpers
import {
  blockActionsButtons,
  controlOrdersRoutes,
  handleFilter,
} from "../../helpers/OrderHelpers";

// reducer
import { OrdersReducer } from "../../store/reducers/Orders";

// actions

// styles
import { StyledOrders } from "./Orders.styles";
import { StyledTabs } from "../../styles/styledGenericComponents/TabComponent.styles";

const REFRESH_COUNTER = 60;
const { Item, ItemGroup } = Menu;
const { Search } = Input;
const { TabPane } = Tabs;

export default function Orders() {
  // state
  const [counter, setCounter] = useState(REFRESH_COUNTER);
  const [currentSelectedOrder, setCurrentSelectedOrder] = useState({});
  const [dateFilter, setDateFilter] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [searchFilter, setSearchFilter] = useState();
  const [selectedMenuOption, setSelectedMenuOption] = useState("1");

  // reducers
  const dispatchLoading = useDispatch();
  const [ordersItems, dispatchOrders] = useReducer(OrdersReducer);

  const routeHistory = useHistory();

  const handleClickSecondaryMenu = (e) => {
    setSelectedMenuOption(e);
    setCurrentSelectedOrder({});
  };

  const blockActionButtons = blockActionsButtons(currentSelectedOrder);

  const handleSearch = (target) => {
    setSearchFilter(target);
  };

  const handleSelectDate = (targetDate) => {
    setDateFilter(targetDate);
  };

  const getOrders = useCallback(() => {
    controlOrdersRoutes(
      dispatchLoading,
      dispatchOrders,
      routeHistory,
      selectedMenuOption
    );
  }, [dispatchLoading, routeHistory, selectedMenuOption]);

  // effects

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }

    if (counter === 0) {
      getOrders();
      setCounter(REFRESH_COUNTER);
    }
  }, [counter, getOrders]);

  useEffect(() => {
    if (ordersItems) {
      setFilteredData(handleFilter(ordersItems, searchFilter, dateFilter));
    }
  }, [ordersItems, searchFilter, dateFilter]);

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
          <div className="orders-body">
            {/* <Menu
              className="menu"
              defaultSelectedKeys="1"
              mode="vertical"
              onClick={handleClickSecondaryMenu}
            >
              <ItemGroup>
                <Item key="1" icon={<ClockCircleOutlined />}>
                  Pendentes
                </Item>
                <Item key="2" icon={<ShoppingCartOutlined />}>
                  Separação
                </Item>
                <Item key="3" icon={<CarOutlined />}>
                  Entrega
                </Item>
                <Item key="4" icon={<FlagOutlined />}>
                  Finalizado
                </Item>
              </ItemGroup>
            </Menu> */}

            <div className="page-content">
              <StyledTabs
                onChange={handleClickSecondaryMenu}
                defaultActiveKey="1"
                centered
                type="card"
                size="large"
              >
                <TabPane tab="Pendentes" key="1" />

                <TabPane tab="Separação" key="2" />

                <TabPane tab="Entrega" key="3" />

                <TabPane tab="Finalizado" key="4" />
              </StyledTabs>
              <div className="context-bar">
                <Search
                  allowClear
                  className="search"
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Pesquisa"
                />
                <DatePicker
                  className="date-picker"
                  onChange={handleSelectDate}
                  placeholder="Selecione uma data"
                />

                <Tooltip
                  placement="topLeft"
                  title="Tempo para recarregamento automático"
                >
                  <span className="count-down">
                    {counter}
                    <ClockCircleOutlined className="icon" />
                  </span>
                </Tooltip>
              </div>
              <Switch>
                {OrdersPage.map((item) => (
                  <Route path={item.path} key={item.path}>
                    <BasicOrders
                      approveButtonLabel={item.approveButtonLabel}
                      blockApprove={blockActionButtons}
                      blockCancel={blockActionButtons}
                      currentSelectedOrder={currentSelectedOrder}
                      orders={filteredData}
                      ordersTitle={item.ordersTitle}
                      setCurrentSelectedOrder={setCurrentSelectedOrder}
                    />
                  </Route>
                ))}
              </Switch>
            </div>
          </div>
        }
      />
    </StyledOrders>
  );
}
