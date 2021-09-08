import React, { useEffect, useState } from "react";
import { Card, Col, Row, Tag, Tooltip, Table } from "antd";
import {
  ClockCircleOutlined,
  DislikeOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";

import OrdersCard from "../cards/ordersCard/OrdersCard";

import {
  StyledActionsComponent,
  StyledBasicOrders,
  StyledPromoteButton,
} from "./BasicOrders.styles";

const tableColumns = [
  { title: "Itens", dataIndex: "item", width: "240px" },
  { title: "Qtd.", dataIndex: "quantity" },
  { title: "Preço", dataIndex: "price" },
];

const actions = [
  <Tooltip title={'Aceitar e promover para "Em separação"'} placement="top">
    <StyledPromoteButton className="approve">
      <LikeOutlined />
    </StyledPromoteButton>
  </Tooltip>,
  <Tooltip title="Recusar pedido" placement="top">
    <StyledPromoteButton className="reject">
      <DislikeOutlined />
    </StyledPromoteButton>
  </Tooltip>,
];

const columnsCount = 3;

function BasicOrders({
  detailsTitle,
  onClickApprove,
  onClickReprove,
  orders,
  ordersTitle,
}) {
  const [currentSelectedOrder, setCurrentSelectedOrder] = useState();

  useEffect(() => {
    setCurrentSelectedOrder();
  }, [orders, ordersTitle, detailsTitle]);

  return (
    <StyledBasicOrders>
      <OrdersCard className="orders-list-card" title={ordersTitle} width="45%">
        <div className="orders-list">
          {orders.map((order) => {
            const isSelected = order?.number === currentSelectedOrder?.number;

            return (
              <div
                aria-hidden="true"
                className={`order-list-item ${isSelected ? "selected" : ""}`}
                onClick={() => setCurrentSelectedOrder(order)}
              >
                <Tag color="blue"># {order.number}</Tag>

                {order.client}

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
        width="55%"
      >
        {currentSelectedOrder && (
          <>
            <Card className="orders-details">
              <Row gutter={[16, 16]} className="orders-detail-address">
                <Col span={8}>
                  <Tag color="blue"># {currentSelectedOrder.number}</Tag>
                </Col>

                <Col span={16}>{currentSelectedOrder.client}</Col>

                <Col span={24 / columnsCount}>
                  <span className="detail-title">CEP</span>
                  {currentSelectedOrder.zipCode}
                </Col>

                <Col span={24 / columnsCount}>
                  <span className="detail-title">Endereço</span>
                  {currentSelectedOrder.address}
                </Col>

                <Col span={24 / columnsCount}>
                  <span className="detail-title">Complemento</span>
                  {currentSelectedOrder.complement}
                </Col>
              </Row>
            </Card>

            <Table
              bordered
              columns={tableColumns}
              dataSource={currentSelectedOrder?.order}
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
  detailsTitle: PropTypes.string,
  onClickApprove: PropTypes.func,
  onClickReprove: PropTypes.func,
  orders: PropTypes.arrayOf(PropTypes.shape({})),
  ordersTitle: PropTypes.string,
};

BasicOrders.defaultProps = {
  detailsTitle: "Detalhes do Pedido",
  onClickApprove: () => {},
  onClickReprove: () => {},
  orders: [],
  ordersTitle: "",
};

export default BasicOrders;
