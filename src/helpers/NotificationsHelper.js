import { notification } from "antd";

function sendSuccessNotification(description, message) {
  notification.success({
    message,
    description,
  });
}

function sendErrorNotification(description, message) {
  notification.error({
    message,
    description,
  });
}

function sendWarningNotification(description, message) {
  notification.warn({
    message,
    description,
  });
}

function sendCleanNotification(description, message) {
  notification.open({
    message,
    description,
  });
}

export default function sendNotification(
  notificationType,
  description,
  message
) {
  switch (notificationType) {
    case "SUCCESS":
      sendSuccessNotification(description, message);
      break;
    case "ERROR":
      sendErrorNotification(description, message);
      break;
    case "WARNING":
      sendWarningNotification(description, message);
      break;
    default:
      sendCleanNotification(description, message);
  }
}
