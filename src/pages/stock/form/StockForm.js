import React, { useEffect, useState } from "react";
import { DatePicker, Form, InputNumber, Select, Steps } from "antd";
import { arrayOf } from "prop-types";

// Components
import BasicSteps from "../../../components/steps/Steps";

// Constants
import { STOCK_FORM_INFOS } from "../../../constants/stockConstants";

// Helpers
import { UI_DEFAULT_FORMAT } from "../../../helpers/DateGeneratorHelper";

// Types

import { ProductObjectShape } from "../../../types/ProductsPropTypes";

const { Option } = Select;
const { Step } = Steps;

function StockForm({ productsInfo }) {
  const [selectedFieldsTypes, setSelectedFieldsTypes] = useState([]);

  const generateFieldType = (fieldName, fieldType, placeHolder) => {
    switch (fieldType) {
      case "inputNumber":
        return (
          <InputNumber
            min={0.1}
            placeholder={placeHolder}
            style={{ width: "100%" }}
          />
        );
      case "select":
        return (
          <Select
            allowClear
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
            placeholder={placeHolder}
            showSearch
          >
            {selectedFieldsTypes?.[fieldName]?.map((item) => (
              <Option key={item.id} value={item.id} disabled={!item.enabled}>
                {item.name}
              </Option>
            ))}
          </Select>
        );
      case "date":
        return (
          <DatePicker
            format={UI_DEFAULT_FORMAT}
            style={{ width: "100%" }}
            placeholder={placeHolder}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (productsInfo) {
      setSelectedFieldsTypes({ productId: productsInfo });
    }
  }, [productsInfo]);

  return (
    <BasicSteps
      direction="vertical"
      stepsContent={STOCK_FORM_INFOS.map((item) => (
        <Step
          description={
            <Form.Item
              name={item.fieldName}
              rules={[
                { required: item.isRequired, message: item.requiredMessage },
              ]}
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

StockForm.propTypes = {
  productsInfo: arrayOf(ProductObjectShape),
};

StockForm.defaultProps = {
  productsInfo: [],
};

export default StockForm;
