import styled from "styled-components";
import { DatePicker } from "antd";

import colors from "../../colors";

export const StyledDatePicker = styled(DatePicker)`
  box-shadow: none;

  :hover,
  :focus,
  &.ant-picker-focused {
    border-color: ${colors.colorRedOrange};
  }
`;
