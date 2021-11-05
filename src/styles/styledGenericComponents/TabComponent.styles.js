import styled from "styled-components";
import { Tabs } from "antd";

import colors from "../colors";

export const StyledTabs = styled(Tabs)`
  height: 40px;

  .ant-tabs-tab {
    border: solid 1px ${colors.colorRedOrange} !important;

    display: flex;
    justify-content: center;
    width: 312px;

    &.ant-tabs-tab-active {
      background-color: ${colors.colorLighterOrange};
    }

    :hover {
      color: ${colors.colorRedOrange};
    }
  }

  .ant-tabs-tab-active {
    .ant-tabs-tab-btn {
      color: ${colors.colorRedOrange};
    }
  }
`;
