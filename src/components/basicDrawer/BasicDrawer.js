import React from "react";
import PropTypes from "prop-types";
import { Form } from "antd";

import { StyledBasicDrawer } from "./BasicDrawer.styles";
import { StyledPrimaryButton } from "../../styles/styledGenericComponents/buttons/PrimaryButton.styles";
import { StyledSecondaryButton } from "../../styles/styledGenericComponents/buttons/SecondaryButton.styles";

function BasicDrawer({
  cancelButton,
  children,
  className,
  closable,
  confirmButton,
  isOpen,
  onClose,
  onFinish,
  title,
}) {
  return (
    <StyledBasicDrawer
      className={`basic-drawer ${className}`}
      closable={closable}
      destroyOnClose
      onClose={onClose}
      visible={isOpen}
    >
      <div className="header">{title}</div>

      <Form onFinish={onFinish}>
        <div className="body">{children}</div>

        <div className="footer">
          <div className="buttons">
            <StyledPrimaryButton className="button-submit" htmlType>
              {confirmButton}
            </StyledPrimaryButton>

            <StyledSecondaryButton className="button-cancel" onClick={onClose}>
              {cancelButton}
            </StyledSecondaryButton>
          </div>
        </div>
      </Form>
    </StyledBasicDrawer>
  );
}

BasicDrawer.propTypes = {
  cancelButton: PropTypes.string,
  children: PropTypes.func,
  className: PropTypes.string,
  closable: PropTypes.bool,
  confirmButton: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onFinish: PropTypes.func,
  title: PropTypes.string,
};

BasicDrawer.defaultProps = {
  cancelButton: "Cancelar",
  children: () => {},
  className: "",
  closable: false,
  confirmButton: "Confirmar",
  isOpen: false,
  onClose: () => {},
  onFinish: () => {},
  title: "",
};

export default BasicDrawer;
