import React, { useReducer } from "react";
import { Button, Form, Input } from "antd";

import { loginConstants } from "../../constants/loginConstants";

import loginImage from "../../assets/loginImage.jpeg";

import { login } from "../../store/reducers/signIn";
import { signIn } from "../../store/actions/signIn";

import "antd/dist/antd.css";
import "./signIn.scss";

export default function Login() {
  const {
    applicationIntro,
    loginButton,
    userName,
    userPassword,
  } = loginConstants;

  const [userInfoData, dispatchUserInfodata] = useReducer(login);
  console.log("userInfoData: ", userInfoData);

  const onFinish = (e) => {
    signIn(e)(dispatchUserInfodata);
  };

  return (
    <>
      <img className="left-side-login" src={loginImage} alt="" />

      <Form className="right-side-login" onFinish={onFinish}>
        <h1 className="welcome-text">{applicationIntro}</h1>
        <Form.Item name="userName">
          <Input key="username" placeholder={userName} className="input-text" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password
            key="password"
            placeholder={userPassword}
            className="input-text"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            // loading={}
            className="login-button"
          >
            {loginButton}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
