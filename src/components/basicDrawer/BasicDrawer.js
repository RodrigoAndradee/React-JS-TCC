import React from "react";
import PropTypes from "prop-types";
import { Button, Drawer, Form } from "antd";

import "./BasicDrawer.scss";

function BasicDrawer({
  cancelButton,
  className,
  confirmationButton,
  drawerContent,
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
        {drawerContent()}

        <div className="buttons">
          <Button
            className="button button-submit"
            htmlType="submit"
            type="primary"
          >
            {confirmationButton}
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
  cancelButton: PropTypes.string.isRequired,
  className: PropTypes.string,
  confirmationButton: PropTypes.string.isRequired,
  drawerContent: PropTypes.func,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onFinish: PropTypes.func,
  title: PropTypes.string,
};

BasicDrawer.defaultProps = {
  className: "",
  drawerContent: () => {},
  isOpen: false,
  onClose: () => {},
  onFinish: () => {},
  title: "",
};

export default BasicDrawer;
