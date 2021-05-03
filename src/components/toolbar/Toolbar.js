import React from "react";
import PropTypes from "prop-types";

import { Button, Col, Input, Row, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import "./Toolbar.scss";

const { Search } = Input;
const { Option } = Select;

function Toolbar({ categoriesInfoData, createProduct }) {
  return (
    <Row gutter={[16, 16]} className="toolbar">
      <Col span={8}>
        <Search
          placeholder="Digite o Nome de um Produto"
          // onSearch={onSearch}
          // loading={loadingSearch}
          className="search-bar"
        />
      </Col>

      <Col span={8}>
        <Select
          className="select-category"
          placeholder="Selecione uma categoria"
        >
          {categoriesInfoData &&
            categoriesInfoData.map((item, index) => {
              return (
                <Option key={`category-item ${index + 1}`}>
                  {item.category}
                </Option>
              );
            })}
        </Select>
      </Col>

      <Col span={8}>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          className="add-product-button"
          onClick={createProduct}
        >
          Produtos
        </Button>
      </Col>
    </Row>
  );
}

Toolbar.propTypes = {
  categoriesInfoData: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      enabled: PropTypes.bool,
      id: PropTypes.string,
    })
  ),
  createProduct: PropTypes.func,
};

Toolbar.defaultProps = {
  categoriesInfoData: [{}],
  createProduct: () => {},
};

export default Toolbar;
