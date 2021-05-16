import React, { useState } from "react";
import PropTypes from "prop-types";

import { Form, Input, Select, Switch } from "antd";

import {
  FIELD_PLACEHOLDER,
  FIELD_REQUIRED,
  FIELD_TYPE,
  PRODUCT_INFO,
} from "../../../constants/productsFormConstants";

import "../Products.scss";

const { Option } = Select;
const { category, description, enabled, name } = FIELD_TYPE;
const {
  categoryPlaceholder,
  descriptionPlaceholder,
  namePlaceholder,
} = FIELD_PLACEHOLDER;
const { requiredCategory, requiredDescription, requiredName } = FIELD_REQUIRED;
const {
  productCategory,
  productDescription,
  productEnabled,
  productName,
  // productUnity,
} = PRODUCT_INFO;

function ProductsForm({ categoriesInfoData, currentProduct }) {
  const [switchChecked, setSwitchChecked] = useState(
    currentProduct ? currentProduct.enabled : false
  );
  return (
    <>
      <b>{productName}</b>
      <Form.Item
        initialValue={currentProduct ? currentProduct.name : null}
        name={name}
        rules={[{ required: true, message: requiredName }]}
      >
        <Input placeholder={namePlaceholder} />
      </Form.Item>

      <b>{productDescription}</b>
      <Form.Item
        initialValue={currentProduct ? currentProduct.description : null}
        name={description}
        rules={[{ required: true, message: requiredDescription }]}
      >
        <Input placeholder={descriptionPlaceholder} />
      </Form.Item>

      <b>{productCategory}</b>
      <Form.Item
        initialValue={currentProduct ? currentProduct.type : null}
        name={category}
        rules={[{ required: true, message: requiredCategory }]}
      >
        <Select placeholder={categoryPlaceholder}>
          {categoriesInfoData &&
            categoriesInfoData.map((item) => {
              return (
                <Option
                  key={item.id}
                  value={item.category}
                  // enabled={item.enabled}
                  disabled={!item.enabled}
                >
                  {item.category}
                </Option>
              );
            })}
        </Select>
      </Form.Item>

      <b>{productEnabled}</b>
      <Form.Item checked={switchChecked} name={enabled}>
        <Switch
          checked={switchChecked}
          onChange={(e) => {
            setSwitchChecked(e);
          }}
        />
      </Form.Item>
    </>
  );
}

ProductsForm.propTypes = {
  categoriesInfoData: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      enabled: PropTypes.bool,
      id: PropTypes.string,
    })
  ),
  currentProduct: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    type: PropTypes.string,
    enabled: PropTypes.bool,
  }),
};

ProductsForm.defaultProps = {
  categoriesInfoData: [],
  currentProduct: null,
};

export default ProductsForm;
