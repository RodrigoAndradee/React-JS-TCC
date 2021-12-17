import { Tag } from "antd";
import styled from "styled-components";

import colors from "../../colors";

export const StyledTag = styled(Tag)`
  background-color: ${colors.colorSecondary};
  border: solid 1px ${colors.colorPrimary};
  color: ${colors.colorPrimary};
  font-size: 14px;
`;
