import httpClient from "../../configs/httpClient";

// Assets
import * as constants from "../../assets/constants-file.json";

// Constants
import { NOTIFICATION_TYPES } from "../../constants/systemConstants";

// Helpers
import sendNotification from "../../helpers/NotificationsHelper";

// Reducers
import { LOG_OUT, USER_INFO } from "../ActionTypes";

const { ERRORS_CONSTANTS, SUCCESS_CONSTANTS } = constants.default;
const { LOGIN_ERROR } = ERRORS_CONSTANTS.LOGIN_PAGE;
const { LOGIN_SUCCESS } = SUCCESS_CONSTANTS.LOGIN_PAGE;

function SignIn({ userName, password }) {
  return async (dispatch) => {
    try {
      const url = "internal/login";

      const data = await httpClient.post(url, { userName, password });

      dispatch({ userInfo: data.data, type: USER_INFO });

      sendNotification(NOTIFICATION_TYPES.SUCCESS, LOGIN_SUCCESS);
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, LOGIN_ERROR);
    }
  };
}

function LogOut() {
  return { type: LOG_OUT };
}

export { LogOut, SignIn };
