import React from "react";
import PropTypes from "prop-types";

import { Card } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import "./addProductCard.scss";

export default function AddProducCard(props) {
  const { handleCreateProduct } = props;
  return (
    <Card className="add-product-card" onClick={handleCreateProduct}>
      <PlusCircleOutlined className="add-icon" />
    </Card>
  );
}

AddProducCard.propTypes = {
  handleCreateProduct: PropTypes.func,
};

AddProducCard.defaultProps = {
  handleCreateProduct: "",
};
