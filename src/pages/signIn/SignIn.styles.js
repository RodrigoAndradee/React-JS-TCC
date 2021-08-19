import styled from "styled-components";

export const StyledSignIn = styled.div`
  .left-side-login {
    float: left;
    height: 100vh;
    width: 70%;
  }

  .right-side-login {
    align-items: center;
    display: flex;
    flex-direction: column;
    float: right;
    height: 100vh;
    justify-content: center;
    padding: 0 50px 0 50px;
    width: 30%;

    .input-text {
      width: 100%;
    }

    .login-button {
      font-size: 20px;
      height: auto;
      width: 70%;
    }
  }
`;
