import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import isEmpty from "lodash.isempty";
import PropTypes from "prop-types";

import HomeScreen from "../pages/homeScreen/HomeScreen";
import Login from "../pages/signIn/SignIn";
import Orders from "../pages/orders/Orders";
import Products from "../pages/products/Products";
import Sales from "../pages/sales/Sales";
import Storage from "../pages/stock/Stock";

import { ROUTES_CONSTANTS } from "../constants/routesConstants";
import { userDataShape } from "../types/UserDataPropTypes";

function Routes({ canAccessModule, userData }) {
  const getPageByNameAndRole = (pageName, roles) => {
    const canAccess = roles.includes(userData?.role);

    if (canAccess) {
      switch (pageName) {
        case "home":
          return <HomeScreen />;
        case "products":
          return <Products />;
        case "orders":
          return <Orders />;
        case "sales":
          return <Sales />;
        case "stock":
          return <Storage />;

        default:
          return null;
      }
    }
    return null;
  };

  const redirectToCorrectPage = () => {
    if (canAccessModule) {
      switch (userData?.role) {
        case "admin":
          return <Redirect to="/home" />;
        case "stock":
          return <Redirect to="/stock" />;
        case "separator":
          return <Redirect to="/orders" />;
        default:
          return null;
      }
    }

    return <Redirect to="/login" />;
  };

  return (
    <Switch>
      {!canAccessModule && (
        <Route>
          <Login />
        </Route>
      )}

      {canAccessModule &&
        ROUTES_CONSTANTS.map((route) => {
          return (
            <Route path={route.path} exact={route.exact}>
              {getPageByNameAndRole(route.pageName, route.roles)}
            </Route>
          );
        })}

      <Route path="*">{redirectToCorrectPage()}</Route>
    </Switch>
  );
}

Routes.propTypes = {
  canAccessModule: PropTypes.bool,
  userData: userDataShape,
};

Routes.defaultProps = {
  canAccessModule: false,
  userData: {},
};

function mapStateToProps(state) {
  if (!isEmpty(state.userData)) {
    return { canAccessModule: true, userData: state.userData };
  }
  return { canAccessModule: false };
}

export default connect(mapStateToProps)(Routes);
