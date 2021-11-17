import React, { useEffect, useReducer, useState } from "react";

// Components
import GenericPage from "../../components/genericPage/GenericPage";
import SalesTable from "./SalesTable";
import SalesToolbar from "./SalesToolbar";

// Helpers
import { handleFilterData } from "../../helpers/SalesHelpers";

// Constants
import { ORDERS_TYPE } from "../../constants/ordersConstants";

// Store
import { fetchSalesData } from "../../store/actions/Sales";
import { SalesReducer } from "../../store/reducers/Sales";

export default function Sales() {
  const [selectedOrderType, setSelectedOrderType] = useState(
    ORDERS_TYPE.finished
  );
  const [selectedRangeDate, setSelectedRangeDate] = useState();
  const [selectedPaymentType, setSelectedPaymentType] = useState();
  const [selectedPaymentPlace, setSelectedPaymentPlace] = useState();
  const [typedSearch, setTypedSearch] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const [ordersItems, dispatchOrders] = useReducer(SalesReducer);

  const hasJustificationField = selectedOrderType === ORDERS_TYPE.rejected;

  useEffect(() => {
    setFilteredData(
      handleFilterData({
        selectedPaymentPlace,
        selectedPaymentType,
        selectedRangeDate,
        typedSearch,
        unfilteredData: ordersItems?.data,
      })
    );
  }, [
    ordersItems,
    selectedPaymentPlace,
    selectedPaymentType,
    selectedRangeDate,
    typedSearch,
  ]);

  useEffect(() => {
    fetchSalesData(selectedOrderType)(dispatchOrders);
  }, [selectedOrderType]);

  return (
    <>
      <GenericPage
        toolbar={
          <SalesToolbar
            setSelectedOrderType={setSelectedOrderType}
            setSelectedPaymentPlace={setSelectedPaymentPlace}
            setSelectedPaymentType={setSelectedPaymentType}
            setSelectedRangeDate={setSelectedRangeDate}
            setTypedSearch={setTypedSearch}
          />
        }
        body={
          <SalesTable
            hasJustificationField={hasJustificationField}
            filteredData={filteredData}
            isLoading={ordersItems?.isLoading}
          />
        }
      />
    </>
  );
}
