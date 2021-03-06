import React from "react";
import PropTypes from "prop-types";

import { Form, Modal } from "antd";

function BasicModalForm({
  cancelText,
  children,
  handleCancel,
  handleOk,
  isOpen,
  okText,
  title,
}) {
  const [form] = Form.useForm();

  const handleOKButton = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      handleOk(values);
    });
  };

  const handleCancelButton = () => {
    handleCancel(false);
  };

  return (
    <Modal
      cancelText={cancelText}
      okText={okText}
      onCancel={handleCancelButton}
      onOk={handleOKButton}
      title={title}
      visible={isOpen}
    >
      <Form form={form} onFinish={handleOk}>
        {children}
      </Form>
    </Modal>
  );
}

BasicModalForm.propTypes = {
  cancelText: PropTypes.string,
  children: PropTypes.func,
  handleCancel: PropTypes.func,
  handleOk: PropTypes.func,
  isOpen: PropTypes.bool,
  okText: PropTypes.string,
  title: PropTypes.string,
};

BasicModalForm.defaultProps = {
  cancelText: "Cancelar",
  children: () => {},
  handleCancel: () => {},
  handleOk: () => {},
  isOpen: false,
  okText: "Ok",
  title: "",
};

export default BasicModalForm;
