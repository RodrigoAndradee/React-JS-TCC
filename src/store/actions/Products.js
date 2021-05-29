import httpClient from "../../configs/httpClient";
import {
  CREATE_PRODUCT_INFO,
  EDIT_PRODUCT_INFO,
  PRODUCTS_INFO,
} from "../reducers/ActionTypes";

import sendNotification from "../../helpers/NotificationsHelper";

function ProductsActions() {
  return async (dispatch) => {
    try {
      const url = "/product/products";

      const data = await httpClient.get(url);

      dispatch({ productsInfo: data.data, type: PRODUCTS_INFO });
    } catch (error) {
      sendNotification("ERROR", "Erro ao Obter os Produtos", "Error");
    }
  };
}

function CreateProductActions(productInfo) {
  return async (dispatch) => {
    try {
      const url = "/product/createProduct";

      const data = await httpClient.post(url, productInfo);

      dispatch({ createProductInfo: data, type: CREATE_PRODUCT_INFO });

      sendNotification("SUCCESS", "Produto Criado com Sucesso", "Sucesso");
    } catch (error) {
      sendNotification("ERROR", "Erro ao Criar Produto", "Erro");
    }
  };
}

function UpdateProductActions(productInfo, productID) {
  return async (dispatch) => {
    try {
      const url = `/product/updateProduct/${productID}`;

      const data = await httpClient.put(url, productInfo);

      dispatch({ editProductInfo: data, type: EDIT_PRODUCT_INFO });

      sendNotification("SUCCESS", "Produto Editado com Sucesso", "Sucesso");
    } catch (error) {
      sendNotification("ERROR", "Erro ao Editar Produto", "Erro");
    }
  };
}

export { CreateProductActions, ProductsActions, UpdateProductActions };
