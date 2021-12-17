import React from "react";
import { Button, Form, Input } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

// Assets
import * as constants from "../../assets/constants-file.json";
import loginImage from "../../assets/loginImage.jpeg";
import BarbecueIcon from "../../assets/barbecueIcon.ico";

// Reducers
import { SignIn } from "../../store/actions/SignIn";

// Styles
import { StyledSignIn } from "./SignIn.styles";

const { SYSTEM_CONSTANTS } = constants.default;

function Login({ getProfile }) {
  const {
    app_intro,
    login_button,
    user_name,
    user_password,
  } = SYSTEM_CONSTANTS.LOGIN_CONSTANTS;

  const attemptLogin = (userInfo) => {
    getProfile(userInfo);
  };

  return (
    <StyledSignIn>
      <img className="left-side-login" src={loginImage} alt="" />

      <Form className="right-side-login" onFinish={attemptLogin}>
        <img src={BarbecueIcon} alt="" className="barbecue-icon" />

        <h1>{app_intro}</h1>

        <Form.Item name="userName" className="input-text">
          <Input
            className="input-text"
            placeholder={user_name}
            prefix={<UserOutlined />}
          />
        </Form.Item>

        <Form.Item name="password" className="input-text">
          <Input.Password placeholder={user_password} className="input-text" />
        </Form.Item>

        <Button className="login-button" htmlType type="primary">
          {login_button}
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
