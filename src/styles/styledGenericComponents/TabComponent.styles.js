import styled from "styled-components";
import { Tabs } from "antd";

import colors from "../colors";

export const StyledTabs = styled(Tabs)`
  height: 40px;
  width: 100%;

  .ant-tabs-tab {
    border: solid 1px ${colors.colorPrimary} !important;
    display: flex;
    justify-content: center;
    width: 317px;

    &.ant-tabs-tab-active {
      background-color: ${colors.colorSecondary};
    }

    :hover {
      color: ${colors.colorPrimary};
    }
  }

  .ant-tabs-tab-active {
    .ant-tabs-tab-btn {
      color: ${colors.colorPrimary};
    }
  }
`;
