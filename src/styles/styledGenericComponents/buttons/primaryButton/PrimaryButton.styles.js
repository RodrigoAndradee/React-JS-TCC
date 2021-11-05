import { Button } from "antd";
import styled from "styled-components";

import colors from "../../../colors";

export const StyledPrimaryButton = styled(Button)`
  background-color: ${colors.colorRedOrange};
  border: solid 1px ${colors.colorRedOrange};
  color: ${colors.colorWhite};
  font-size: 14px;

  :hover,
  :focus {
    background-color: ${colors.colorRedOrange};
    border-color: ${colors.colorRedOrange};
    color: ${colors.colorWhite};
    opacity: 0.6;
  }
`;
