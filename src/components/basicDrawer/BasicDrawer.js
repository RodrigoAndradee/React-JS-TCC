import React from "react";
import PropTypes from "prop-types";
import { Button, Drawer, Form } from "antd";

import "./BasicDrawer.scss";

function BasicDrawer({
  cancelButton,
  children,
  className,
  confirmButton,
  isOpen,
  onClose,
  onFinish,
  title,
}) {
  return (
    <Drawer
      className={`products-drawer ${className}`}
      closable={false}
      destroyOnClose
      onClose={onClose}
      title={title}
      visible={isOpen}
    >
      <Form onFinish={onFinish}>
        {children()}

        <div className="buttons">
          <Button
            className="button button-submit"
            htmlType="submit"
            type="primary"
          >
            {confirmButton}
          </Button>

          <Button className="button button-cancel" onClick={onClose}>
            {cancelButton}
          </Button>
        </div>
      </Form>
    </Drawer>
  );
}

BasicDrawer.propTypes = {
  cancelButton: PropTypes.string,
  children: PropTypes.func,
  className: PropTypes.string,
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
  confirmButton: "Confirmar",
  isOpen: false,
  onClose: () => {},
  onFinish: () => {},
  title: "",
};

export default BasicDrawer;
