import httpClient from "../../configs/httpClient";

// Assets
import * as constants from "../../assets/constants-file.json";

// Constants
import { NOTIFICATION_TYPES } from "../../constants/systemConstants";

// Helpers
import sendNotification from "../../helpers/NotificationsHelper";

// Reducers
import {
  CREATE_PRODUCT_INFO,
  DELETE_PRODUCT_INFO,
  EDIT_PRODUCT_INFO,
  PRODUCTS_INFO,
} from "../ActionTypes";

const { ERRORS_CONSTANTS, SUCCESS_CONSTANTS } = constants.default;
const {
  CREATE_PRODUCT_ERROR,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT_ERROR,
  GET_PRODUCTS_ERROR,
} = ERRORS_CONSTANTS.PRODUCTS_PAGE;
const {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} = SUCCESS_CONSTANTS.PRODUCTS_PAGE;

function ProductsActions() {
  return async (dispatch) => {
    try {
      dispatch({ loading: true, type: PRODUCTS_INFO });

      const url = "/product/products";

      const data = await httpClient.get(url);

      dispatch({
        productsInfo: data.data,
        type: PRODUCTS_INFO,
      });
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, GET_PRODUCTS_ERROR);
    }
  };
}

function CreateProductActions(productInfo) {
  return async (dispatches) => {
    const { dispatchCreateProductData, dispatchProductsInfoData } = dispatches;

    try {
      const url = "/product/createProduct";

      const data = await httpClient.post(url, productInfo);

      dispatchCreateProductData({
        createProductInfo: data,
        type: CREATE_PRODUCT_INFO,
      });

      ProductsActions()(dispatchProductsInfoData);

      sendNotification(NOTIFICATION_TYPES.SUCCESS, CREATE_PRODUCT);
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, CREATE_PRODUCT_ERROR);
    }
  };
}

function UpdateProductActions(productInfo, productID) {
  return async (dispatches) => {
    const { dispatchUpdateProductData, dispatchProductsInfoData } = dispatches;

    try {
      const url = `/product/updateProduct/${productID}`;

      const data = await httpClient.put(url, productInfo);

      dispatchUpdateProductData({
        editProductInfo: data,
        type: EDIT_PRODUCT_INFO,
      });

      ProductsActions()(dispatchProductsInfoData);

      sendNotification(NOTIFICATION_TYPES.SUCCESS, EDIT_PRODUCT);
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, EDIT_PRODUCT_ERROR);
    }
  };
}

function DeleteProductActions(productId) {
  return async (dispatches) => {
    const { dispatchDeleteProductData, dispatchProductsInfoData } = dispatches;
    try {
      const url = `/product/deleteProduct/${productId}`;

      const data = await httpClient.delete(url);

      dispatchDeleteProductData({
        deleteProductInfo: data,
        type: DELETE_PRODUCT_INFO,
      });

      ProductsActions()(dispatchProductsInfoData);

      sendNotification(NOTIFICATION_TYPES.SUCCESS, DELETE_PRODUCT);
    } catch (error) {
      sendNotification(NOTIFICATION_TYPES.ERROR, DELETE_PRODUCT_ERROR);
    }
  };
}

export {
  CreateProductActions,
  DeleteProductActions,
  ProductsActions,
  UpdateProductActions,
};
