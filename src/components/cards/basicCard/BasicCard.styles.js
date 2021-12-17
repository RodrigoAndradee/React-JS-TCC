import styled from "styled-components";
import { Card } from "antd";

import colors from "../../../styles/colors";

export const StyledBasicCard = styled(Card)`
  border-radius: 3px;
  width: 200px;

  .ant-card-cover {
    align-items: center;
    display: flex;
    justify-content: center;

    > img {
      height: 190px;
      padding: 2px;
      width: 200px;
    }
  }

  .ant-card-body {
    padding: 12px;
    .ant-card-meta {
      .ant-card-meta-detail {
        .ant-card-meta-description {
          .card-description {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;

            .expired-warning {
              margin-left: 10px;
              font-size: 16px;
            }

            .expired-warning {
              margin-left: 10px;
              font-size: 16px;
            }

            &.expired-product {
              .expired-warning {
                color: ${colors.colorWarningRed};
              }
            }

            &.almost-expired-product {
              .expired-warning {
                color: ${colors.colorWarningYellow};
              }
            }
          }
        }
      }
    }
  }

  .ant-card-actions {
    border-color: ${colors.colorBorderColors};
    margin: 0 10px;

    .anticon {
      color: ${colors.colorBorderColors};
    }

    > li {
      :not(:last-child) {
        border-color: ${colors.colorBorderColors};
      }
    }
  }
`;
