import { Button } from "antd";
import styled from "styled-components";

import colors from "../../../styles/colors";

export const StyledBasicOrders = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 210px);
  width: 100%;

  .ant-card-bordered {
    .ant-card-body {
      .card-title {
        border-bottom: solid 1px ${colors.colorBorderColors};
        margin: 0 10px;
      }
    }
  }

  .orders-list {
    height: 100%;
    margin-top: 10px;
    overflow-x: auto;
    padding: 0 20px;

    .order-list-item {
      align-items: center;
      border-bottom: solid 1px ${colors.colorBorderColors};
      display: flex;
      height: auto;
      justify-content: space-between;
      padding: 8px;

      .action-separator {
        color: ${colors.colorBorderColors};
      }

      &.selected {
        background-color: ${colors.colorSelectedRow};
        border-radius: 5px;
        color: ${colors.colorWhite};
      }

      :hover {
        border-radius: 5px;

        &:not(.selected) {
          background-color: ${colors.colorSecondary};
        }
      }

      .order-list-item-hour {
        align-items: center;
        background-color: ${colors.colorWhite};
        border: solid 1px ${colors.colorBorderColors};
        color: ${colors.colorPrimary};
        display: flex;
        justify-content: space-between;
        padding: 5px;
        width: 75px;
      }
    }
  }

  .orders-details-card {
    .orders-details {
      border-radius: 5px;
      margin-bottom: 10px;
      padding: 10px;

      .orders-detail-address {
        padding: 10px;

        .ant-col {
          display: flex;
          flex-direction: column;
          padding: 10px;
          text-align: left;

          > span {
            color: ${colors.colorBorderColors};
          }
        }
      }
    }
  }
`;

export const StyledPromoteButton = styled(Button)`
  border-radius: 50%;
  height: 50px;
  margin: 5px;
  width: 50px;

  > span {
    color: ${colors.colorBorderColors};
    font-size: 18px;
  }

  &.approve {
    background-color: #00a000;
  }

  &.reject {
    background-color: #ff1919;
  }
`;

export const StyledActionsComponent = styled.div`
  align-items: center;
  color: ${colors.colorBorderColors};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
