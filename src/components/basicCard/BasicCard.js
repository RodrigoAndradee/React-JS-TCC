import React from "react";
import PropTypes from "prop-types";

import { Card } from "antd";
import { ProductObjectShape } from "../../types/ProductsPropTypes";

import { StyledBasicCard } from "./BasicCard.styles";

const { Meta } = Card;

function BasicCard({ dueDate, optionsButton, productsInfo }) {
  return (
    <StyledBasicCard
      actions={optionsButton()}
      className="basic-card"
      cover={<img alt="productImage" src={productsInfo.defaultImage} />}
    >
      <Meta
        description={
          <div>
            {productsInfo.description}
            {dueDate && <p>{dueDate}</p>}
          </div>
        }
        title={productsInfo.name}
      />
    </StyledBasicCard>
  );
}

BasicCard.propTypes = {
  dueDate: PropTypes.string,
  productsInfo: ProductObjectShape.isRequired,
  optionsButton: PropTypes.func.isRequired,
};

BasicCard.defaultProps = {
  dueDate: "",
};

export default BasicCard;
