import { CATEGORY_INFO, CREATE_CATEGORY } from "../ActionTypes";

export function CategoriesReducer(state = {}, action) {
  const { categoryInfo, createCategory, type } = action;

  switch (type) {
    case CATEGORY_INFO:
      return categoryInfo;
    case CREATE_CATEGORY:
      return createCategory;
    default:
      return state;
  }
}

export function CreateCategoriesReducer(state = {}, action) {
  const { createCategoryInfo, type } = action;

  switch (type) {
    case CREATE_CATEGORY:
      return createCategoryInfo;
    default:
      return state;
  }
}
