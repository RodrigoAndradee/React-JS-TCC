import styled from "styled-components";

export const StyledSignIn = styled.div`
  height: calc(100vh - 90px);

  .left-side-login {
    float: left;
    height: 100%;
    width: 70%;
  }

  .right-side-login {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0 50px 0 50px;
    width: 30%;

    .input-text {
      width: 100%;
    }

    .login-button {
      font-size: 18px;
      height: auto;
      width: 50%;
    }
  }
`;
