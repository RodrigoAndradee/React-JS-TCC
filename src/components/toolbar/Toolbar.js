import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";

import { Button, Col, Input, Row, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import { CategoryActions } from "../../store/actions/Categorys";
import { CategorysReducer } from "../../store/reducers/Categorys";

import "./Toolbar.scss";

const { Search } = Input;
const { Option } = Select;

function Toolbar({ createProduct }) {
  const [categorysInfoData, dispatchCategorysInfoData] = useReducer(
    CategorysReducer
  );

  useEffect(() => {
    CategoryActions()(dispatchCategorysInfoData);
  }, []);

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
          {categorysInfoData &&
            categorysInfoData.map((item, index) => {
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
  createProduct: PropTypes.func,
};

Toolbar.defaultProps = {
  createProduct: {},
};

export default Toolbar;
