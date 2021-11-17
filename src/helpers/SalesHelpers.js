/* eslint-disable import/no-cycle */
import React from "react";
import { Table } from "antd";

import { expandedColumns } from "../pages/sales/SalesTableColumnDefinitions";

import {
  DEFAULT_CELL_ALIGNMENT,
  PAYMENT_PLACES,
  PAYMENT_TYPES,
  SALES_DATA_INDEXES,
} from "../constants/salesConstants";
import { StyledTable } from "../styles/styledGenericComponents/TableComponent.styles";

const {
  CREATED_DATE,
  ORDER_NUMBER,
  SUBTOTAL_VALUE,
  TOTAL_VALUE,
} = SALES_DATA_INDEXES;

export const getCalculatedTableX = (columns) => {
  let totalWidthSum = 0;

  columns.forEach((column) => {
    totalWidthSum += column.width;
  });

  return totalWidthSum;
};

export const getSortedData = (firstValue, secondValue, dataIndex) => {
  if (
    dataIndex === ORDER_NUMBER ||
    dataIndex === SUBTOTAL_VALUE ||
    dataIndex === TOTAL_VALUE
  ) {
    return firstValue[dataIndex] + 0 - (secondValue[dataIndex] + 0);
  }

  if (dataIndex === CREATED_DATE) {
    return firstValue[dataIndex] - secondValue[dataIndex];
  }

  return null;
};

export const generateSummaryRows = (pageData) => {
  let totalPrice = 0;
  let subTotalPrice = 0;
  let taxSum = 0;

  pageData.forEach((item) => {
    totalPrice += item.totalPrice;
    subTotalPrice += item.subTotalPrice;
    taxSum += item.tax;
  });

  totalPrice = Math.round(totalPrice * 100) / 100;
  subTotalPrice = Math.round(subTotalPrice * 100) / 100;
  taxSum = Math.round(taxSum * 100) / 100;

  return (
    <Table.Summary fixed>
      <Table.Summary.Row>
        <Table.Summary.Cell align={DEFAULT_CELL_ALIGNMENT} index={0} />

        <Table.Summary.Cell align={DEFAULT_CELL_ALIGNMENT} index={1}>
          Total
        </Table.Summary.Cell>

        <Table.Summary.Cell align={DEFAULT_CELL_ALIGNMENT} index={2} />

        <Table.Summary.Cell align={DEFAULT_CELL_ALIGNMENT} />

        <Table.Summary.Cell align={DEFAULT_CELL_ALIGNMENT} />

        <Table.Summary.Cell align={DEFAULT_CELL_ALIGNMENT} />

        <Table.Summary.Cell align={DEFAULT_CELL_ALIGNMENT}>
          {taxSum}
        </Table.Summary.Cell>

        <Table.Summary.Cell align={DEFAULT_CELL_ALIGNMENT}>
          {subTotalPrice}
        </Table.Summary.Cell>

        <Table.Summary.Cell align={DEFAULT_CELL_ALIGNMENT}>
          {totalPrice}
        </Table.Summary.Cell>

        <Table.Summary.Cell align={DEFAULT_CELL_ALIGNMENT} />

        <Table.Summary.Cell align={DEFAULT_CELL_ALIGNMENT} />
      </Table.Summary.Row>
    </Table.Summary>
  );
};

export const expandedRowRender = (tableData) => {
  const { products } = tableData;
  const expandedRowColumns = expandedColumns();

  return (
    <StyledTable
      columns={expandedRowColumns}
      dataSource={products}
      pagination={false}
      bordered
    />
  );
};

export const handleFilterData = ({
  selectedPaymentPlace,
  selectedPaymentType,
  selectedRangeDate = [],
  typedSearch,
  unfilteredData = [],
}) => {
  let enhancedData = unfilteredData;

  if (typedSearch) {
    const typedSearchLowerCase = typedSearch.toString().toLowerCase();
    enhancedData = enhancedData.filter(
      (item) =>
        String(item?.orderNumber)?.includes(typedSearchLowerCase) ||
        String(item?.totalPrice)?.includes(typedSearchLowerCase) ||
        String(item?.subTotalPrice)?.includes(typedSearchLowerCase) ||
        item?.email?.includes(typedSearchLowerCase) ||
        item?.rejectJustification?.toLowerCase().includes(typedSearchLowerCase)
    );
  }

  if (selectedRangeDate) {
    const [startDate, endDate] = selectedRangeDate;

    if (startDate && endDate) {
      const formattedStartDate = startDate.format("YYYY-MM-DD");
      const formattedEndDate = endDate.format("YYYY-MM-DD");

      enhancedData = enhancedData.filter(
        (item) =>
          item.createdDate >= formattedStartDate &&
          item.createdDate <= formattedEndDate
      );
    }
  }

  if (selectedPaymentType) {
    enhancedData = enhancedData.filter((item) => {
      const { cardPaymentRequest, homePaymentRequest } = item.paymentType;

      if (cardPaymentRequest && selectedPaymentType === PAYMENT_TYPES.CARD) {
        return true;
      }

      if (homePaymentRequest && homePaymentRequest === selectedPaymentType) {
        return true;
      }

      return false;
    });
  }

  if (selectedPaymentPlace) {
    enhancedData = enhancedData.filter((item) => {
      const { cardPaymentRequest, homePaymentRequest } = item.paymentType;

      if (cardPaymentRequest && selectedPaymentPlace === PAYMENT_PLACES.APP) {
        return true;
      }

      if (
        homePaymentRequest &&
        selectedPaymentPlace === PAYMENT_PLACES.DESTINATION
      ) {
        return true;
      }

      return false;
    });
  }

  return enhancedData;
};
