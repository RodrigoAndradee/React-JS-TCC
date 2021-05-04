import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import isNil from "lodash.isnil";

import { Button, Form, Input } from "antd";

import { LOGIN_CONSTANTS } from "../../constants/loginConstants";

import loginImage from "../../assets/loginImage.jpeg";

import { LoginReducer } from "../../store/reducers/SignIn";
import { SignIn } from "../../store/actions/SignIn";

import "antd/dist/antd.css";
import "./SignIn.scss";

export default function Login() {
  const [userInfoData, dispatchUserInfodata] = useReducer(LoginReducer);
  const history = useHistory();

  const { APP_INTRO, LOGIN_BUTTON, USER_NAME, USER_PASSWORD } = LOGIN_CONSTANTS;

  const tryLogin = (userInfo) => {
    SignIn(userInfo)(dispatchUserInfodata);
  };

  if (!isNil(userInfoData)) {
    if (userInfoData.status === 200) {
      history.push("/");
    } else {
      // alert("ERRO");
    }
  }

  return (
    <>
      <img className="left-side-login" src={loginImage} alt="" />

      <Form className="right-side-login" onFinish={tryLogin}>
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
