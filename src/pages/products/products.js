import React, { useEffect, useReducer, useState } from "react";

import { Col, Pagination, Row } from "antd";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Toolbar from "../../components/toolbar/Toolbar";

import ProductsCard from "../../components/productsCards/productCard/ProductCard";
import BasicDrawer from "../../components/basicDrawer/BasicDrawer";
import ProductsForm from "./form/ProductsForm";

import {
  CreateProductActions,
  ProductsActions,
} from "../../store/actions/Products";
import {
  CreateProductReducer,
  ProductsReducer,
} from "../../store/reducers/Products";

import "./Products.scss";

const pageSize = 8;

export default function Products() {
  const [drawerState, setDrawerState] = useState({
    isEditing: false,
    drawerState: false,
  });
  const [paginataionValues, setPaginationValues] = useState({
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
    if (drawerState.isEditing) {
      console.log("editando produto");
    } else {
      CreateProductActions(productInfo)(dispatchCreateProductData);
    }
  };

  const handleChangePageNumber = (page) => {
    setPaginationValues({
      min: (page - 1) * pageSize,
      max: page * pageSize,
      currentPage: page,
    });
  };

  useEffect(() => {
    ProductsActions()(dispatchProductsInfoData);
  }, []);

  return (
    <div className="main-div-products">
      <Header />

      <BasicDrawer
        currentProduct={currentProduct}
        className="products-drawer"
        drawerContent={() => <ProductsForm currentProduct={currentProduct} />}
        isOpen={drawerState.drawerState}
        onClose={onClose}
        onFinish={onSubmit}
        title={drawerState.isEditing ? "Editando Produto" : "Adicionar Produto"}
      />

      <Toolbar createProduct={handleCreateProduct} />

      {productsInfoData && productsInfoData.length ? (
        <>
          <Row gutter={[16, 16]} className="products-body">
            {productsInfoData
              .slice(paginataionValues.min, paginataionValues.max)
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
            current={paginataionValues.currentPage}
            onChange={handleChangePageNumber}
            pageSize={pageSize}
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
