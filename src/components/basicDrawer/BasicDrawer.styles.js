import styled from "styled-components";

import { Drawer } from "antd";

import colors from "../../styles/colors";

export const StyledBasicDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    height: calc(100% - 3.2rem);
    margin-top: 60px;
    width: 30vw !important;

    .ant-drawer-header-no-title {
      .ant-drawer-close {
        right: unset;
        font-size: 18px;
      }
    }

    .ant-drawer-content {
      width: 100%;

      .header {
        font-size: 20px;
        line-height: 20px;
        margin: 30px 0;
      }

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
            margin-right: 10px;
          }

          .button-cancel {
            border-radius: 5px;
          }
        }
      }
    }
  }
`;
