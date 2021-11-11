import React, { useEffect, useReducer, useState } from "react";
import { Empty } from "antd";
import { useDispatch } from "react-redux";

import BasicDrawer from "../../components/basicDrawer/BasicDrawer";
import GenericPage from "../../components/genericPage/GenericPage";
import ProductsForm from "./form/ProductsForm";
import ProductsPagination from "./productsPagination/ProductsPagination";
import Toolbar from "../../components/toolbar/Toolbar";
import ConfirmationModal from "../../components/modal/confirmationModal/ConfirmationModal";

import {
  CreateProductActions,
  DeleteProductActions,
  ProductsActions,
  UpdateProductActions,
} from "../../store/actions/Products";
import { ProductsReducer } from "../../store/reducers/Products";
import { CategoryActions } from "../../store/actions/Categories";
import { CategoriesReducer } from "../../store/reducers/Categories";

import {
  capitalizeFirstLetter,
  filterProductByName,
  filterSelectedCategory,
} from "../../helpers/ProductsHelper";

import { EMPTY_DATA } from "../../constants/errorsConstants";
import { BUTTONS_LABELS, TITLE_LABELS } from "../../constants/drawerConstants";

import { StyledProducts } from "./Products.styles";

const { cancelButton, createButton, editButton } = BUTTONS_LABELS;
const { addProductLabel, editProductLabel } = TITLE_LABELS;

function Products() {
  const [drawerStates, setDrawerStates] = useState({
    isEditing: false,
    isOpen: false,
  });
  const [currentProduct, setCurrentProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [discardProduct, setDiscardProduct] = useState({
    isOpen: false,
    productId: null,
  });

  const [productsInfoData, dispatchProductsInfoData] = useReducer(
    ProductsReducer
  );
  const [categoriesInfoData, dispatchCategoriesInfoData] = useReducer(
    CategoriesReducer
  );

  const dispatchCreateProductData = useDispatch();
  const dispatchDeleteProductData = useDispatch();
  const dispatchUpdateProductData = useDispatch();

  const onClose = () => {
    setCurrentProduct(null);

    setDrawerStates({
      isEditing: false,
      isOpen: false,
    });
  };

  const editProduct = (product) => {
    setDrawerStates({
      isEditing: true,
      isOpen: true,
    });

    setCurrentProduct(product);
  };

  const deleteProduct = (productId) => {
    setDiscardProduct({ isOpen: true, productId });
  };

  const handleCreateProduct = () => {
    setDrawerStates({
      isEditing: false,
      isOpen: true,
    });
  };

  const onSubmitForm = (productInfo) => {
    setDrawerStates({
      isEditing: false,
      isOpen: false,
    });

    const enhancementProductInfo = capitalizeFirstLetter(productInfo);

    if (drawerStates.isEditing) {
      UpdateProductActions(
        enhancementProductInfo,
        currentProduct.id
      )({ dispatchUpdateProductData, dispatchProductsInfoData });
    } else {
      CreateProductActions(enhancementProductInfo)({
        dispatchCreateProductData,
        dispatchProductsInfoData,
      });
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

  const confirmationButtonLabel = drawerStates.isEditing
    ? editButton
    : createButton;

  const drawerTitle = drawerStates.isEditing
    ? editProductLabel
    : addProductLabel;

  useEffect(() => {
    setFilteredProducts(productsInfoData);
  }, [productsInfoData]);

  useEffect(() => {
    ProductsActions()(dispatchProductsInfoData);
    CategoryActions()(dispatchCategoriesInfoData);
  }, []);

  return (
    <StyledProducts>
      <ConfirmationModal
        isOpen={discardProduct.isOpen}
        handleOk={() => {
          const { productId } = discardProduct;

          DeleteProductActions(productId)({
            dispatchDeleteProductData,
            dispatchProductsInfoData,
          });

          setDiscardProduct({ isOpen: false, productId: null });
        }}
        okText="Deletar"
        handleCancel={() =>
          setDiscardProduct({ isOpen: false, productId: null })
        }
        closable={false}
      >
        Tem certeza que deseja deletar o produto?
      </ConfirmationModal>

      <BasicDrawer
        cancelButton={cancelButton}
        className="products-drawer"
        closable
        confirmationButton={confirmationButtonLabel}
        isOpen={drawerStates.isOpen}
        onClose={onClose}
        onFinish={onSubmitForm}
        title={drawerTitle}
      >
        <ProductsForm
          categoriesInfoData={categoriesInfoData}
          currentProduct={currentProduct}
        />
      </BasicDrawer>

      <GenericPage
        className="products-body"
        toolbar={
          <Toolbar
            buttonLabel="Produto"
            categoriesInfoData={categoriesInfoData}
            onClickAddButton={handleCreateProduct}
            onSearchByName={onSearchByName}
            onSelectCategory={onSelectCategory}
            pageName="products"
          />
        }
        body={
          <>
            {filteredProducts?.length ? (
              <ProductsPagination
                deleteProduct={deleteProduct}
                editProduct={editProduct}
                productsInfoData={filteredProducts}
              />
            ) : (
              <Empty
                className="empty-data"
                description={EMPTY_DATA.emptyProducts}
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            )}
          </>
        }
      />
    </StyledProducts>
  );
}

export default Products;
