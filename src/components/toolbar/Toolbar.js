import React from "react";
import PropTypes from "prop-types";
import { Button, Col, DatePicker, Input, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import { TOOLBAR_CONSTANTS } from "../../constants/toolBarConstants";
import { CategoryObjectShape } from "../../types/CategoryPropTypes";

import { StyledToolbar } from "./Toolbar.styles";

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
    <StyledToolbar gutter={16}>
      <Col span={span}>
        <Search
          allowClear
          className="search-bar"
          placeholder={searchProduct}
          defaultValue={null}
          onChange={(e) => onSearchByName(e.target.value)}
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

      <Col span={span} className="add-button">
        <Button
          className="button"
          icon={<PlusCircleOutlined />}
          onClick={onClickAddButton}
          type="primary"
        >
          {buttonLabel}
        </Button>
      </Col>
    </StyledToolbar>
  );
}

Toolbar.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  categoriesInfoData: PropTypes.arrayOf(CategoryObjectShape).isRequired,
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
