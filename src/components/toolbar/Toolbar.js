import React from "react";
import PropTypes from "prop-types";

import { Button, Col, Input, Row, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import { TOOLBAR_CONSTANTS } from "../../constants/toolBarConstants";
import { categoryObjectShape } from "../../types/Category.Proptypes";

import "./Toolbar.scss";

const { Search } = Input;
const { Option } = Select;
const { searchProduct, selectCategory } = TOOLBAR_CONSTANTS;

function Toolbar({
  categoriesInfoData,
  onSearchByName,
  onSelectCategory,
  buttonLabel,
  onClickAddButton,
}) {
  return (
    <Row gutter={[16, 16]} className="toolbar">
      <Col span={8}>
        <Search
          allowClear
          className="search-bar"
          onSearch={onSearchByName}
          placeholder={searchProduct}
          defaultValue={null}
        />
      </Col>

      <Col span={8}>
        <Select
          allowClear
          className="select-category"
          onClear={onSelectCategory}
          onSelect={onSelectCategory}
          placeholder={selectCategory}
        >
          {categoriesInfoData &&
            categoriesInfoData.map((item) => {
              return (
                <Option key={item.category} disabled={!item.enabled}>
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
          onClick={onClickAddButton}
        >
          {buttonLabel}
        </Button>
      </Col>
    </Row>
  );
}

Toolbar.propTypes = {
  categoriesInfoData: PropTypes.arrayOf(categoryObjectShape).isRequired,
  onSearchByName: PropTypes.func.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onClickAddButton: PropTypes.func.isRequired,
};

export default Toolbar;
