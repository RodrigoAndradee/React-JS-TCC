import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Tooltip, Tabs, DatePicker, Input, Form } from "antd";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  CarOutlined,
  ClockCircleOutlined,
  FlagOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

// components
import BasicModalForm from "../../components/modal/BasicModalForm";
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
import { approveOrder, rejectOrder } from "../../store/actions/Orders";

// styles
import { StyledTabs } from "../../styles/styledGenericComponents/TabComponent.styles";
import { StyledOrders } from "./Orders.styles";

const REFRESH_COUNTER = 60;
const { TabPane } = Tabs;
const { Search } = Input;

export default function Orders() {
  // state
  const [counter, setCounter] = useState(REFRESH_COUNTER);
  const [currentSelectedOrder, setCurrentSelectedOrder] = useState({});
  const [dateFilter, setDateFilter] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [searchFilter, setSearchFilter] = useState();
  const [selectedMenuOption, setSelectedMenuOption] = useState("1");
  const [rejectOrderModal, setRejectOrderModal] = useState(false);
  const [justification, setJustification] = useState({ size: 0 });

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

  const handleClickAction = (actionType) => {
    if (actionType === "approve") {
      approveOrder(currentSelectedOrder.id)([
        dispatchOrders,
        dispatchLoading,
      ]).then(() => {
        getOrders();
      });
    }

    if (actionType === "reject") {
      setRejectOrderModal(true);
    }
  };

  // effects

  useEffect(() => {
    if (justification.size === 60) {
      setJustification({
        error: true,
        errorMessage: "Limitado a 60 caracteres",
      });
    }
  }, [justification]);

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
    getOrders();
  }, [getOrders]);

  return (
    <StyledOrders>
      <BasicModalForm
        handleCancel={() => setRejectOrderModal(false)}
        handleOk={(formValues) => {
          rejectOrder(
            currentSelectedOrder.id,
            formValues
          )([dispatchOrders, dispatchLoading]).then(() => {
            getOrders();
          });

          setRejectOrderModal(false);
        }}
        isOpen={rejectOrderModal}
        okText="Rejeitar"
        title="Tem certeza que deseja rejeitar o pedido?"
      >
        <Form.Item
          name="rejectJustification"
          rules={[
            {
              required: true,
              message: "Por favor de uma justificativa ao cliente",
            },
          ]}
          validateStatus={justification.error}
          help={justification.errorMessage}
        >
          <Input
            placeholder="Justificativa"
            maxLength="60"
            onChange={(e) => setJustification({ size: e.target.value.length })}
          />
        </Form.Item>
      </BasicModalForm>

      <GenericPage
        toolbar={
          <StyledTabs
            onChange={handleClickSecondaryMenu}
            defaultActiveKey="1"
            centered
            type="card"
            size="large"
          >
            <TabPane
              tab={
                <>
                  <ClockCircleOutlined />
                  Pendentes
                </>
              }
              key="1"
            />

            <TabPane
              tab={
                <>
                  <ShoppingCartOutlined />
                  Separação
                </>
              }
              key="2"
            />

            <TabPane
              tab={
                <>
                  <CarOutlined />
                  Entrega
                </>
              }
              key="3"
            />

            <TabPane
              tab={
                <>
                  <FlagOutlined />
                  Finalizado
                </>
              }
              key="4"
            />
          </StyledTabs>
        }
        body={
          <div className="orders-body">
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

              <Tooltip placement="bottom" title="Tempo para recarregamento">
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
                    onClickApprove={() => handleClickAction("approve")}
                    onClickReject={() => handleClickAction("reject")}
                    orders={filteredData}
                    ordersTitle={item.ordersTitle}
                    setCurrentSelectedOrder={setCurrentSelectedOrder}
                  />
                </Route>
              ))}
            </Switch>
          </div>
        }
      />
    </StyledOrders>
  );
}
