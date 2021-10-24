import styled from "styled-components";
import { PROJECT_VARIABLES } from "../../constants/uiConstants";

export const StyledGenericPage = styled.div`
  height: calc(100vh - 90px);
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
    width: 100%;
  }
`;
