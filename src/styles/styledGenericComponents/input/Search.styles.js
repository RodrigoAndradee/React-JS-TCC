import styled from "styled-components";
import { Input } from "antd";

import colors from "../../colors";

const { Search } = Input;

export const StyledInputSearch = styled(Search)`
  .ant-input-group {
    .ant-input-affix-wrapper {
      box-shadow: none;

      :hover,
      :focus {
        border-color: ${colors.colorRedOrange};
      }
    }

    .ant-input-affix-wrapper-focused {
      border-color: ${colors.colorRedOrange};
    }

    .ant-input-group-addon {
      .ant-btn {
        :hover,
        :focus {
          border-color: ${colors.colorRedOrange};
        }
      }
    }
  }
`;
