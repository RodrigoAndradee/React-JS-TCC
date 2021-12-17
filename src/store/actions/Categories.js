import httpClient from "../../configs/httpClient";

// Assets
import * as constants from "../../assets/constants-file.json";

// Constants
import { NOTIFICATION_TYPES } from "../../constants/systemConstants";

// Helpers
import sendNotification from "../../helpers/NotificationsHelper";

// Reducers
import { CATEGORY_INFO, CREATE_CATEGORY } from "../ActionTypes";

const { ERRORS_CONSTANTS, SUCCESS_CONSTANTS } = constants.default;
const {
  ADD_CATEGORY_ERROR,
  EDIT_CATEGORY_ERROR,
  GET_CATEGORY_ERROR,
} = ERRORS_CONSTANTS.CATEGORIES_MANAGEMENT;
const { ADD_CATEGORY, EDIT_CATEGORY } = SUCCESS_CONSTANTS.CATEGORIES_MANAGEMENT;

function CategoryActions() {
  return async (dispatch) => {
    try {
      const url = "/category";

      const data = await httpClient.get(url);

      dispatch({ categoryInfo: data.data, type: CATEGORY_INFO });
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, GET_CATEGORY_ERROR);
    }
  };
}

function CreateCategory(categoryData) {
  return async (dispatch) => {
    try {
      const url = "/category/createCategory";

      const data = await httpClient.post(url, categoryData);

      dispatch({ createCategoryInfo: data.data, type: CREATE_CATEGORY });
      sendNotification(NOTIFICATION_TYPES.SUCCESS, ADD_CATEGORY);
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, ADD_CATEGORY_ERROR);
    }
  };
}

function EditCategory(categoryData) {
  return async (dispatch) => {
    try {
      const url = "/category/editCategory";

      const data = await httpClient.post(url, categoryData);

      dispatch({ createCategoryInfo: data.data, type: CREATE_CATEGORY });
      sendNotification(NOTIFICATION_TYPES.SUCCESS, EDIT_CATEGORY);
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, EDIT_CATEGORY_ERROR);
    }
  };
}

export { CategoryActions, CreateCategory, EditCategory };
