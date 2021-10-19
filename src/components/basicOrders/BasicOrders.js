import React, { useEffect } from "react";
import { Card, Col, Row, Table, Tag, Tooltip } from "antd";
import {
  ClockCircleOutlined,
  DislikeOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import isEmpty from "lodash.isempty";

import OrdersCard from "../cards/ordersCard/OrdersCard";

import {
  StyledActionsComponent,
  StyledBasicOrders,
  StyledPromoteButton,
} from "./BasicOrders.styles";
import { OrderObjectShape } from "../../types/OrderPropTypes";

const tableColumns = [
  { dataIndex: "item", title: "Itens" },
  { dataIndex: "quantity", title: "Quantidade" },
  { dataIndex: "price", title: "Preço" },
];

const columnsCount = 3;

function BasicOrders({
  approveButtonLabel,
  blockApprove,
  blockCancel,
  currentSelectedOrder,
  detailsTitle,
  onClickApprove,
  onClickReject,
  orders,
  ordersTitle,
  rejectButtonLabel,
  setCurrentSelectedOrder,
}) {
  const { address, products } = currentSelectedOrder;

  const actions = [
    <Tooltip title={approveButtonLabel} placement="top">
      <StyledPromoteButton className="approve" disabled={blockApprove}>
        <LikeOutlined onClick={onClickApprove} />
      </StyledPromoteButton>
    </Tooltip>,
    <Tooltip title={rejectButtonLabel} placement="top">
      <StyledPromoteButton className="reject" disabled={blockCancel}>
        <DislikeOutlined onClick={onClickReject} />
      </StyledPromoteButton>
    </Tooltip>,
  ];

  useEffect(() => {
    setCurrentSelectedOrder({});
  }, [detailsTitle, orders, ordersTitle, setCurrentSelectedOrder]);

  return (
    <StyledBasicOrders>
      <OrdersCard className="orders-list-card" title={ordersTitle} width="45%">
        <div className="orders-list">
          {orders.map((order) => {
            const isSelected = order?.id === currentSelectedOrder?.id;

            return (
              <div
                aria-hidden="true"
                className={`order-list-item ${isSelected ? "selected" : ""}`}
                onClick={() => setCurrentSelectedOrder(order)}
              >
                <Tag color="blue"># {order.orderNumber}</Tag>

                {order.userId}

                <div className="order-list-item-hour">
                  {order.hour}

                  <ClockCircleOutlined />
                </div>
              </div>
            );
          })}
        </div>
      </OrdersCard>

      <OrdersCard
        className="orders-details-card last-child"
        footer={
          <StyledActionsComponent>
            {actions.map((action, index) => (
              <>
                {action}

                {index + 1 !== actions.length && (
                  <span className="action-separator"> | </span>
                )}
              </>
            ))}
          </StyledActionsComponent>
        }
        title={detailsTitle}
        width="53%"
      >
        {!isEmpty(currentSelectedOrder) && (
          <>
            <Card className="orders-details">
              <Row gutter={[16, 16]} className="orders-detail-address">
                <Col span={8}>
                  <span className="detail-title">
                    # {currentSelectedOrder.orderNumber}
                  </span>
                </Col>

                <Col span={16}>{currentSelectedOrder.userId}</Col>

                <Col span={24 / columnsCount}>
                  <span className="detail-title">CEP</span>
                  {address?.zipCode}
                </Col>

                <Col span={24 / columnsCount}>
                  <span className="detail-title">Endereço</span>
                  {address?.address}
                </Col>

                <Col span={24 / columnsCount}>
                  <span className="detail-title">Complemento</span>
                  {address?.complement}
                </Col>
              </Row>
            </Card>

            <Table
              bordered
              columns={tableColumns}
              dataSource={products}
              pagination={false}
              scroll={{ y: 270 }}
              size="small"
              summary={(pageData) => {
                let totalPrice = 0;
                let totalQuantity = 0;

                pageData.forEach((item) => {
                  totalPrice += item.price * item.quantity;
                  totalQuantity += item.quantity;
                });

                totalPrice = Math.round(totalPrice * 100) / 100;

                return (
                  <Table.Summary fixed>
                    <Table.Summary.Row>
                      <Table.Summary.Cell>Total</Table.Summary.Cell>
                      <Table.Summary.Cell>{totalQuantity}</Table.Summary.Cell>
                      <Table.Summary.Cell>{totalPrice}</Table.Summary.Cell>
                    </Table.Summary.Row>
                  </Table.Summary>
                );
              }}
            />
          </>
        )}
      </OrdersCard>
    </StyledBasicOrders>
  );
}

BasicOrders.propTypes = {
  approveButtonLabel: PropTypes.string,
  blockApprove: PropTypes.bool,
  blockCancel: PropTypes.bool,
  currentSelectedOrder: OrderObjectShape,
  detailsTitle: PropTypes.string,
  onClickApprove: PropTypes.func,
  onClickReject: PropTypes.func,
  orders: PropTypes.arrayOf(OrderObjectShape),
  ordersTitle: PropTypes.string,
  rejectButtonLabel: PropTypes.string,
  setCurrentSelectedOrder: PropTypes.func,
};

BasicOrders.defaultProps = {
  approveButtonLabel: "",
  blockApprove: false,
  blockCancel: false,
  currentSelectedOrder: {},
  detailsTitle: "Detalhes do Pedido",
  onClickApprove: () => {},
  onClickReject: () => {},
  orders: [],
  ordersTitle: "",
  rejectButtonLabel: "Cancelar o pedido",
  setCurrentSelectedOrder: () => {},
};

export default BasicOrders;
