import React from "react";
import PropTypes from "prop-types";

import { Card } from "antd";
import { productObjectShape } from "../../types/Products.Proptypes";

import "./BasicCard.scss";

const { Meta } = Card;

function BasicCard({ optionsButton, productsInfo }) {
  return (
    <Card
      actions={optionsButton()}
      cover={
        <img
          alt="productImage"
          src={productsInfo.defaultImage}
          style={{ height: "150px" }}
        />
      }
    >
      <Meta description={productsInfo.description} title={productsInfo.name} />
    </Card>
  );
}

BasicCard.propTypes = {
  productsInfo: productObjectShape.isRequired,
  optionsButton: PropTypes.func.isRequired,
};

export default BasicCard;
