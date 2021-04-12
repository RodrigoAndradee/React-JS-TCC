import React from "react";
import PropTypes from "prop-types";

import { Card, Switch } from "antd";
import { EditOutlined } from "@ant-design/icons";

import "./productCard.scss";

export default function ProductCard(props) {
  const { productsInfo } = props;

  const disabledClassName = productsInfo.disabled
    ? "is-disabled"
    : "not-disabled";

  return (
    <Card className={`product-card ${disabledClassName}`}>
      <div className="main-card">
        <div className="card-header">
          <h1 className="left">{productsInfo.name}</h1>

          <div className="right">
            <Switch checked={productsInfo.disabled} />
            <EditOutlined className="edit-icon" />
          </div>
        </div>

        <div className="card-body">
          <img src={productsInfo.photo} alt="product-img" />

          <span>
            <b>Descrição:</b> {productsInfo.description}
          </span>
          <span>
            <b>Peso:</b> {productsInfo.weight}
          </span>
        </div>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  productsInfo: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    weight: PropTypes.string,
    photo: PropTypes.string,
    disabled: PropTypes.bool,
  }),
};

ProductCard.defaultProps = {
  productsInfo: {},
};
