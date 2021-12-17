import * as constants from "../assets/constants-file.json";

const { SYSTEM_CONFIG } = constants.default;

export const PROJECT_VARIABLES = {
  systemWidth: SYSTEM_CONFIG.MAX_WIDTH,
};

export const NOTIFICATION_TYPES = Object.freeze({
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  INFO: "INFO",
  WARNING: "WARNING",
});
