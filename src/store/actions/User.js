import httpClient from "../../configs/httpClient";

// Assets
import * as constants from "../../assets/constants-file.json";

// Constants
import { NOTIFICATION_TYPES } from "../../constants/systemConstants";

// Helpers
import sendNotification from "../../helpers/NotificationsHelper";

// Reducers
import { CREATE_USER } from "../ActionTypes";

const { ERRORS_CONSTANTS, SUCCESS_CONSTANTS } = constants.default;
const { ADD_USER_ERROR } = ERRORS_CONSTANTS.USER_MANAGEMENT;
const { ADD_USER } = SUCCESS_CONSTANTS.USER_MANAGEMENT;

function CreateUser(userInfo) {
  return async (dispatch) => {
    try {
      const url = "/internal/create";

      const data = await httpClient.post(url, userInfo);

      dispatch({ stockInfo: data.data, type: CREATE_USER });
      sendNotification(NOTIFICATION_TYPES.SUCCESS, ADD_USER);
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, ADD_USER_ERROR);
    }
  };
}

export { CreateUser };
