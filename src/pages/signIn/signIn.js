import React, { useReducer, useState } from "react";
import { Button, Form, Input, Space } from "antd";
import axios from "axios";

import { loginConstants, textFieldType } from "../../constants/loginConstants";

import { login } from "../../store/reducers/signIn";
import { signIn } from "../../store/actions/signIn";

import "antd/dist/antd.css";
import "./signIn.scss";

// function handleClick(user, password, dispatchUserInfodata) {
//   // signIn(user, password)(dispatchUserInfodata);
//   axios
//     .post("http://localhost:8081/auth/login", {
//       userName: "123",
//       password,
//     })
//     .then(function (response) {
//       console.log("response: ", response);
//     })
//     .catch(function (error) {
//       console.log("error: ", error);
//     });
// }

const handleClick = () => {
  console.log("Entrou aqui");
  axios
    .post("http://localhost:8081/internal/login", {
      userName: "rodrigo",
      password: "1234",
    })
    .then(function (response) {
      console.log("response: ", response);
    })
    .catch(function (error) {
      console.log("error: ", error);
    });
};

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

  // const handleChange = (e, fieldType) => {
  //   e.prev;
  //   const { value } = e.target;

  //   if (fieldType === passwordLabel) {
  //     setPassword(value);
  //   } else {
  //     setUserName(value);
  //   }
  // };

  const handleSubmit = (e) => {
    console.log("entrou aqui");
    // e.preventDefault();

    console.log(e);
  };

  return (
    <>
      <img
        className="left-side-login"
        src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/02/7-Melhores-Plugins-de-Formulario-de-Contato-WordPress-.png"
        alt=""
      />

      {/* <Space direction="vertical" className="right-side-login"> */}
      <h1>{applicationIntro}</h1>

      <Form onSubmit={handleSubmit} className="right-side-login">
        <Form.Item>
          <Input key="username" placeholder={userName} className="input-text" />
        </Form.Item>
        <Form.Item>
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
