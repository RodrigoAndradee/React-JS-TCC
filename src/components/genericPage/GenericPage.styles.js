import styled from "styled-components";

export const StyledGenericPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  .header {
    height: 60px;
    width: 100%;
  }

  .footer {
    bottom: 0;
    height: 30px;
    position: absolute;
    width: 100%;
  }

  .generic-page-body {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 1280px;

    .toolbar {
      align-items: center;
      display: flex;
      height: 60px;
      width: 100%;
    }

    .content {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 86vh;
      width: 100%;
    }
  }
`;
