/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";

import { Button, Form, Input } from "antd";

import { LOGIN_CONSTANTS } from "../../constants/loginConstants";

import loginImage from "../../assets/loginImage.jpeg";

import { SignIn } from "../../store/actions/SignIn";

import "antd/dist/antd.css";
import "./SignIn.scss";

function Login({ getProfile, userData }) {
  const history = useHistory();
  const { APP_INTRO, LOGIN_BUTTON, USER_NAME, USER_PASSWORD } = LOGIN_CONSTANTS;

  const attemptLogin = (userInfo) => {
    getProfile(userInfo);
  };

  if (userData.id) {
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        id: userData.id,
        role: userData.role,
      })
    );

    history.push("/home");
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

function mapDispatchToProps(dispatch) {
  return {
    getProfile: (userInfo) => dispatch(SignIn(userInfo)(dispatch)),
  };
}

const mapStateToProps = (state) => {
  return { userData: state.userData };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
