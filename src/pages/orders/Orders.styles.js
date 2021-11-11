import styled from "styled-components";

import colors from "../../styles/colors";

export const StyledOrders = styled.div`
  .orders-body {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 1280px;

    /* .menu {
      background-color: ${colors.colorWhite};
      border-right: none;
      color: ${colors.colorWhite};
      height: calc(100vh - 90px);
      width: 15rem;
      font-size: 16px;

      .ant-menu-item-group {
        .ant-menu-item-group-title {
          padding: 0;
        }
      }

      .ant-menu-item {
        color: ${colors.colorPrimary};
      }

      .ant-menu-item-selected {
        color: white;
        background-color: ${colors.colorRedOrange};
      }
    } */

    .page-content {
      padding: 10px 0;
      width: 100%;

      .context-bar {
        align-items: center;
        display: flex;
        height: 60px;

        .search {
          margin-right: 8px;
          width: 30rem;

          .ant-input-grouper {
            .ant-input-rapper {
              border-color: ${colors.colorPrimary} !important;
            }
          }
        }

        .date-picker {
          width: 20rem;
        }

        .count-down {
          align-items: center;
          border: solid 1px ${colors.colorDefaultGreyAntd};
          display: flex;
          justify-content: space-between;
          margin-left: auto;
          padding: 5px;
          width: 60px;

          .icon {
            color: ${colors.colorRedOrange};
          }
        }
      }
    }
  }
`;
