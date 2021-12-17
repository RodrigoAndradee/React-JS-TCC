import React from "react";
import PropTypes from "prop-types";

import { StyledModal } from "./ConfirmationModal.styles";

function ConfirmationModal({
  cancelText,
  children,
  closable,
  handleCancel,
  handleOk,
  isOpen,
  okText,
}) {
  return (
    <StyledModal
      cancelText={cancelText}
      okText={okText}
      onCancel={handleCancel}
      onOk={handleOk}
      visible={isOpen}
      closable={closable}
    >
      {children}
    </StyledModal>
  );
}

ConfirmationModal.propTypes = {
  cancelText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  closable: PropTypes.bool,
  handleCancel: PropTypes.func,
  handleOk: PropTypes.func,
  isOpen: PropTypes.bool,
  okText: PropTypes.string,
};

ConfirmationModal.defaultProps = {
  cancelText: "Cancelar",
  children: null,
  closable: false,
  handleCancel: () => {},
  handleOk: () => {},
  isOpen: false,
  okText: "Ok",
};

export default ConfirmationModal;
