import styled from "styled-components";

import colors from "../../styles/colors";

export const StyledOrders = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const StyledOrdersBody = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  .secondary-menu {
    .menu {
      background-color: ${colors.colorPrimary};
      border-right: none;
      color: ${colors.colorWhite};
      height: 100%;
      width: 180px;
    }
  }

  .page-content {
    background-color: ${colors.colorDefaultGreyAntd};
    height: 100%;
    padding: 10px;
    width: 100%;

    .context-bar {
      display: flex;
      justify-content: right;
      padding: 10px;
    }
  }
`;
