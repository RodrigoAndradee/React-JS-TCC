import React, { useState } from "react";

import { Col, InputNumber, Pagination, Row, Tooltip } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

import {
  DECREASE_QUANTITY_LABEL,
  INCREASE_QUANTITY_LABEL,
  QUANTITY_LABEL,
} from "../../../constants/stockConstants";

import BasicCard from "../../../components/basicCard/BasicCard";

import { stockObjectShape } from "../../../types/Stock.Proptypes";

import "../Stock.scss";

const defaultPlacement = "bottom";
const pageItemsCount = 8;

function StockPagination({ stockData }) {
  const [paginationValue, setPaginationValues] = useState({
    min: 0,
    max: pageItemsCount,
    currentPage: 1,
  });

  const handleChangePageNumber = (page) => {
    setPaginationValues({
      min: (page - 1) * pageItemsCount,
      max: page * pageItemsCount,
      currentPage: page,
    });
  };

  const optionsCardButton = (cardInfo) => {
    return [
      <Tooltip title={DECREASE_QUANTITY_LABEL} placement={defaultPlacement}>
        <MinusCircleOutlined />
      </Tooltip>,
      <Tooltip title={QUANTITY_LABEL} placement={defaultPlacement}>
        <InputNumber
          min={0}
          defaultValue={cardInfo.quantity}
          className="input-quantity"
        />
      </Tooltip>,
      <Tooltip title={INCREASE_QUANTITY_LABEL} placement={defaultPlacement}>
        <PlusCircleOutlined />
      </Tooltip>,
    ];
  };

  return (
    <>
      <Row gutter={[16, 16]} className="stock-body">
        {stockData
          .slice(paginationValue.min, paginationValue.max)
          .map((cardInfo) => {
            const { product: productInfo } = cardInfo;

            return (
              <Col span={6} key={cardInfo.id}>
                <BasicCard
                  productsInfo={productInfo}
                  optionsButton={() => optionsCardButton(cardInfo)}
                />
              </Col>
            );
          })}
      </Row>

      <Pagination
        className="pagination-stock"
        current={paginationValue.currentPage}
        onChange={handleChangePageNumber}
        pageSize={pageItemsCount}
        showSizeChanger={false}
        total={stockData.length}
      />
    </>
  );
}

StockPagination.propTypes = {
  stockData: stockObjectShape.isRequired,
};

export default StockPagination;
