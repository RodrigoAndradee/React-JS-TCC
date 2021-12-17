// import httpClient from "../../configs/httpClient";

import * as constants from "../../assets/constants-file.json";

import { CONSTANTS_FILE } from "../ActionTypes";

function getConstantsFile() {
  return async (dispatch) => {
    try {
      //   const url = "/config";

      //   const data = await httpClient.get(url);

      const a = constants.default;

      dispatch({ constantsFile: a, type: CONSTANTS_FILE });
      //   sendNotification(NOTIFICATION_TYPES.SUCCESS, EDIT_CATEGORY);
    } catch (error) {
      //   sendNotification(NOTIFICATION_TYPES.ERROR, EDIT_CATEGORY_ERROR);
    }
  };
}

export { getConstantsFile };
