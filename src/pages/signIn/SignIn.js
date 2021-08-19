import React from "react";
import { Button, Form, Input } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

import PropTypes from "prop-types";

import loginImage from "../../assets/loginImage.jpeg";

import { SignIn } from "../../store/actions/SignIn";

import { LOGIN_CONSTANTS } from "../../constants/loginConstants";

import "antd/dist/antd.css";
import { StyledSignIn } from "./SignIn.styles";

function Login({ getProfile }) {
  const { APP_INTRO, LOGIN_BUTTON, USER_NAME, USER_PASSWORD } = LOGIN_CONSTANTS;

  const attemptLogin = (userInfo) => {
    getProfile(userInfo);
  };

  return (
    <StyledSignIn>
      <img className="left-side-login" src={loginImage} alt="" />

      <Form className="right-side-login" onFinish={attemptLogin}>
        <h1>{APP_INTRO}</h1>

        <Form.Item name="userName" className="input-text">
          <Input
            className="input-text"
            placeholder={USER_NAME}
            prefix={<UserOutlined />}
          />
        </Form.Item>

        <Form.Item name="password" className="input-text">
          <Input.Password placeholder={USER_PASSWORD} className="input-text" />
        </Form.Item>

        <Button className="login-button" htmlType="submit" type="primary">
          {LOGIN_BUTTON}
        </Button>
      </Form>
    </StyledSignIn>
  );
}

Login.propTypes = {
  getProfile: PropTypes.func,
};

Login.defaultProps = {
  getProfile: () => {},
};

function mapDispatchToProps(dispatch) {
  return {
    getProfile: (userInfo) => dispatch(SignIn(userInfo)(dispatch)),
  };
}

const mapStateToProps = (state) => {
  return { userData: state.userData };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
