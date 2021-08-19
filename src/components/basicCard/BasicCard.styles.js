import styled from "styled-components";

import { Card } from "antd";

import colors from "../../styles/colors";

export const StyledBasicCard = styled(Card)`
  border-radius: 3px;
  border: 1px solid ${colors.colorPrimary};

  .ant-card-cover {
    align-items: center;
    display: flex;
    justify-content: center;

    > img {
      height: 150px;
      padding: 2px;
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
    border-top: 1px solid ${colors.colorPrimary};

    > li {
      :not(:last-child) {
        border-right: 1px solid ${colors.colorPrimary};
      }
    }
  }
`;
