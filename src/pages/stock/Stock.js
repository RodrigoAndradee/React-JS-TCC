import React, { useEffect, useReducer, useState } from "react";
import { Empty, Spin } from "antd";
import { useDispatch } from "react-redux";
import moment from "moment";
import "moment-timezone";

// Components
import BasicDrawer from "../../components/basicDrawer/BasicDrawer";
import GenericPage from "../../components/genericPage/GenericPage";
import StockForm from "./form/StockForm";
import StockPagination from "./stockPagination/StockPagination";
import Toolbar from "../../components/toolbar/Toolbar";
import ConfirmationModal from "../../components/modal/confirmationModal/ConfirmationModal";

// Constants
import { PAGE_INFOS } from "../../constants/routesConstants";
import { DRAWER_LABELS } from "../../constants/stockConstants";
import { EMPTY_DATA } from "../../constants/errorsConstants";

// Helpers
import { filterStockInfos } from "../../helpers/StockHelpers";
import { DEFAULT_FORMAT } from "../../helpers/DateGeneratorHelper";

// Reducers
import { CategoriesReducer } from "../../store/reducers/Categories";
import { StockReducer } from "../../store/reducers/Stock";
import { ProductsReducer } from "../../store/reducers/Products";

import { CategoryActions } from "../../store/actions/Categories";
import {
  CreateStockActions,
  DeleteStockActions,
  StockActions,
} from "../../store/actions/Stock";
import { ProductsActions } from "../../store/actions/Products";

// Styles
import { StyledStock } from "./Stock.styles";

export default function Storage() {
  const [drawerState, setDrawerState] = useState(false);
  const [filteredStockProducts, setFilteredStockProducts] = useState();

  const [typedFilter, setTypedFilter] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedDueDate, setSelectedDueDate] = useState();
  const [deleteStockModal, setDeleteStockModal] = useState({
    state: false,
    stockId: null,
  });

  const [fetchedStockInfos, dispatchStockData] = useReducer(StockReducer);
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
    const date = stockInfo.dueDate.format(DEFAULT_FORMAT);
    const brazilianTimeZone = moment(date).tz("America/Phoenix");

    const enhancedStockInfo = {
      ...stockInfo,
      dueDate: brazilianTimeZone,
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
    DeleteStockActions(deleteStockModal.stockId)(dispatchDeleteStockData)
      .then(() => {
        StockActions()(dispatchStockData);
      })
      .then(() => setDeleteStockModal({ state: false, stockId: null }));
  };

  const handleCloseDeleteModal = () => {
    setDeleteStockModal({ state: false, stockId: null });
  };

  const onClose = () => {
    setDrawerState(false);
  };

  const getPageContent = () => {
    if (fetchedStockInfos?.loading) {
      return <Spin tip="Carregando as informações" />;
    }

    if (!fetchedStockInfos?.stockInfo?.length) {
      return (
        <Empty
          className="empty-data"
          description={EMPTY_DATA.emptyProducts}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      );
    }

    return (
      <StockPagination
        deleteStock={handleDeleteStock}
        stockData={filteredStockProducts}
      />
    );
  };

  useEffect(() => {
    setFilteredStockProducts(
      filterStockInfos({
        selectedCategory,
        selectedDueDate,
        typedFilter,
        unfilteredData: fetchedStockInfos?.stockInfo,
      })
    );
  }, [typedFilter, selectedCategory, selectedDueDate, fetchedStockInfos]);

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
        <StockForm productsInfo={productsData?.productsInfo} />
      </BasicDrawer>

      <ConfirmationModal
        closable={false}
        handleCancel={handleCloseDeleteModal}
        handleOk={handleOkDeleteStock}
        isOpen={deleteStockModal.state}
        okText="Deletar"
      >
        Tem certeza que deseja deletar o produto do estoque?
      </ConfirmationModal>

      <GenericPage
        toolbar={
          <Toolbar
            buttonLabel="Estoque"
            categoriesInfoData={categoriesInfoData}
            onClickAddButton={handleAddProduct}
            onSearchByName={(value) => setTypedFilter(value)}
            onSelectCategory={(value) => setSelectedCategory(value)}
            onSelectDate={(value) => setSelectedDueDate(value)}
            pageName={PAGE_INFOS.STOCK.pageName}
          />
        }
        body={<div className="stock-body">{getPageContent()}</div>}
      />
    </StyledStock>
  );
}
