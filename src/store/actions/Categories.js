import httpClient from "../../configs/httpClient";

import { CATEGORY_INFO, CREATE_CATEGORY } from "../ActionTypes";

import sendNotification from "../../helpers/NotificationsHelper";

function CategoryActions() {
  return async (dispatch) => {
    try {
      const url = "/category";

      const data = await httpClient.get(url);

      dispatch({ categoryInfo: data.data, type: CATEGORY_INFO });
    } catch (error) {
      sendNotification("ERROR", "Erro ao Obter as Categorias", "Error");
    }
  };
}

function CreateCategory(categoryData) {
  return async (dispatch) => {
    try {
      const url = "/category/createCategory";

      const data = await httpClient.post(url, categoryData);

      dispatch({ createCategoryInfo: data.data, type: CREATE_CATEGORY });
      sendNotification("SUCCESS", "Categoria adicionar com sucesso", "Success");
    } catch (error) {
      sendNotification("ERROR", "Erro ao adicionar categoria", "Error");
    }
  };
}

export { CategoryActions, CreateCategory };
