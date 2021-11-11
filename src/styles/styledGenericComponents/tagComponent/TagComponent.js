import React from "react";
import PropTypes from "prop-types";

import { StyledTag } from "./TagComponent.styles";

function StyledTagComponent({ color, children }) {
  return <StyledTag>{children}</StyledTag>;
}

StyledTagComponent.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
};

StyledTagComponent.defaultProps = {
  color: "blue",
  children: "",
};

export default StyledTagComponent;
