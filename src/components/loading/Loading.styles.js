import styled from "styled-components";

import colors from "../../styles/colors";

export const StyledLoading = styled.div`
  align-items: center;
  background: ${colors.colorLoadingBackground};
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 1000;

  .loading-content {
    position: relative;
    align-items: center;
    background-color: ${colors.colorWhite};
    border-radius: 10px;
    display: flex;
    height: 8rem;
    justify-content: center;
    width: 8rem;
    border-radius: 50%;

    .anticon {
      height: 8rem;
      position: absolute;
      width: 8rem;
      color: ${colors.colorRedOrange};

      left: auto;
      bottom: auto;

      > svg {
        width: 8rem;
        height: 8rem;
      }
    }
  }

  .loading-description {
    /* background-color: greenyellow; */
    color: ${colors.colorPrimary};
    font-size: 14px;
  }
`;
