import styled from "styled-components";
import { PROJECT_VARIABLES } from "../../constants/uiConstants";

export const StyledGenericPage = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;

  .header {
    height: 60px;
    width: 100%;
  }

  .footer {
    bottom: 0;
    left: 0;
    height: 30px;
    position: absolute;
    width: 100%;
  }

  .generic-page-body {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;

    .toolbar {
      align-items: center;
      display: flex;
      height: 60px;
      width: ${PROJECT_VARIABLES.systemWidth};
    }

    .content {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: calc(100vh - 30px);
      width: 100%;
    }
  }
`;
