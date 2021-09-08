import { Button } from "antd";
import styled from "styled-components";

import colors from "../../styles/colors";

export const StyledBasicOrders = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 110px);
  width: 100%;

  .orders-list-card {
    .orders-list {
      height: 100%;
      margin-top: 10px;
      overflow-x: auto;
      padding: 0 20px;

      .order-list-item {
        align-items: center;
        border-bottom: solid 1px ${colors.colorDefaultGreyAntd};
        display: flex;
        display: flex;
        flex-direction: row;
        height: auto;
        justify-content: space-between;
        padding: 10px;

        .action-separator {
          color: ${colors.colorDefaultGreyAntd};
        }

        &.selected {
          background-color: ${colors.colorSelected};
          border-radius: 5px;
        }

        :hover {
          border-radius: 5px;

          &:not(.selected) {
            background-color: ${colors.colorHover};
          }
        }

        .order-list-item-hour {
          align-items: center;
          background-color: ${colors.colorWhite};
          border: solid 1px ${colors.colorDefaultGreyAntd};
          color: ${colors.colorPrimary};
          display: flex;
          justify-content: space-between;
          padding: 5px;
          width: 75px;
        }
      }
    }
  }

  .orders-details-card {
    .orders-details {
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 10px;

      .orders-detail-address {
        padding: 10px;

        .ant-col {
          display: flex;
          flex-direction: column;
          padding: 10px;
          text-align: left;
        }

        .detail-title {
          color: ${colors.colorSteel};
          font-weight: 600;
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
    color: ${colors.colorDefaultGreyAntd};
    font-size: 18px;
  }

  :hover {
    &.approve {
      background-color: #00a000;
    }

    &.reject {
      background-color: #ff1919;
    }
  }
`;

export const StyledActionsComponent = styled.div`
  align-items: center;
  color: ${colors.colorDefaultGreyAntd};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
