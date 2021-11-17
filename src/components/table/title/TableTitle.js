import React from "react";
import PropTypes from "prop-types";

import { StyledTableTitle } from "./TableTitle.styles";

function TableTitle({ message, icon }) {
  return (
    <StyledTableTitle>
      <span>{message}</span>
      <span className="title-icon">{icon}</span>
    </StyledTableTitle>
  );
}

TableTitle.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  icon: PropTypes.element,
};

TableTitle.defaultProps = {
  message: "",
  icon: null,
};

export default TableTitle;
