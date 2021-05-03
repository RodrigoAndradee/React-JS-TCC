import React from "react";
import PropTypes from "prop-types";
import { Button, Drawer, Form } from "antd";

import {
  CANCEL_BUTTON_LABEL,
  CREATE_BUTTON_LABEL,
  EDIT_BUTTON_LABEL,
} from "../../constants/drawerConstants";

import "./BasicDrawer.scss";

export default function BasicDrawer({
  className,
  drawerContent,
  isEditing,
  isOpen,
  onClose,
  onFinish,
  title,
}) {
  const buttonLabel = isEditing ? EDIT_BUTTON_LABEL : CREATE_BUTTON_LABEL;
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
            {buttonLabel}
          </Button>

          <Button className="button button-cancel" onClick={onClose}>
            {CANCEL_BUTTON_LABEL}
          </Button>
        </div>
      </Form>
    </Drawer>
  );
}

BasicDrawer.propTypes = {
  className: PropTypes.string,
  drawerContent: PropTypes.func,
  isEditing: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onFinish: PropTypes.func,
  title: PropTypes.string,
};

BasicDrawer.defaultProps = {
  className: "",
  drawerContent: () => null,
  isEditing: false,
  isOpen: false,
  onClose: () => {},
  onFinish: () => {},
  title: "",
};
