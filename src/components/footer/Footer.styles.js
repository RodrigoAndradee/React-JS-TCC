import styled from "styled-components";

import colors from "../../styles/colors";

export const StyledFooterComponent = styled.div`
  align-items: center;
  background-color: ${colors.colorWhite};
  border-top: 1px solid ${colors.colorPrimary};
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  padding: 10px;
`;
