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
    align-items: center;
    background-color: ${colors.colorWhite};
    border-radius: 10px;
    border: solid 1px ${colors.colorDefaultGreyAntd};
    display: flex;
    height: 10rem;
    justify-content: center;
    width: 20rem;

    .loading-description {
      color: ${colors.colorSteel};
      margin-top: 10px;

      .loading-title {
        font-size: 16px;
      }
    }
  }
`;
