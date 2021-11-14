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
    .ant-card-meta {
      .ant-card-meta-detail {
        .ant-card-meta-description {
          > div {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
          }
        }
      }
    }
  }

  .ant-card-actions {
    border-color: ${colors.colorDarkGray};
    margin: 0 10px;

    .anticon {
      color: ${colors.colorPrimary};
    }

    > li {
      :not(:last-child) {
        border-color: ${colors.colorDarkGray};
      }
    }
  }
`;
