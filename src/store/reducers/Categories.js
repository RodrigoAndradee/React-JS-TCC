import { CATEGORY_INFO } from "./ActionTypes";

export function categoriesReducer(state = {}, action) {
  const { categoryInfo, type } = action;

  switch (type) {
    case CATEGORY_INFO:
      return categoryInfo;
    default:
      return state;
  }
}
