import React, { useEffect, useState } from "react";
import { Form, Input, Select, Steps, Switch } from "antd";
import PropTypes from "prop-types";

// Components
import BasicSteps from "../../../components/steps/Steps";

// Constants
import { PRODUCT_FORM_INFOS } from "../../../constants/productsConstants";

// Types
import { ProductObjectShape } from "../../../types/ProductsPropTypes";
import { CategoryObjectShape } from "../../../types/CategoryPropTypes";

const { Option } = Select;
const { Step } = Steps;

function ProductsForm({ categoriesInfoData, currentProduct }) {
  const [selectFieldsType, setSelectFieldsType] = useState();

  const generateFieldType = (fieldName, fieldType, placeHolder) => {
    switch (fieldType) {
      case "input":
        return <Input placeholder={placeHolder} />;
      case "select":
        return (
          <Select placeholder={placeHolder}>
            {selectFieldsType?.[fieldName].map((item) => {
              return (
                <Option
                  key={item.id}
                  value={item.category}
                  disabled={!item.enabled}
                >
                  {item.category}
                </Option>
              );
            })}
          </Select>
        );
      case "checkbox":
        return (
          <Switch
            defaultChecked={currentProduct ? currentProduct.enabled : false}
          />
        );
      default:
        return null;
    }
  };

  const getInitialValue = (fieldType, fieldName) => {
    if (fieldType === "checkbox" && !currentProduct) {
      return false;
    }

    if (currentProduct) {
      return currentProduct[fieldName];
    }

    return null;
  };

  useEffect(() => {
    if (categoriesInfoData) {
      setSelectFieldsType({ category: categoriesInfoData });
    }
  }, [categoriesInfoData]);

  return (
    <BasicSteps
      direction="vertical"
      stepsContent={PRODUCT_FORM_INFOS.map((item) => (
        <Step
          description={
            <Form.Item
              name={item.fieldName}
              rules={[
                { required: item.isRequired, message: item.requiredMessage },
              ]}
              initialValue={getInitialValue(item.fieldType, item.fieldName)}
            >
              {generateFieldType(
                item.fieldName,
                item.fieldType,
                item.placeHolder
              )}
            </Form.Item>
          }
          title={item.stepTitle}
          status="process"
        />
      ))}
    />
  );
}

ProductsForm.propTypes = {
  categoriesInfoData: PropTypes.arrayOf(CategoryObjectShape),
  currentProduct: ProductObjectShape,
};

ProductsForm.defaultProps = {
  categoriesInfoData: [],
  currentProduct: null,
};

export default ProductsForm;
