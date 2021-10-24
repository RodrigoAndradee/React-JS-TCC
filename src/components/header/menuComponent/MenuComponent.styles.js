import styled from "styled-components";

import colors from "../../../styles/colors";

export const StyledMenuComponent = styled.div`
  display: flex;
  flex-direction: row;

  .link {
    color: ${colors.colorWhite};
    display: flex;
    font-size: 20px;
    justify-content: center;
    margin-right: 3rem;
    opacity: 0.6;
    position: relative;
    text-decoration: none;

    &.active {
      border-bottom: solid 2px ${colors.colorBlueAntd};
      color: ${colors.colorWhite};
      opacity: 1;
    }
  }

  .secondary-menu {
    color: ${colors.colorBlack};
    display: flex;
    font-size: 20px;
    justify-content: center;
    margin-right: 3rem;
    opacity: 0.6;
    position: relative;
    text-decoration: none;

    &.active {
      color: ${colors.colorBlack};
      opacity: 1;
    }
  }
`;
