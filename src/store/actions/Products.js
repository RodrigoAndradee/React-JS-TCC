import httpClient from "../../configs/httpClient";

import sendNotification from "../../helpers/NotificationsHelper";

import {
  CREATE_PRODUCT_INFO,
  DELETE_PRODUCT_INFO,
  EDIT_PRODUCT_INFO,
  PRODUCTS_INFO,
} from "../ActionTypes";

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
      sendNotification("ERROR", "Erro ao Obter os Produtos", "Error");
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
