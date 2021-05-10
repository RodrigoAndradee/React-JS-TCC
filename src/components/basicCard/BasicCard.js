import React from "react";
import PropTypes from "prop-types";
import { EditOutlined } from "@ant-design/icons";
import { Card, Tooltip } from "antd";

import { StyledSwitch } from "../../styles/StyledSwitch.styles";

import {
  EDIT_PRODUCT_LABEL,
  ENABLE_PRODUCT,
} from "../../constants/productsCardConstants";

import "./BasicCard.scss";

const { Meta } = Card;
const defaultPlacement = "bottom";

export default function BasicCard({
  editProduct,
  productsInfo,
  turnProductEnabledOrDisabled,
}) {
  const actionsContent = [
    <Tooltip title={EDIT_PRODUCT_LABEL} placement={defaultPlacement}>
      <EditOutlined key="edit" onClick={() => editProduct(productsInfo)} />
    </Tooltip>,

    <Tooltip
      title={ENABLE_PRODUCT[productsInfo.enabled]}
      placement={defaultPlacement}
    >
      <StyledSwitch
        defaultChecked={productsInfo.enabled}
        onChange={(e) => turnProductEnabledOrDisabled(productsInfo, e)}
        className="change-enabled"
        size="small"
      />
    </Tooltip>,
  ];

  return (
    <Card
      actions={actionsContent}
      cover={
        <img
          alt="productImage"
          src={productsInfo.defaultImage}
          style={{ height: "150px" }}
        />
      }
    >
      <Meta description={productsInfo.description} title={productsInfo.name} />
    </Card>
  );
}

BasicCard.propTypes = {
  editProduct: PropTypes.func,
  productsInfo: PropTypes.shape({
    defaultImage: PropTypes.string,
    description: PropTypes.string,
    enabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  turnProductEnabledOrDisabled: PropTypes.func,
};

BasicCard.defaultProps = {
  editProduct: () => {},
  turnProductEnabledOrDisabled: () => {},
};
