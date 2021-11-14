import React from "react";
import PropTypes from "prop-types";

import { StyledTag } from "./TagComponent.styles";

function StyledTagComponent({ children }) {
  return <StyledTag>{children}</StyledTag>;
}

StyledTagComponent.propTypes = {
  children: PropTypes.string,
};

StyledTagComponent.defaultProps = {
  children: "",
};

export default StyledTagComponent;
