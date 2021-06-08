import React, { useEffect, useReducer, useState } from "react";
import { Empty, Modal } from "antd";

import BasicDrawer from "../../components/basicDrawer/BasicDrawer";

import GenericPage from "../../components/genericPage/GenericPage";
import ProductsForm from "./form/ProductsForm";
import ProductsPagination from "./productsPagination/ProductsPagination";
import Toolbar from "../../components/toolbar/Toolbar";

import {
  CreateProductActions,
  DeleteProductActions,
  ProductsActions,
  UpdateProductActions,
} from "../../store/actions/Products";
import {
  CreateProductReducer,
  DeleteProductReducer,
  ProductsReducer,
  UpdateProductReducer,
} from "../../store/reducers/Products";
import { CategoryActions } from "../../store/actions/Categories";
import { categoriesReducer } from "../../store/reducers/Categories";

import {
  capitalizeFirstLetter,
  filterProductByName,
  filterSelectedCategory,
} from "../../helpers/ProductsHelper";

import { EMPTY_DATA } from "../../constants/errorsConstants";
import { BUTTONS_LABELS, TITLE_LABELS } from "../../constants/drawerConstants";

import "./Products.scss";

const { cancelButton, createButton, editButton } = BUTTONS_LABELS;
const { addProductLabel, editProductLabel } = TITLE_LABELS;

function Products() {
  const [drawerState, setDrawerState] = useState({
    isEditing: false,
    drawerState: false,
  });
  const [currentProduct, setCurrentProduct] = useState(null);

  const [filteredProducts, setFilteredProducts] = useState(null);

  const [productsInfoData, dispatchProductsInfoData] = useReducer(
    ProductsReducer
  );
  const [createProductData, dispatchCreateProductData] = useReducer(
    CreateProductReducer
  );
  const [categoriesInfoData, dispatchCategoriesInfoData] = useReducer(
    categoriesReducer
  );
  const [updateProductData, dispatchUpdateProductData] = useReducer(
    UpdateProductReducer
  );
  const [deleteProductData, dispatchDeleteProductData] = useReducer(
    DeleteProductReducer
  );

  const confirmationButtonLabel = drawerState.isEditing
    ? editButton
    : createButton;

  const drawerTitle = drawerState.isEditing
    ? editProductLabel
    : addProductLabel;

  const onClose = () => {
    setDrawerState({
      isEditing: false,
      drawerState: false,
    });
    setCurrentProduct(null);
  };

  const turnProductEnabledOrDisabled = (product, enabled) => {
    const enhancementProduct = { ...product, enabled };

    UpdateProductActions(
      enhancementProduct,
      enhancementProduct.id
    )(dispatchUpdateProductData);
  };

  const editProduct = (product) => {
    setDrawerState({
      isEditing: true,
      drawerState: true,
    });

    setCurrentProduct(product);
  };

  const deleteProduct = (productId) => {
    Modal.confirm({
      title: "Certeza que deseja deletar o produto?",
      icon: null,
      content: null,
      okText: "Deletar",
      cancelText: "Cancelar",
      onOk: () => {
        DeleteProductActions(productId)(dispatchDeleteProductData);
      },
    });
  };

  const handleCreateProduct = () => {
    setDrawerState({
      isEditing: false,
      drawerState: true,
    });
  };

  const onSubmitForm = (productInfo) => {
    console.log("productInfo: ", productInfo);
    setDrawerState({ isEditing: false, drawerState: false });

    const enhancementProductInfo = capitalizeFirstLetter(productInfo);

    if (drawerState.isEditing) {
      UpdateProductActions(
        enhancementProductInfo,
        currentProduct.id
      )(dispatchUpdateProductData);
    } else {
      CreateProductActions(enhancementProductInfo)(dispatchCreateProductData);
    }
  };

  const onSelectCategory = (selectedCategory) => {
    const filteredValues = filterSelectedCategory(
      productsInfoData,
      selectedCategory
    );

    setFilteredProducts(filteredValues);
  };

  const onSearchByName = (typedName) => {
    const filteredValues = filterProductByName(productsInfoData, typedName);

    setFilteredProducts(filteredValues);
  };

  useEffect(() => {
    CategoryActions()(dispatchCategoriesInfoData);
  }, []);

  useEffect(() => {
    setFilteredProducts(productsInfoData);
  }, [productsInfoData]);

  useEffect(() => {
    ProductsActions()(dispatchProductsInfoData);
  }, [createProductData, updateProductData, deleteProductData]);

  return (
    <div className="main-div-products">
      <BasicDrawer
        cancelButton={cancelButton}
        className="products-drawer"
        confirmationButton={confirmationButtonLabel}
        isOpen={drawerState.drawerState}
        onClose={onClose}
        onFinish={onSubmitForm}
        title={drawerTitle}
      >
        {() => (
          <ProductsForm
            categoriesInfoData={categoriesInfoData}
            currentProduct={currentProduct}
          />
        )}
      </BasicDrawer>

      <GenericPage
        toolbar={
          categoriesInfoData && (
            <Toolbar
              buttonLabel="Produto"
              categoriesInfoData={categoriesInfoData}
              onClickAddButton={handleCreateProduct}
              onSearchByName={onSearchByName}
              onSelectCategory={onSelectCategory}
              pageName="products"
            />
          )
        }
        body={
          <>
            {filteredProducts && filteredProducts.length ? (
              <ProductsPagination
                deleteProduct={deleteProduct}
                editProduct={editProduct}
                productsInfoData={filteredProducts}
                turnProductEnabledOrDisabled={turnProductEnabledOrDisabled}
              />
            ) : (
              <Empty className="empty-data" description={false}>
                {EMPTY_DATA.emptyProducts}
              </Empty>
            )}
          </>
        }
      />
    </div>
  );
}

export default Products;
