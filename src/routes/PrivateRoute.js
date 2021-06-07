import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { ROUTES } from "../constants/routesConstants";

const PrivateRoute = (props) => {
  const { path } = props;
  const route = path.split("/").pop();

  const isLogged = !!localStorage.getItem("userInfo");

  if (isLogged) {
    const userPermission =
      ROUTES[route] &&
      ROUTES[route].roles.includes(
        JSON.parse(localStorage.getItem("userInfo")).role
      );

    if (userPermission) {
      return <Route {...props} />;
    }
    return <Redirect to={ROUTES.home.path} />;
  }
  return <Redirect to={ROUTES.sign_in.path} />;
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
