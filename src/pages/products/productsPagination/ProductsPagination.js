import React, { useState } from "react";
import { Col, Pagination, Row, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import { ProductObjectShape } from "../../../types/ProductsPropTypes";

import BasicCard from "../../../components/basicCard/BasicCard";
import { EDIT_PRODUCT_LABEL } from "../../../constants/productsConstants";

import { StyledProductsPagination } from "../Products.styles";

const defaultPlacement = "bottom";
const pageItemsCount = 8;
function ProductsPagination({ deleteProduct, editProduct, productsInfoData }) {
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
      <Tooltip title={EDIT_PRODUCT_LABEL} placement={defaultPlacement}>
        <EditOutlined key="edit" onClick={() => editProduct(cardInfo)} />
      </Tooltip>,

      <Tooltip title="Deletar Produto" placement={defaultPlacement}>
        <DeleteOutlined onClick={() => deleteProduct(cardInfo.id)} />
      </Tooltip>,
    ];
  };

  return (
    <StyledProductsPagination>
      <Row gutter={[16, 16]} className="products-body">
        {productsInfoData
          .slice(paginationValue.min, paginationValue.max)
          .map((cardInfo) => {
            return (
              <Col span={6} key={cardInfo.id}>
                <BasicCard
                  productsInfo={cardInfo}
                  optionsButton={() => optionsCardButton(cardInfo)}
                />
              </Col>
            );
          })}
      </Row>

      <Pagination
        className="pagination-products"
        current={paginationValue.currentPage}
        onChange={handleChangePageNumber}
        pageSize={pageItemsCount}
        showSizeChanger={false}
        total={productsInfoData.length}
      />
    </StyledProductsPagination>
  );
}

ProductsPagination.propTypes = {
  productsInfoData: PropTypes.arrayOf(ProductObjectShape).isRequired,
  editProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

ProductsPagination.defaultProps = {
  editProduct: () => {},
  deleteProduct: () => {},
};

export default ProductsPagination;
