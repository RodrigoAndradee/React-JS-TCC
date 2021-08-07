import React, { useReducer } from "react";
import { useStore } from "react-redux";

import { Button, Form, Input } from "antd";

import { LOGIN_CONSTANTS } from "../../constants/loginConstants";

import loginImage from "../../assets/loginImage.jpeg";

import LoginReducer from "../../store/reducers/SignIn";
import { SignIn } from "../../store/actions/SignIn";

import "antd/dist/antd.css";
import "./SignIn.scss";

function Login() {
  const store = useStore();
  const { APP_INTRO, LOGIN_BUTTON, USER_NAME, USER_PASSWORD } = LOGIN_CONSTANTS;

  const [userInfoData, dispatchUserInfoData] = useReducer(LoginReducer);

  const attemptLogin = (userInfo) => {
    SignIn(userInfo)(dispatchUserInfoData)
      .then(() => {
        window.location = "/home";
      })
      .catch(() => {
        //
      });
  };

  if (userInfoData && userInfoData.status === 200) {
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        id: userInfoData.data.id,
        role: userInfoData.data.role,
        userName: userInfoData.data.userName,
      })
    );

    // window.location = "/home";
  }

  return (
    <>
      <img className="left-side-login" src={loginImage} alt="" />

      <Form className="right-side-login" onFinish={attemptLogin}>
        <h1>{APP_INTRO}</h1>

        <Form.Item name="userName">
          <Input placeholder={USER_NAME} className="input-text" />
        </Form.Item>

        <Form.Item name="password">
          <Input.Password placeholder={USER_PASSWORD} className="input-text" />
        </Form.Item>

        <Button type="primary" htmlType="submit" className="login-button">
          {LOGIN_BUTTON}
        </Button>
      </Form>
    </>
  );
}

export default Login;
