import React from "react";
import PropTypes from "prop-types";

import { Modal } from "antd";

function ConfirmationModal({
  cancelText,
  children,
  handleCancel,
  handleOk,
  isOpen,
  okText,
}) {
  return (
    <Modal
      cancelText={cancelText}
      okText={okText}
      onCancel={handleCancel}
      onOk={handleOk}
      visible={isOpen}
    >
      {children}
    </Modal>
  );
}

ConfirmationModal.propTypes = {
  cancelText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  handleCancel: PropTypes.func,
  handleOk: PropTypes.func,
  isOpen: PropTypes.bool,
  okText: PropTypes.string,
};

ConfirmationModal.defaultProps = {
  cancelText: "Cancelar",
  children: null,
  handleCancel: () => {},
  handleOk: () => {},
  isOpen: false,
  okText: "Ok",
};

export default ConfirmationModal;
