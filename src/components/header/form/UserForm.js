import React from "react";

import { Form, Input, Select } from "antd";

const positions = ["admin", "stock", "separator"];

const Option = Select;

function UserForm() {
  return (
    <>
      <Form.Item name="email">
        <Input placeholder="Digite o nome do(a) usuário(a)" />
      </Form.Item>

      <Form.Item name="password">
        <Input placeholder="Digite a senha do usuário(a)" />
      </Form.Item>

      <Form.Item name="role" valuePropName="checked">
        <Select
          placeholder="Selecione uma Posição"
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
          {positions &&
            positions.map((item) => {
              return (
                <Option key={item} value={item}>
                  {item}
                </Option>
              );
            })}
        </Select>
      </Form.Item>
    </>
  );
}

export default UserForm;
