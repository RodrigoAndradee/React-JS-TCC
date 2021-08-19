import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "antd";

import { StyledBasicDrawer } from "./BasicDrawer.styles";

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
            <Button className="button-submit" htmlType="submit" type="primary">
              {confirmButton}
            </Button>

            <Button className="button-cancel" onClick={onClose}>
              {cancelButton}
            </Button>
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
