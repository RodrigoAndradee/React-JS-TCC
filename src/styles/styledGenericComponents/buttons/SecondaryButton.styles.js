import { Button } from "antd";
import styled from "styled-components";

import colors from "../../colors";

export const StyledSecondaryButton = styled(Button)`
  background-color: transparent;
  border: solid 1px ${colors.colorRedOrange};
  color: ${colors.colorRedOrange};
  font-size: 14px;

  :hover,
  :focus {
    background-color: transparent;
    border-color: ${colors.colorRedOrange};
    color: ${colors.colorRedOrange};
    opacity: 0.5;
  }
`;
