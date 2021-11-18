import React from "react";
import { Card, Tooltip } from "antd";
import { ExclamationCircleOutlined, WarningOutlined } from "@ant-design/icons";
import moment from "moment";
import classNames from "classnames";
import PropTypes from "prop-types";

import { PAGE_INFOS } from "../../../constants/routesConstants";

import {
  generateCurrentDate,
  UI_DEFAULT_FORMAT,
} from "../../../helpers/DateGeneratorHelper";

import { ProductObjectShape } from "../../../types/ProductsPropTypes";

import { StyledBasicCard } from "./BasicCard.styles";

const { Meta } = Card;

function BasicCard({ dueDate, optionsButton, pageName, productsInfo }) {
  const formattedDueDate = moment(dueDate).format(UI_DEFAULT_FORMAT);
  const newDueDate = generateCurrentDate({
    dateToGen: dueDate,
    stringifiedDate: false,
  });
  const currentDay = generateCurrentDate({
    stringifiedDate: false,
  });
  const stringifiedNextDay = generateCurrentDate({
    generateTomorrowDate: true,
  });
  const stringifiedDueDate = generateCurrentDate({
    dateToGen: dueDate,
  });

  const almostExpired = stringifiedDueDate === stringifiedNextDay;
  const expiredProduct = newDueDate < currentDay;

  const shouldRenderDueDate = () => {
    if (formattedDueDate !== "Invalid date") {
      return formattedDueDate;
    }

    return productsInfo.description;
  };

  const additionalClassNames = classNames({
    "almost-expired-product": almostExpired,
    "card-description": true,
    "expired-product": expiredProduct,
  });

  return (
    <StyledBasicCard
      actions={optionsButton()}
      className="basic-card"
      cover={<img alt="productImage" src={productsInfo.defaultImage} />}
    >
      <Meta
        description={
          <div className={additionalClassNames}>
            {pageName === PAGE_INFOS.STOCK.pageName && (
              <>
                Data do vencimento
                <br />
              </>
            )}
            {shouldRenderDueDate()}
            {expiredProduct && (
              <Tooltip title="Produto Vencido!" className="expired-warning">
                <WarningOutlined />
              </Tooltip>
            )}
            {almostExpired && (
              <Tooltip
                title="Produto vencerá amanhã"
                className="expired-warning"
              >
                <ExclamationCircleOutlined />
              </Tooltip>
            )}
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
