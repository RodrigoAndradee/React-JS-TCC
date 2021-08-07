import { Modal } from "antd";

function ConfirmationModal(props) {
  const { title, icon, content, okText, cancelText, onOk } = props;

  return Modal.confirm({
    cancelText,
    content,
    icon,
    okText,
    onOk,
    title,
  });
}

export default ConfirmationModal;
