import styled from "styled-components";
import { Table } from "antd";

import colors from "../colors";

export const StyledTable = styled(Table)`
  .ant-spin-nested-loading {
    height: 100%;
    .ant-spin-container {
      .ant-table {
        .ant-table-container {
          .ant-table-body {
            height: 500px !important;
          }
        }
      }
    }
  }
  .ant-spin-container {
    .ant-table-content {
      .ant-table-thead {
        .ant-table-cell {
          background-color: ${colors.colorSecondary};
          border-color: ${colors.colorBorderColors};
        }
      }
    }
    .ant-table {
      .ant-table-container {
        .ant-table-header {
          .ant-table-thead {
            .ant-table-cell {
              background-color: ${colors.colorSecondary};
              border-color: ${colors.colorBorderColors};
            }
          }
        }
        .ant-table-body {
          height: 100% !important;
          .ant-table-tbody {
            .ant-table-row {
              .ant-table-cell {
                border-color: ${colors.colorBorderColors};
              }
            }
          }
          .payment-type-icon {
            align-items: center;
            color: ${colors.colorPrimary};
            display: flex;
            justify-content: flex-end;
          }
        }
      }
    }

    .ant-table-summary {
      .ant-table-summary {
        .ant-table-cell {
          background-color: ${colors.colorSecondary};
          border-color: ${colors.colorBorderColors};
        }
      }
    }

    .ant-table-pagination {
      align-items: center;
      display: flex;
      position: absolute;
      width: 100%;
      z-index: 1000;
    }
  }
`;
