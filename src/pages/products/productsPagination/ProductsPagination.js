import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Pagination, Row } from "antd";

import BasicCard from "../../../components/basicCard/BasicCard";

import "../Products.scss";

const pageItemsCount = 8;

function ProductsPagination({
  editProduct,
  productsInfoData,
  turnProductEnabledOrDisabled,
}) {
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

  return (
    <>
      <Row gutter={[16, 16]} className="products-body">
        {productsInfoData
          .slice(paginationValue.min, paginationValue.max)
          .map((cardInfo) => {
            return (
              <Col span={6} key={cardInfo.id} className="products-card">
                <BasicCard
                  editProduct={editProduct}
                  productsInfo={cardInfo}
                  turnProductEnabledOrDisabled={turnProductEnabledOrDisabled}
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
    </>
  );
}

ProductsPagination.propTypes = {
  productsInfoData: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
      photo: PropTypes.string,
      type: PropTypes.string,
      enabled: PropTypes.bool,
    })
  ).isRequired,
  editProduct: PropTypes.func,
  turnProductEnabledOrDisabled: PropTypes.func,
};

ProductsPagination.defaultProps = {
  editProduct: () => {},
  turnProductEnabledOrDisabled: () => {},
};

export default ProductsPagination;
