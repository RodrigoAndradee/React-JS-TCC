import React from "react";
import PropTypes from "prop-types";

import { Card, Switch } from "antd";
import { EditOutlined } from "@ant-design/icons";

import "./ProductCard.scss";

export default function ProductCard({ editProduct, productsInfo }) {
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
            <EditOutlined
              className="edit-icon"
              onClick={() => editProduct(productsInfo)}
            />
          </div>
        </div>

        <div className="card-body">
          <img src={productsInfo.defaultImage} alt="product-img" />

          <span>
            <b>Descrição:</b> {productsInfo.description}
          </span>

          <span>
            <b>Categoria:</b> {productsInfo.type}
          </span>
        </div>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  productsInfo: PropTypes.shape({
    product_category: PropTypes.string,
    description: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    defaultImage: PropTypes.string,
    type: PropTypes.string,
    product_weigth: PropTypes.string,
  }),
  editProduct: PropTypes.func,
};

ProductCard.defaultProps = {
  productsInfo: {},
  editProduct: {},
};
