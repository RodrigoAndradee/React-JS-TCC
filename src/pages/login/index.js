import React, { useState } from "react";
// import {useHistory} from 'react-router-dom';

import { Button, Card, TextField } from "@material-ui/core";

import { loginConstants, textFieldType } from "../../constants/loginConstants";

import "./styles.scss";
// import axios from "axios";

function formSubmitTest(user, password) {
  console.log("password: ", password);
  console.log("user: ", user);
}

export default function Login() {
  const {
    applicationIntro,
    loginButton,
    userName,
    userPassword,
  } = loginConstants;
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
      <div className="left-side-login">
        {/* Mudar imagem para imagem que será usada no projeto */}
        <img
          className="login-image"
          src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/02/7-Melhores-Plugins-de-Formulario-de-Contato-WordPress-.png"
          alt=""
        />
      </div>

      <div className="right-side-login">
        <h1 className="welcome-text-header">{applicationIntro}</h1>
        <Card className="login-card">
          <form onSubmit={formSubmitTest(user, password)}>
            <TextField
              label={userName}
              type="text"
              className="text-field"
              onChange={(e) => handleChange(e, emailLabel)}
            />

            <TextField
              classes={{ root: "text-field" }}
              label={userPassword}
              type="password"
              onChange={(e) => handleChange(e, passwordLabel)}
            />

            <Button type="submit" classes={{ root: "button-login" }}>
              {loginButton}
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}
