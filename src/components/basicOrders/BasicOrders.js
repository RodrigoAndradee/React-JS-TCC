import React, { useState } from "react";
import { Card } from "antd";

import { StyledBasicOrders } from "./BasicOrders.styles";

const oders = [
  {
    client: "Rodrigo Andrade",
    address: "Rua 123 de Oliveira 4",
    hour: "15:35",
    order: [
      { name: "Carne Moída", quantity: 5 },
      { name: "Picanha", quantity: 1 },
      { name: "Carvão 5kg", quantity: 1 },
    ],
  },

  {
    client: "Rodrigo Andrade",
    address: "Rua 123 de Oliveira 5",
    hour: "15:35",
    order: [
      { name: "Carne Moída", quantity: 5 },
      { name: "Picanha", quantity: 1 },
      { name: "Carvão 5kg", quantity: 1 },
    ],
  },
  {
    client: "Rodrigo Andrade",
    address: "Rua 123 de Oliveira 6",
    hour: "15:35",
    order: [
      { name: "Carne Moída", quantity: 5 },
      { name: "Picanha", quantity: 1 },
      { name: "Carvão 5kg", quantity: 1 },
    ],
  },
  {
    client: "Rodrigo Andrade",
    address: "Rua 123 de Oliveira 4",
    hour: "15:35",
    order: [
      { name: "Carne Moída", quantity: 5 },
      { name: "Picanha", quantity: 1 },
      { name: "Carvão 5kg", quantity: 1 },
    ],
  },
  {
    client: "Rodrigo Andrade",
    address: "Rua 123 de Oliveira 4",
    hour: "15:35",
    order: [
      { name: "Carne Moída", quantity: 5 },
      { name: "Picanha", quantity: 1 },
      { name: "Carvão 5kg", quantity: 1 },
    ],
  },
];

function BasicOrders() {
  const [currentSelectedOrder, setCurrentSelectedOrder] = useState();
  console.log("currentSelectedOrder: ", currentSelectedOrder);

  const handleOpenOrderDescription = (order) => setCurrentSelectedOrder(order);
  return (
    <StyledBasicOrders>
      <Card className="orders-list">
        {oders?.map((order) => {
          return (
            <Card
              className="orders-list-item"
              onClick={() => handleOpenOrderDescription(order)}
            >
              {order.client}
            </Card>
          );
        })}
      </Card>

      <Card className="orders-detail">
        {currentSelectedOrder && <>{currentSelectedOrder.address}</>}
      </Card>
    </StyledBasicOrders>
  );
}

export default BasicOrders;
