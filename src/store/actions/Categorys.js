import httpClient from "../../configs/httpClient";

import { CATEGORY_INFO } from "../reducers/ActionTypes";

function CategoryActions() {
  return async (dispatch) => {
    try {
      const url = "/category";

      const data = await httpClient.get(url);

      dispatch({ categoryInfo: data.data, type: CATEGORY_INFO });
    } catch (error) {
      dispatch({ categoryInfo: error, type: CATEGORY_INFO });
    }
  };
}

export { CategoryActions };
