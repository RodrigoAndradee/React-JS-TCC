import React from "react";
import PropTypes from "prop-types";
import { Button, Drawer, Form } from "antd";

import {
  CANCEL_BUTTON_LABEL,
  SEND_BUTTON_LABEL,
} from "../../constants/drawerConstants";

import "./BasicDrawer.scss";

export default function BasicDrawer({
  className,
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
            {SEND_BUTTON_LABEL}
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
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onFinish: PropTypes.func,
  title: PropTypes.string,
};

BasicDrawer.defaultProps = {
  className: "",
  drawerContent: () => null,
  isOpen: false,
  onClose: () => {},
  onFinish: () => {},
  title: "",
};
