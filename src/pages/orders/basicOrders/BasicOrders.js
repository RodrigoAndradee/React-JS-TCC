import React from "react";
import { Card, Col, Empty, Row, Table, Tooltip } from "antd";
import {
  ClockCircleOutlined,
  DislikeOutlined,
  DollarCircleOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import isEmpty from "lodash.isempty";
import moment from "moment";

import TagComponent from "../../../styles/styledGenericComponents/tagComponent/TagComponent";
import OrdersCard from "../../../components/cards/ordersCard/OrdersCard";

import { OrderObjectShape } from "../../../types/OrderPropTypes";

import { StyledTable } from "../../../styles/styledGenericComponents/TableComponent.styles";
import {
  StyledActionsComponent,
  StyledBasicOrders,
  StyledPromoteButton,
} from "./BasicOrders.styles";

// REMOVER ESSE IMPORT
import colors from "../../../styles/colors";
import TableTitle from "../../../components/table/title/TableTitle";

const tableColumns = [
  {
    dataIndex: "name",
    key: "name",
    title: "Itens",
  },
  {
    align: "center",
    dataIndex: "quantity",
    key: "quantity",
    title: "Quantidade",
    width: "100px",
  },
  {
    align: "center",
    dataIndex: "price",
    key: "price",
    title: <TableTitle message="Preço" icon={<DollarCircleOutlined />} />,
    width: "100px",
  },
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

  return (
    <StyledBasicOrders>
      <OrdersCard title={ordersTitle} width="45%">
        <div className="orders-list">
          {orders.length ? (
            orders.map((order) => {
              const isSelected = order?.id === currentSelectedOrder?.id;
              const currentDate = moment(order.createdDate);
              const currentHour = currentDate.format("HH:mm");

              return (
                <>
                  <div
                    aria-hidden="true"
                    className={`order-list-item ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() => setCurrentSelectedOrder(order)}
                  >
                    <TagComponent># {order.orderNumber}</TagComponent>

                    {order.userName}

                    <div className="order-list-item-hour">
                      {currentHour}
                      <ClockCircleOutlined
                        style={{
                          color: `${colors.colorRedOrange}`,
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      />
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <Empty
              description="Nenhum pedido com esse status"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          )}
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
        {!isEmpty(currentSelectedOrder) ? (
          <>
            <Card className="orders-details">
              <Row gutter={[16, 16]} className="orders-detail-address">
                <Col span={24 / columnsCount}>
                  <span>Nome do Cliente</span>
                  {currentSelectedOrder.userName}
                </Col>

                <Col span={24 / columnsCount}>
                  <span>CEP</span>
                  {address?.cep}
                </Col>

                <Col span={24 / columnsCount}>
                  <span>Estado</span>
                  {address?.state}
                </Col>

                <Col span={24 / columnsCount}>
                  <span>Endereço</span>
                  {address?.street}
                </Col>

                <Col span={24 / columnsCount}>
                  <span>Bairro</span>
                  {address?.district}
                </Col>

                <Col span={24 / columnsCount}>
                  <span>Número</span>
                  {address?.number}
                </Col>
              </Row>
            </Card>

            <StyledTable
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
                      <Table.Summary.Cell align="center">
                        {totalQuantity}
                      </Table.Summary.Cell>
                      <Table.Summary.Cell align="center">
                        {totalPrice}
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                  </Table.Summary>
                );
              }}
            />
          </>
        ) : (
          <Empty
            description="Nenhum pedido selecionado"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
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
