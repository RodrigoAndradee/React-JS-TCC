import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";

import { Checkbox, Form, Input, Tabs, Select } from "antd";

import { CategoryActions } from "../../../store/actions/Categories";
import { CategoriesReducer } from "../../../store/reducers/Categories";

import { StyledTabs } from "./CategoryForm.styles";

const { TabPane } = Tabs;
const { Option } = Select;

function CategoryForm({ setSelectedTab }) {
  const [categoriesInfoData, dispatchCategoriesInfoData] = useReducer(
    CategoriesReducer
  );

  const changeTab = (key) => {
    setSelectedTab(key);
  };

  useEffect(() => {
    CategoryActions()(dispatchCategoriesInfoData);
  }, []);

  return (
    <StyledTabs defaultActiveKey="createCategory" onChange={changeTab} centered>
      <TabPane tab="Criar Categoria" key="createCategory">
        <Form.Item name="category">
          <Input placeholder="Digite o nome da categoria" />
        </Form.Item>

        <Form.Item name="imgUrl">
          <Input placeholder="URL da imagem" />
        </Form.Item>

        <Form.Item name="enabled" valuePropName="checked">
          <Checkbox size="small">
            <span>Categoria Diponível</span>
          </Checkbox>
        </Form.Item>
      </TabPane>

      <TabPane tab="Editar Categorias" key="editCategory">
        <Form.Item name="categoryId">
          <Select
            placeholder="Selecione um Produto"
            showSearch
            filterOption={(input, option) => {
              if (
                option.children
                  .toLowerCase()
                  .includes(input.toLocaleLowerCase())
              ) {
                return option.value;
              }
              return null;
            }}
            allowClear
          >
            {categoriesInfoData &&
              categoriesInfoData.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.category}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>

        <Form.Item name="category">
          <Input placeholder="Digite o nome da categoria" />
        </Form.Item>

        <Form.Item name="imgUrl">
          <Input placeholder="URL da imagem" />
        </Form.Item>

        <Form.Item name="enabled" valuePropName="checked">
          <Checkbox size="small">
            <span>Categoria Diponível</span>
          </Checkbox>
        </Form.Item>
      </TabPane>
    </StyledTabs>
  );
}

CategoryForm.propTypes = {
  setSelectedTab: PropTypes.func,
};

CategoryForm.defaultProps = {
  setSelectedTab: () => {},
};

export default CategoryForm;
