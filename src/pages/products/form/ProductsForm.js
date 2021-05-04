import React from "react";
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
  return (
    <>
      <b>{productName}:</b>
      <Form.Item
        initialValue={currentProduct ? currentProduct.name : null}
        name={name}
        rules={[{ required: true, message: requiredName }]}
      >
        <Input placeholder={namePlaceholder} />
      </Form.Item>

      <b>{productDescription}:</b>
      <Form.Item
        initialValue={currentProduct ? currentProduct.description : null}
        name={description}
        rules={[{ required: true, message: requiredDescription }]}
      >
        <Input placeholder={descriptionPlaceholder} />
      </Form.Item>

      {/* <b>{PRODUCT_INFO.PRODUCT_UNITY_TYPE}:</b>
      <Form.Item name="product_type_unity" initialValue="Kg (Quilos)">
        <Select>
          {arrayOfTypes.map((type, index) => {
            return (
              <Option key={`product_type ${index + 1}`} value={type}>
                {type}
              </Option>
            );
          })}
        </Select>
      </Form.Item> */}

      <b>{productCategory}:</b>
      <Form.Item
        initialValue={currentProduct ? currentProduct.type : null}
        name={category}
        rules={[{ required: true, message: requiredCategory }]}
      >
        <Select placeholder={categoryPlaceholder}>
          {categoriesInfoData &&
            categoriesInfoData.map((type, index) => {
              return (
                <Option
                  key={`product-category ${index + 1}`}
                  value={type.category}
                  enabled={type.enabled}
                >
                  {type.category}
                </Option>
              );
            })}
        </Select>
      </Form.Item>

      <b>{productEnabled}:</b>
      <Form.Item
        defaultChecked={currentProduct ? currentProduct.enabled : false}
        name={enabled}
      >
        <Switch
          defaultChecked={currentProduct ? currentProduct.enabled : false}
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
