import React, { useEffect, useReducer, useState } from "react";

import BasicDrawer from "../../components/basicDrawer/BasicDrawer";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import StockForm from "./form/StockForm";

import Toolbar from "../../components/toolbar/Toolbar";
import StockPagination from "./stockPagination/StockPagination";

import { CreateStockActions, StockActions } from "../../store/actions/Stock";
import { ProductsActions } from "../../store/actions/Products";

import { CreateStockReducer, StockReducer } from "../../store/reducers/Stock";
import { ProductsReducer } from "../../store/reducers/Products";

import "./Stock.scss";

export default function Storage() {
  const [drawerState, setDrawerState] = useState(false);

  const [stockData, dispatchStockData] = useReducer(StockReducer);
  const [createStockData, dispatchCreateStockData] = useReducer(
    CreateStockReducer
  );
  const [productsData, dispatchProductsData] = useReducer(ProductsReducer);

  const handleAddProduto = () => {
    if (!drawerState) {
      setDrawerState(true);
    }
  };

  const onSubmitForm = (stockInfo) => {
    const { price } = stockInfo;
    const enhancementStockInfo = { ...stockInfo, price: parseFloat(price) };

    CreateStockActions(enhancementStockInfo)(dispatchCreateStockData);
  };

  const onClose = () => {
    setDrawerState(false);
  };

  const onFilterByName = () => {
    console.log("filter by name");
  };

  const onFilterByCategory = () => {
    console.log("filter by category");
  };

  useEffect(() => {
    StockActions()(dispatchStockData);
    ProductsActions()(dispatchProductsData);
  }, [createStockData]);
  return (
    <div className="main-div-stock">
      <Header />

      <BasicDrawer
        isOpen={drawerState}
        title="Adicionar Produto no Estoque"
        cancelButton="Cancelar"
        confirmationButton="Adicionar"
        onClose={onClose}
        drawerContent={() => <StockForm productsInfo={productsData} />}
        onFinish={onSubmitForm}
      />

      <Toolbar
        buttonLabel="Produto"
        onClickAddButton={handleAddProduto}
        onSearchByName={onFilterByName}
        onSelectCategory={onFilterByCategory}
      />

      {stockData && <StockPagination stockData={stockData} />}

      <Footer />
    </div>
  );
}
