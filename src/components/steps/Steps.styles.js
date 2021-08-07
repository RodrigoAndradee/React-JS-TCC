import styled from "styled-components";

import { Steps } from "antd";

import colors from "../../styles/colors";

export const StyledSteps = styled(Steps)`
  .ant-steps-item-container {
    .ant-steps-item-icon {
      background-color: transparent;
      border: 1px solid ${colors.colorPrimary};

      .ant-steps-icon {
        color: ${colors.colorPrimary};
      }
    }
  }
`;
