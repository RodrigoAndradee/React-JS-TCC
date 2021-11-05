import React from "react";
import PropTypes from "prop-types";

import { StyledPrimaryButton } from "./PrimaryButton.styles";

function PrimaryButton({ children, className, disabled, htlmType, onClick }) {
  return (
    <StyledPrimaryButton
      className={className}
      disabled={disabled}
      htmlType={htlmType && "submit"}
      onClick={onClick}
      type="primary"
    >
      {children}
    </StyledPrimaryButton>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  htlmType: PropTypes.bool,
  onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
  children: "",
  className: null,
  disabled: false,
  htlmType: false,
  onClick: () => {},
};

export default PrimaryButton;
