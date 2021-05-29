import React from "react";
import PropTypes from "prop-types";

import { Button, Col, DatePicker, Input, Row, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import { TOOLBAR_CONSTANTS } from "../../constants/toolBarConstants";
import { categoryObjectShape } from "../../types/Category.Proptypes";

import "./Toolbar.scss";

const { Search } = Input;
const { Option } = Select;
const { searchProduct, selectCategory, selectDueDate } = TOOLBAR_CONSTANTS;

function Toolbar({
  buttonLabel,
  categoriesInfoData,
  onClickAddButton,
  onSearchByName,
  onSelectCategory,
  onSelectDate,
  pageName,
}) {
  let span;
  if (pageName === "stock") {
    span = 6;
  } else {
    span = 8;
  }
  return (
    <Row gutter={[16, 16]} className="toolbar">
      <Col span={span}>
        <Search
          allowClear
          className="search-bar"
          onSearch={onSearchByName}
          placeholder={searchProduct}
          defaultValue={null}
        />
      </Col>

      <Col span={span}>
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

      {pageName === "stock" && (
        <Col span={span}>
          <DatePicker
            onChange={onSelectDate}
            placeholder={selectDueDate}
            style={{ width: "100%" }}
          />
        </Col>
      )}

      <Col span={span}>
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
  buttonLabel: PropTypes.string.isRequired,
  categoriesInfoData: PropTypes.arrayOf(categoryObjectShape).isRequired,
  onClickAddButton: PropTypes.func.isRequired,
  onSearchByName: PropTypes.func.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  onSelectDate: PropTypes.func,
  pageName: PropTypes.string.isRequired,
};

Toolbar.defaultProps = {
  onSelectDate: null,
};

export default Toolbar;
