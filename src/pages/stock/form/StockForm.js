import React from "react";
import { arrayOf } from "prop-types";

import { DatePicker, Form, InputNumber, Select } from "antd";

import { productObjectShape } from "../../../types/Products.Proptypes";

const { Option } = Select;

function StockForm({ productsInfo }) {
  const onChange = (date, dateString) => {
    console.log("date: ", date);
    console.log(dateString);
  };
  return (
    <>
      <b>Selecione um Produto</b>
      <Form.Item
        name="productId"
        rules={[{ required: true, message: "Selecione um produto" }]}
      >
        <Select
          placeholder="Selecione um Produto"
          showSearch
          filterOption={(input, option) => {
            console.log("option: ", option);

            if (
              option.children.toLowerCase().includes(input.toLocaleLowerCase())
            ) {
              return option.value;
            }
            return null;
          }}
          allowClear
        >
          {productsInfo &&
            productsInfo.map((item) => {
              return (
                <Option key={item.id} value={item.id}>
                  {item.name}
                  {/* <p>{item.description}</p> */}
                </Option>
              );
            })}
        </Select>
      </Form.Item>

      <b>Quantidade do Produto</b>
      <Form.Item
        name="quantity"
        rules={[
          { required: true, message: "É necessário digitar uma quantidade" },
        ]}
      >
        <InputNumber
          placeholder="Digite a quantidade do produto"
          style={{ width: "100%" }}
          min={1}
        />
      </Form.Item>

      <b>Preço do Produto</b>
      <Form.Item
        name="price"
        rules={[
          {
            required: true,
            message: "É necessário digitar o valor do produto",
          },
        ]}
      >
        <InputNumber
          placeholder="Digite o preço do produto"
          style={{ width: "100%" }}
          min={0.1}
        />
      </Form.Item>

      <b>Data de Vencimento</b>
      <Form.Item
        name="dueDate"
        rules={[
          {
            required: true,
            message: "É necessário digitar o valor do produto",
          },
        ]}
        // initialValue="2021-05-14"
      >
        <DatePicker onChange={onChange} />
      </Form.Item>
    </>
  );
}

StockForm.propTypes = {
  productsInfo: arrayOf(productObjectShape),
};

StockForm.defaultProps = {
  productsInfo: [],
};

export default StockForm;
