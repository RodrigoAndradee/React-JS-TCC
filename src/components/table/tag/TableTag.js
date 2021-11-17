import React from "react";
import { Tag } from "antd";
import PropTypes from "prop-types";

import { ORDERS_TYPE } from "../../../constants/ordersConstants";

function TableTag({ message, tagType, icon }) {
  let color;

  switch (tagType) {
    case "money":
      color = "green";
      break;
    case "card":
      color = "blue";
      break;
    case ORDERS_TYPE.finished:
      color = "green";
      break;
    case ORDERS_TYPE.rejected:
      color = "red";
      break;
    default:
      color = null;
  }

  return (
    <Tag color={color}>
      {message} {icon}
    </Tag>
  );
}

TableTag.propTypes = {
  icon: PropTypes.element,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  tagType: PropTypes.string,
};

TableTag.defaultProps = {
  icon: null,
  message: "",
  tagType: "",
};

export default TableTag;
