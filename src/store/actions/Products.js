import httpClient from "../../configs/httpClient";
import {
  CREATE_PRODUCT_INFO,
  DELETE_PRODUCT_INFO,
  EDIT_PRODUCT_INFO,
  PRODUCTS_INFO,
} from "../ActionTypes";

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

      sendNotification(
        "SUCCESS",
        `Produto "${productInfo.name}" Criado com Sucesso`,
        "Sucesso"
      );
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

      sendNotification(
        "SUCCESS",
        `Produto "${productInfo.name}" Editado com Sucesso`,
        "Sucesso"
      );
    } catch (error) {
      sendNotification("ERROR", "Erro ao Editar Produto", "Erro");
    }
  };
}

function DeleteProductActions(productId) {
  return async (dispatch) => {
    try {
      const url = `/product/deleteProduct/${productId}`;

      const data = await httpClient.delete(url);

      dispatch({ deleteProductInfo: data, type: DELETE_PRODUCT_INFO });

      sendNotification("SUCCESS", "Produto Deletado com Sucesso", "Sucesso");
    } catch (error) {
      sendNotification("ERROR", "Erro ao Deletar Produto", "Erro");
    }
  };
}

export {
  CreateProductActions,
  DeleteProductActions,
  ProductsActions,
  UpdateProductActions,
};
