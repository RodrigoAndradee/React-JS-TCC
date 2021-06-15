import React, { useState } from "react";
import { arrayOf } from "prop-types";

import { DatePicker, Form, InputNumber, Select } from "antd";

import { productObjectShape } from "../../../types/ProductsProptypes";

const { Option } = Select;
const FormItem = Form.Item;

function StockForm({ productsInfo }) {
  const [dateString, setDateString] = useState();

  const onChange = (date, dateStrings) => {
    setDateString(dateStrings);
  };

  return (
    <>
      <b>Selecione um Produto</b>
      <FormItem
        name="productId"
        rules={[{ required: true, message: "Selecione um produto" }]}
      >
        <Select
          placeholder="Selecione um Produto"
          showSearch
          filterOption={(input, option) => {
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
      </FormItem>

      <b>Quantidade do Produto</b>
      <FormItem
        name="quantity"
        rules={[{ required: true, message: "Digite uma quantidade" }]}
      >
        <InputNumber
          placeholder="Digite a quantidade do produto"
          style={{ width: "100%" }}
          min={1}
        />
      </FormItem>

      <b>Preço do Produto</b>
      <FormItem
        name="price"
        rules={[
          {
            required: true,
            message: "Digite o valor do produto",
          },
        ]}
      >
        <InputNumber
          placeholder="Digite o preço do produto"
          style={{ width: "100%" }}
          min={0.1}
        />
      </FormItem>

      <b>Data de Vencimento</b>
      <FormItem
        name="dueDate"
        rules={[
          {
            required: true,
            message: "Selecione a data de vencimento",
          },
        ]}
        initialValue={dateString}
        value={dateString}
        style={{ width: "500px" }}
      >
        <DatePicker format="DD/MM/YYYY" onChange={onChange} />
      </FormItem>
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
