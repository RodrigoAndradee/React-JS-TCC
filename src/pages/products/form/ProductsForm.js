import React from "react";
import PropTypes from "prop-types";

import { Form, Input, Select } from "antd";

import { PRODUCT_INFO } from "../../../constants/productsFormConstants";

import "../Products.scss";

const arrayOfTypes = ["Kg (Quilos)", "g (Gramas)"];
const arrayOfCategorys = ["Carnes", "Carvão", "Condimentos"];

const { Option } = Select;

function ProductsForm({ currentProduct }) {
  const isEditProduct = currentProduct && currentProduct !== null;

  return (
    <>
      <b>{PRODUCT_INFO.PRODUCT_NAME}:</b>
      <Form.Item
        name="name"
        initialValue={isEditProduct ? currentProduct.name : ""}
        rules={[{ required: true, message: "Digite o nome do Produto" }]}
      >
        <Input
          key="product_name"
          placeholder="Nome do Produto"
          className="input"
        />
      </Form.Item>

      <b>{PRODUCT_INFO.PRODUCT_DESCRIPTION}:</b>
      <Form.Item
        name="description"
        initialValue={isEditProduct ? currentProduct.description : ""}
        rules={[{ required: true, message: "Digite a descrição do Produto" }]}
      >
        <Input key="description" placeholder="Descrição" />
      </Form.Item>

      <b>{PRODUCT_INFO.PRODUCT_UNITY_TYPE}:</b>
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
      </Form.Item>

      <b>{PRODUCT_INFO.PRODUCT_CATEGORY}:</b>
      <Form.Item name="type" initialValue="Carnes">
        <Select>
          {arrayOfCategorys.map((type, index) => {
            return (
              <Option key={`product-category ${index + 1}`} value={type}>
                {type}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </>
  );
}

export default ProductsForm;

ProductsForm.propTypes = {
  currentProduct: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    photo: PropTypes.string,
    disabled: PropTypes.bool,
  }),
};

ProductsForm.defaultProps = {
  currentProduct: null,
};
