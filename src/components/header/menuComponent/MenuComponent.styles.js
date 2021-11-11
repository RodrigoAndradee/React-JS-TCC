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
    margin-right: 2rem;

    &.active {
      border-bottom: solid 3px ${colors.colorWhite};
      font-weight: 700;
    }
  }
`;
