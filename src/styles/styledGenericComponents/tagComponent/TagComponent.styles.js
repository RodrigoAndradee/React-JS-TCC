import { Tag } from "antd";
import styled from "styled-components";

import colors from "../../colors";

export const StyledTag = styled(Tag)`
  background-color: ${colors.colorLighterOrange};
  border: solid 1px ${colors.colorRedOrange};
  color: ${colors.colorRedOrange};
  font-size: 14px;
`;
