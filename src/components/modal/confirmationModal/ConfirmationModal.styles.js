import { Modal } from "antd";
import styled from "styled-components";
import colors from "../../../styles/colors";

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 5px;
  }

  .ant-modal-footer {
    .ant-btn {
      border: none;
      box-shadow: none;
      color: ${colors.colorBlueAntd};
    }

    .ant-btn-primary {
      border: none;
      box-shadow: none;
      color: ${colors.colorWhite};
    }
  }
`;
