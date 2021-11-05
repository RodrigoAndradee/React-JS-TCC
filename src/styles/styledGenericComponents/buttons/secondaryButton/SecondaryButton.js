import React from "react";
import PropTypes from "prop-types";

import { StyledSecondaryButton } from "./SecondaryButton.styles";

function SecondaryButton({ children, className, onClick, disabled }) {
  return (
    <StyledSecondaryButton
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledSecondaryButton>
  );
}

SecondaryButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

SecondaryButton.defaultProps = {
  children: "",
  className: null,
  disabled: false,
  onClick: () => {},
};

export default SecondaryButton;
