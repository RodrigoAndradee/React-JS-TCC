import React, { useState } from "react";
import PropTypes from "prop-types";

import { Col, Pagination, Row, Tooltip, Switch } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import {
  EDIT_PRODUCT_LABEL,
  ENABLE_PRODUCT,
} from "../../../constants/productsCardConstants";

import { productObjectShape } from "../../../types/ProductsProptypes";

import BasicCard from "../../../components/basicCard/BasicCard";

import "../Products.scss";

const defaultPlacement = "bottom";
const pageItemsCount = 8;

function ProductsPagination({
  deleteProduct,
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

  const optionsCardButton = (cardInfo) => {
    return [
      <Tooltip title={EDIT_PRODUCT_LABEL} placement={defaultPlacement}>
        <EditOutlined key="edit" onClick={() => editProduct(cardInfo)} />
      </Tooltip>,

      // <Tooltip
      //   title={ENABLE_PRODUCT[cardInfo.enabled]}
      //   placement={defaultPlacement}
      // >
      //   <Switch
      //     defaultChecked={cardInfo.enabled}
      //     onChange={(e) => turnProductEnabledOrDisabled(cardInfo, e)}
      //     className="change-enabled"
      //     size="small"
      //   />
      // </Tooltip>,

      <Tooltip title="Deletar Produto" placement={defaultPlacement}>
        <DeleteOutlined onClick={() => deleteProduct(cardInfo.id)} />
      </Tooltip>,
    ];
  };

  return (
    <>
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
    </>
  );
}

ProductsPagination.propTypes = {
  productsInfoData: PropTypes.arrayOf(productObjectShape).isRequired,
  editProduct: PropTypes.func,
  turnProductEnabledOrDisabled: PropTypes.func,
  deleteProduct: PropTypes.func,
};

ProductsPagination.defaultProps = {
  editProduct: () => null,
  turnProductEnabledOrDisabled: () => null,
  deleteProduct: () => null,
};

export default ProductsPagination;
