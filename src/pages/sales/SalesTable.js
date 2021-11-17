import React from "react";
import PropTypes from "prop-types";

// Components
import SalesTableColumnDefinitions from "./SalesTableColumnDefinitions";

// Helpers
import {
  expandedRowRender,
  generateSummaryRows,
  getCalculatedTableX,
} from "../../helpers/SalesHelpers";

// Styles
import { StyledTable } from "../../styles/styledGenericComponents/TableComponent.styles";

export default function SalesTable({
  filteredData,
  hasJustificationField,
  isLoading,
}) {
  const tableColumns = SalesTableColumnDefinitions(hasJustificationField);
  const xTable = getCalculatedTableX(tableColumns);
  const yTable = 550;

  return (
    <StyledTable
      loading={isLoading}
      rowKey={(record) => record.id}
      bordered
      columns={tableColumns}
      dataSource={filteredData}
      scroll={{ y: yTable, x: xTable }}
      expandable={{
        expandedRowRender,
        fixed: true,
      }}
      locale={{
        emptyText: "Sem dados",
        triggerDesc: "Clique para ordenar decrescente",
        triggerAsc: "Clique para ordernar crescente",
        cancelSort: "Clique para cancelar a ordenação",
      }}
      pagination={{
        defaultPageSize: 15,
        pageSizeOptions: 15,
        position: ["bottomCenter"],
        total: filteredData.length,
      }}
      mountNode
      summary={(pageData) => generateSummaryRows(pageData)}
    />
  );
}

SalesTable.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.shape({})),
  hasJustificationField: PropTypes.bool,
  isLoading: PropTypes.bool,
};

SalesTable.defaultProps = {
  filteredData: [],
  hasJustificationField: false,
  isLoading: false,
};
