import styled from "styled-components";

import { PROJECT_VARIABLES } from "../../constants/systemConstants";

export const StyledGenericPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px);
  width: 100%;
  background-color: #f3f6f4;

  .toolbar {
    align-items: center;
    display: flex;
    height: 60px;
    padding: 10px 0;
    width: ${PROJECT_VARIABLES.systemWidth};
  }

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: ${PROJECT_VARIABLES.systemWidth};
  }
`;
