import React, { useReducer, useState } from "react";
import { Button, Input, Space } from "antd";
import axios from "axios";

import { loginConstants, textFieldType } from "../../constants/loginConstants";

import { login } from "../../store/reducers/signIn";
import { signIn } from "../../store/actions/signIn";

import "antd/dist/antd.css";
import "./signIn.scss";

function handleClick(user, password, dispatchUserInfodata) {
  // signIn(user, password)(dispatchUserInfodata);
  axios
    .post("http://192.168.15.200:8081/auth/login", {
      userName: "123",
      password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default function Login() {
  const {
    applicationIntro,
    loginButton,
    userName,
    userPassword,
  } = loginConstants;

  const [userInfoData, dispatchUserInfodata] = useReducer(login);
  console.log("userInfoData: ", userInfoData);

  const { password: passwordLabel, email: emailLabel } = textFieldType;

  const [user, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, fieldType) => {
    const { value } = e.target;

    if (fieldType === passwordLabel) {
      setPassword(value);
    } else {
      setUserName(value);
    }
  };

  return (
    <>
      <img
        className="left-side-login"
        src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/02/7-Melhores-Plugins-de-Formulario-de-Contato-WordPress-.png"
        alt=""
      />

      <Space direction="vertical" className="right-side-login">
        <h1>{applicationIntro}</h1>

        <Input
          placeholder={userName}
          className="input-text"
          onChange={(e) => {
            handleChange(e, emailLabel);
          }}
        />

        <Input.Password
          className="input-text"
          placeholder={userPassword}
          onChange={(e) => {
            handleChange(e, passwordLabel);
          }}
        />

        <Button
          type="default"
          className="login-button"
          onClick={handleClick(user, password, dispatchUserInfodata)}
        >
          {loginButton}
        </Button>
      </Space>
    </>
  );
}
