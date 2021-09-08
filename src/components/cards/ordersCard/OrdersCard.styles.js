import { Card } from "antd";
import styled from "styled-components";

import colors from "../../../styles/colors";

export const StyledBasicOrdersCard = styled(Card)`
  border-radius: 10px;
  height: 100%;
  width: ${(props) => props.width};

  &:not(.last-child) {
    margin-right: 20px;
  }

  .ant-card-body {
    padding: 0;
    height: 100%;

    .card-title {
      border-bottom: solid 1px ${colors.colorDefaultGreyAntd};
      font-size: 20px;
      font-weight: 400;
      height: 50px;
      padding: 10px;
    }

    .card-content {
      height: calc(100% - 50px);
      padding: 10px;

      &.has-footer {
        height: calc(100% - 110px);
      }
    }

    .footer {
      align-items: center;
      border-top: solid 1px ${colors.colorDefaultGreyAntd};
      display: flex;
      height: 60px;
      justify-content: center;
      padding: 10px;
    }
  }
`;
