import { notification } from "antd";

import { NOTIFICATION_TYPES } from "../constants/systemConstants";

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
    case NOTIFICATION_TYPES.SUCCESS:
      sendSuccessNotification(description, message);
      break;
    case NOTIFICATION_TYPES.ERROR:
      sendErrorNotification(description, message);
      break;
    case NOTIFICATION_TYPES.WARNING:
      sendWarningNotification(description, message);
      break;
    default:
      sendCleanNotification(description, message);
  }
}
