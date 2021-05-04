import React, { useEffect, useReducer, useState } from "react";

import { Col, Pagination, Row } from "antd";

import BasicDrawer from "../../components/basicDrawer/BasicDrawer";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductsCard from "../../components/productsCards/ProductCard";
import ProductsForm from "./form/ProductsForm";
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

import "./Products.scss";

const pageItemsCount = 8;

export default function Products() {
  const [drawerState, setDrawerState] = useState({
    isEditing: false,
    drawerState: false,
  });
  const [paginationValue, setPaginationValues] = useState({
    min: 0,
    max: 8,
    currentPage: 1,
  });
  const [currentProduct, setCurrentProduct] = useState(null);
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

  const onClose = () => {
    setDrawerState({
      isEditing: false,
      drawerState: false,
    });
    setCurrentProduct(null);
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

  const onSubmit = (productInfo) => {
    setDrawerState({ isEditing: false, drawerState: false });

    if (drawerState.isEditing) {
      UpdateProductActions(
        productInfo,
        currentProduct.id
      )(dispatchUpdateProductData);
    } else {
      CreateProductActions(productInfo)(dispatchCreateProductData);
    }
  };

  const handleChangePageNumber = (page) => {
    setPaginationValues({
      min: (page - 1) * pageItemsCount,
      max: page * pageItemsCount,
      currentPage: page,
    });
  };

  useEffect(() => {
    CategoryActions()(dispatchCategoriesInfoData);
  }, []);

  useEffect(() => {
    ProductsActions()(dispatchProductsInfoData);
  }, [createProductData, updateProductData]);

  return (
    <div className="main-div-products">
      <Header />

      <BasicDrawer
        className="products-drawer"
        drawerContent={() => (
          <ProductsForm
            currentProduct={currentProduct}
            categoriesInfoData={categoriesInfoData}
          />
        )}
        isEditing={drawerState.isEditing}
        isOpen={drawerState.drawerState}
        onClose={onClose}
        onFinish={onSubmit}
        title={drawerState.isEditing ? "Editar Produto" : "Adicionar Produto"}
      />

      <Toolbar
        categoriesInfoData={categoriesInfoData}
        createProduct={handleCreateProduct}
      />

      {productsInfoData && productsInfoData.length ? (
        <>
          <Row gutter={[16, 16]} className="products-body">
            {productsInfoData
              .slice(paginationValue.min, paginationValue.max)
              .map((cardInfo) => {
                return (
                  <Col span={6} key={cardInfo.id} className="products-card">
                    <ProductsCard
                      editProduct={editProduct}
                      productsInfo={cardInfo}
                    />
                  </Col>
                );
              })}
          </Row>

          <Pagination
            className="pagination-products"
            current={paginationValue.currentPage}
            onChange={handleChangePageNumber}
            pageSize={pageItemsCount}
            total={productsInfoData && productsInfoData.length}
          />
        </>
      ) : (
        <h1>Você não possui produtos cadastrados</h1>
      )}

      <Footer />
    </div>
  );
}
