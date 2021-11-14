import {
  CREATE_PRODUCT_INFO,
  DELETE_PRODUCT_INFO,
  EDIT_PRODUCT_INFO,
  PRODUCTS_INFO,
} from "../ActionTypes";

export function ProductsReducer(state = { loading: false }, action) {
  const {
    createProductInfo,
    deleteProductInfo,
    editProductInfo,
    loading = false,
    productsInfo,
    type,
  } = action;

  switch (type) {
    case PRODUCTS_INFO:
      return { productsInfo, loading };
    case CREATE_PRODUCT_INFO:
      return createProductInfo;
    case EDIT_PRODUCT_INFO:
      return editProductInfo;
    case DELETE_PRODUCT_INFO:
      return deleteProductInfo;
    default:
      return state;
  }
}
