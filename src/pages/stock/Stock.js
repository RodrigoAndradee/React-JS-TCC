import React, { useEffect, useReducer, useState } from "react";
import { Empty } from "antd";
import { useDispatch } from "react-redux";

import BasicDrawer from "../../components/basicDrawer/BasicDrawer";
import GenericPage from "../../components/genericPage/GenericPage";
import StockForm from "./form/StockForm";
import StockPagination from "./stockPagination/StockPagination";
import Toolbar from "../../components/toolbar/Toolbar";
import ConfirmationModal from "../../components/modal/confirmationModal/ConfirmationModal";

import { CategoryActions } from "../../store/actions/Categories";
import {
  CreateStockActions,
  DeleteStockActions,
  StockActions,
} from "../../store/actions/Stock";
import { ProductsActions } from "../../store/actions/Products";

import { CategoriesReducer } from "../../store/reducers/Categories";
import { StockReducer } from "../../store/reducers/Stock";
import { ProductsReducer } from "../../store/reducers/Products";

import {
  filterStockByCategory,
  filterStockByDueDate,
  filterStockByName,
} from "../../helpers/StockHelpers";

import { PAGE_INFOS } from "../../constants/routesConstants";
import { DRAWER_LABELS } from "../../constants/stockConstants";
import { EMPTY_DATA } from "../../constants/errorsConstants";

import { StyledStock } from "./Stock.styles";

export default function Storage() {
  const [drawerState, setDrawerState] = useState(false);
  const [stockProducts, setStockProducts] = useState();
  const [deleteStockModal, setDeleteStockModal] = useState({
    state: false,
    stockId: null,
  });

  const [stockData, dispatchStockData] = useReducer(StockReducer);
  const [productsData, dispatchProductsData] = useReducer(ProductsReducer);
  const [categoriesInfoData, dispatchCategoriesInfoData] = useReducer(
    CategoriesReducer
  );

  const dispatchCreateStockData = useDispatch();
  const dispatchDeleteStockData = useDispatch();

  const handleAddProduct = () => {
    if (!drawerState) {
      setDrawerState(true);
    }
  };

  const onSubmitForm = (stockInfo) => {
    const enhancedStockInfo = {
      ...stockInfo,
      dueDate: stockInfo.dueDate.format("YYYY-MM-DD"),
    };

    CreateStockActions(enhancedStockInfo)(dispatchCreateStockData).then(() => {
      StockActions()(dispatchStockData);
    });

    setDrawerState(false);
  };

  const handleDeleteStock = (stockId) => {
    setDeleteStockModal({ state: true, stockId });
  };

  const handleOkDeleteStock = () => {
    DeleteStockActions(deleteStockModal.stockId)(dispatchDeleteStockData).then(
      () => {
        StockActions()(dispatchStockData);
      }
    );
  };

  const handleCloseDeleteModal = () => {
    setDeleteStockModal({ state: false, stockId: null });
  };

  const onClose = () => {
    setDrawerState(false);
  };

  const onFilterByName = (typedName) => {
    setStockProducts(filterStockByName(stockData, typedName));
  };

  const onFilterByCategory = (category) => {
    setStockProducts(filterStockByCategory(stockData, category));
  };

  const onFilterByDueDate = (selectedDate) => {
    setStockProducts(filterStockByDueDate(stockData, selectedDate));
  };

  useEffect(() => {
    setStockProducts(stockData);
  }, [stockData]);

  useEffect(() => {
    CategoryActions()(dispatchCategoriesInfoData);
    ProductsActions()(dispatchProductsData);
    StockActions()(dispatchStockData);
  }, []);

  return (
    <StyledStock>
      <BasicDrawer
        cancelButton={DRAWER_LABELS.cancelButton}
        closable
        confirmButton={DRAWER_LABELS.confirmButton}
        isOpen={drawerState}
        onClose={onClose}
        onFinish={onSubmitForm}
        title={DRAWER_LABELS.title}
      >
        <StockForm productsInfo={productsData} />
      </BasicDrawer>

      <ConfirmationModal
        isOpen={deleteStockModal.state}
        handleOk={handleOkDeleteStock}
        okText="Deletar"
        handleCancel={handleCloseDeleteModal}
      >
        Tem certeza que deseja deletar o produto do estoque?
      </ConfirmationModal>

      <GenericPage
        className="stock-body"
        toolbar={
          <Toolbar
            buttonLabel="Estoque"
            categoriesInfoData={categoriesInfoData}
            onClickAddButton={handleAddProduct}
            onSearchByName={onFilterByName}
            onSelectCategory={onFilterByCategory}
            onSelectDate={onFilterByDueDate}
            pageName={PAGE_INFOS.STOCK.pageName}
          />
        }
        body={
          <>
            {stockProducts && stockProducts.length ? (
              <StockPagination
                deleteStock={handleDeleteStock}
                stockData={stockProducts}
              />
            ) : (
              <Empty
                className="empty-data"
                description={EMPTY_DATA.emptyStock}
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            )}
          </>
        }
      />
    </StyledStock>
  );
}
