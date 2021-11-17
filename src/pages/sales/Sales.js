import { Select, DatePicker, Input } from "antd";
import React, { useEffect, useReducer, useState } from "react";

// Components
import GenericPage from "../../components/genericPage/GenericPage";

// Helpers
import {
  expandedRowRender,
  generateSummaryRows,
  getCalculatedTableX,
  handleFilterData,
} from "../../helpers/SalesHelpers";

// Constants
import { ORDERS_TYPE } from "../../constants/ordersConstants";

// Store
import { fetchSalesData } from "../../store/actions/Sales";
import { SalesReducer } from "../../store/reducers/Sales";

import { StyledTable } from "../../styles/styledGenericComponents/TableComponent.styles";
import { StyledSalesToolbar } from "./Sales.styles";
import tableColumnDefinitions from "./SalesTableColumnDefinitions";
import { PAYMENT_PLACES, PAYMENT_TYPES } from "../../constants/salesConstants";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Search } = Input;

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
  const tableColumns = tableColumnDefinitions(hasJustificationField);
  const xTable = getCalculatedTableX(tableColumns);
  const yTable = 550;

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
          <StyledSalesToolbar>
            <Select
              className="filter-option"
              defaultValue={ORDERS_TYPE.finished}
              onChange={(e) => setSelectedOrderType(e)}
              placeholder="Selecione um status de pedido"
            >
              <Option key={ORDERS_TYPE.finished}>Finalizado</Option>
              <Option key={ORDERS_TYPE.rejected}>Rejeitado</Option>
            </Select>

            <Search
              className="filter-option"
              placeholder="Pesquisa"
              onChange={(e) => setTypedSearch(e.target.value)}
            />

            <RangePicker
              allowClear
              className="filter-option"
              onChange={(e) => setSelectedRangeDate(e)}
              format="DD/MM/YYYY"
            />

            <Select
              allowClear
              className="filter-option"
              onChange={(e) => setSelectedPaymentType(e)}
              placeholder="Meio de pagamento"
            >
              <Option key={PAYMENT_TYPES.MONEY}>Dinheiro</Option>
              <Option key={PAYMENT_TYPES.CARD}>Cartão</Option>
            </Select>

            <Select
              allowClear
              className="filter-option"
              onChange={(e) => setSelectedPaymentPlace(e)}
              placeholder="Local pagamento"
            >
              <Option key={PAYMENT_PLACES.APP}>
                Pagamento pelo aplicativo
              </Option>
              <Option key={PAYMENT_PLACES.DESTINATION}>
                Pagamento na entrega
              </Option>
            </Select>
          </StyledSalesToolbar>
        }
        body={
          <>
            <StyledTable
              loading={ordersItems?.isLoading}
              rowKey={(record) => record.id}
              bordered
              columns={tableColumns}
              dataSource={filteredData}
              scroll={{ y: yTable, x: xTable }}
              expandable={{
                expandedRowRender,
              }}
              locale={{
                emptyText: "Sem dados",
                triggerDesc: "Clique para ordenar decrescente",
                triggerAsc: "Clique para ordernar crescente",
                cancelSort: "Clique para cancelar a ordenação",
              }}
              pagination={{
                defaultPageSize: 15,
                // hideOnSinglePage: true,
                pageSizeOptions: 15,
                position: ["bottomCenter"],
                total: filteredData.length,
              }}
              mountNode
              summary={(pageData) => generateSummaryRows(pageData)}
            />
          </>
        }
      />
    </>
  );
}
