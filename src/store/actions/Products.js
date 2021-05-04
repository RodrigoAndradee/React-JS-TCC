import httpClient from "../../configs/httpClient";
import {
  CREATE_PRODUCT_INFO,
  EDIT_PRODUCT_INFO,
  PRODUCTS_INFO,
} from "../reducers/ActionTypes";

const defaultImage =
  "https://www.beefpoint.com.br/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg";

function ProductsActions() {
  return async (dispatch) => {
    try {
      const url = "/product/products";

      const data = await httpClient.get(url);

      dispatch({ productsInfo: data.data, type: PRODUCTS_INFO });
    } catch (error) {
      dispatch({ productsInfo: error, type: PRODUCTS_INFO });
    }
  };
}

function CreateProductActions(productInfo) {
  // eslint-disable-next-line no-param-reassign
  productInfo.defaultImage = defaultImage;

  return async (dispatch) => {
    try {
      const url = "/product/createProduct";

      const data = await httpClient.post(url, productInfo);

      dispatch({ createProductInfo: data.data, type: CREATE_PRODUCT_INFO });
    } catch (error) {
      dispatch({ createProductInfo: error, type: CREATE_PRODUCT_INFO });
    }
  };
}

function UpdateProductActions(productInfo, productID) {
  // eslint-disable-next-line no-param-reassign
  productInfo.defaultImage = defaultImage;

  return async (dispatch) => {
    try {
      const url = `/product/updateProduct/${productID}`;

      const data = await httpClient.put(url, productInfo);

      dispatch({ editProductInfo: data.data, type: EDIT_PRODUCT_INFO });
    } catch (error) {
      dispatch({ editProductInfo: error, type: EDIT_PRODUCT_INFO });
    }
  };
}

export { CreateProductActions, ProductsActions, UpdateProductActions };
