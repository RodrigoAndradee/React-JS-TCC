import React from "react";
import PropTypes from "prop-types";

import { Card } from "antd";
import { productObjectShape } from "../../types/ProductsProptypes";

import "./BasicCard.scss";

const { Meta } = Card;

function BasicCard({ dueDate, optionsButton, productsInfo }) {
  return (
    <Card
      className="basic-card"
      actions={optionsButton()}
      cover={<img alt="productImage" src={productsInfo.defaultImage} />}
      style={{ border: "gray solid 1px" }}
    >
      <Meta
        description={
          <div
            className={`tree-dots-overflow ${dueDate && "stock-description"}`}
          >
            {productsInfo.description}
            {dueDate && <p>{dueDate}</p>}
          </div>
        }
        title={productsInfo.name}
      />
    </Card>
  );
}

BasicCard.propTypes = {
  dueDate: PropTypes.string,
  productsInfo: productObjectShape.isRequired,
  optionsButton: PropTypes.func.isRequired,
};

BasicCard.defaultProps = {
  dueDate: "",
};

export default BasicCard;
