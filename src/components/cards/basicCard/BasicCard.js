import React from "react";
import { Card, Tooltip } from "antd";
import moment from "moment";
import PropTypes from "prop-types";

import { PAGE_INFOS } from "../../../constants/routesConstants";

import { UI_DEFAULT_FORMAT } from "../../../helpers/DateGeneratorHelper";

import { ProductObjectShape } from "../../../types/ProductsPropTypes";

import { StyledBasicCard } from "./BasicCard.styles";

const { Meta } = Card;

function BasicCard({ dueDate, optionsButton, pageName, productsInfo }) {
  const formattedDueDate = moment(dueDate).format(UI_DEFAULT_FORMAT);

  const shouldRenderDueDate = () => {
    if (formattedDueDate !== "Invalid date") {
      return formattedDueDate;
    }

    return productsInfo.description;
  };

  const getTooltipTitle = () => {
    if (pageName === PAGE_INFOS.STOCK.pageName) {
      return "Data do vencimento";
    }

    return productsInfo.description;
  };

  return (
    <StyledBasicCard
      actions={optionsButton()}
      className="basic-card"
      cover={<img alt="productImage" src={productsInfo.defaultImage} />}
    >
      <Meta
        description={
          <div>
            <Tooltip title={getTooltipTitle()} placement="bottomLeft">
              {shouldRenderDueDate()}
            </Tooltip>
          </div>
        }
        title={productsInfo.name}
      />
    </StyledBasicCard>
  );
}

BasicCard.propTypes = {
  optionsButton: PropTypes.func.isRequired,
  dueDate: PropTypes.string,
  productsInfo: ProductObjectShape.isRequired,
  pageName: PropTypes.string,
};

BasicCard.defaultProps = {
  dueDate: "",
  pageName: "",
};

export default BasicCard;
