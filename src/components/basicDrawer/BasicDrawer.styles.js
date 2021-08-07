import styled from "styled-components";

import { Drawer } from "antd";

import colors from "../../styles/colors";

export const StyledBasicDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    background-color: green;
    height: calc(100% - 3.2rem);
    margin-top: 60px;
    width: 30vw !important;

    .ant-drawer-header {
      .ant-drawer-close {
        font-size: 18px;
        left: 0;
      }

      .ant-drawer-title {
        color: ${colors.colorPrimary};
        font-size: 20px;
        margin: 2px 0 0 22px;
      }
    }

    .ant-drawer-content {
      overflow: hidden;
      width: 100%;

      .footer {
        align-items: center;
        border-top: 1px solid ${colors.colorDefaultGreyAntd};
        bottom: 0;
        display: flex;
        flex-direction: row;
        height: 50px;
        margin-bottom: 10px;
        padding: 10px;
        position: absolute;
        right: 0;
        width: 100%;

        .buttons {
          position: fixed;
          right: 10px;

          .button-submit {
            border-radius: 5px;
            font-size: 16px;
            margin-right: 10px;
          }

          .button-cancel {
            border-radius: 5px;
            color: ${colors.colorPrimary};
            font-size: 16px;
          }
        }
      }
    }
  }
`;
