import React, { useEffect, useReducer, useState } from "react";

import BasicDrawer from "../../components/basicDrawer/BasicDrawer";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import ProductsForm from "./form/ProductsForm";
import ProductsPagination from "./productsPagination/ProductsPagination";
import Toolbar from "../../components/toolbar/Toolbar";

import {
  CreateProductActions,
  ProductsActions,
  UpdateProductActions,
} from "../../store/actions/Products";
import {
  CreateProductReducer,
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

  const handleCreateProduct = () => {
    setDrawerState({
      isEditing: false,
      drawerState: true,
    });
  };

  const onSubmitForm = (productInfo) => {
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
  }, [createProductData, updateProductData]);

  return (
    <div className="main-div-products">
      <Header />

      <BasicDrawer
        cancelButton={cancelButton}
        className="products-drawer"
        confirmationButton={confirmationButtonLabel}
        drawerContent={() => (
          <ProductsForm
            currentProduct={currentProduct}
            categoriesInfoData={categoriesInfoData}
          />
        )}
        isOpen={drawerState.drawerState}
        onClose={onClose}
        onFinish={onSubmitForm}
        title={drawerTitle}
      />

      {categoriesInfoData && (
        <Toolbar
          categoriesInfoData={categoriesInfoData}
          onClickAddButton={handleCreateProduct}
          onSearchByName={onSearchByName}
          onSelectCategory={onSelectCategory}
          buttonLabel="Produto"
        />
      )}

      {filteredProducts ? (
        <ProductsPagination
          editProduct={editProduct}
          productsInfoData={filteredProducts}
          turnProductEnabledOrDisabled={turnProductEnabledOrDisabled}
        />
      ) : (
        <h1>Você não possui produtos cadastrados</h1>
      )}
      <Footer />
    </div>
  );
}

export default Products;
