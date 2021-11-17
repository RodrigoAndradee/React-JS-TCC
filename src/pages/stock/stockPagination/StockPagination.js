import React, { useState } from "react";
import { Col, Pagination, Row, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

// Components
import BasicCard from "../../../components/cards/basicCard/BasicCard";

// Constants
import { PAGE_INFOS } from "../../../constants/routesConstants";
import { QUANTITY_LABEL } from "../../../constants/stockConstants";

// Types
import { stockObjectShape } from "../../../types/StockProptypes";

// Styles
import { StyledStockPagination } from "../Stock.styles";

const defaultPlacement = "bottom";
const pageItemsCount = 12;

function StockPagination({ stockData, deleteStock }) {
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

  const handleDelete = (stockInfo) => {
    deleteStock(stockInfo.id);
  };

  const optionsCardButton = (cardInfo) => {
    return [
      <Tooltip title={QUANTITY_LABEL} placement={defaultPlacement}>
        {cardInfo.quantity}
      </Tooltip>,

      <Tooltip title="Deletar Produto do Estoque" placement={defaultPlacement}>
        <DeleteOutlined onClick={() => handleDelete(cardInfo)} />
      </Tooltip>,
    ];
  };

  return (
    <StyledStockPagination>
      <Row gutter={[16, 16]} className="stock-body">
        {stockData
          .slice(paginationValue.min, paginationValue.max)
          .map((cardInfo) => {
            const { product: productInfo } = cardInfo;

            return (
              <Col span={24 / (pageItemsCount / 2)} key={cardInfo.id}>
                <BasicCard
                  dueDate={cardInfo.dueDate}
                  optionsButton={() => optionsCardButton(cardInfo)}
                  pageName={PAGE_INFOS.STOCK.pageName}
                  productsInfo={productInfo}
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
        showQuickJumper
      />
    </StyledStockPagination>
  );
}

StockPagination.propTypes = {
  deleteStock: PropTypes.func,
  stockData: stockObjectShape,
};

StockPagination.defaultProps = {
  deleteStock: () => {},
  stockData: [],
};

export default StockPagination;
