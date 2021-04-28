import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { ROUTES } from "../constants/RoutesConstants";

import Login from "../pages/signIn/SignIn";
import HomeScreen from "../pages/homeScreen/HomeScreen";
import Orders from "../pages/orders/Orders";
import Sales from "../pages/sales/Sales";
import Products from "../pages/products/Products";
import Storage from "../pages/storage/Storage";

function Routes() {
  const {
    others,
    home_screen,
    orders,
    products,
    sales,
    sign_in,
    storage,
  } = ROUTES;

  return (
    <Switch>
      <Route path={sign_in} component={Login} />

      <Route exact path={home_screen} component={HomeScreen} />

      <Route path={orders} component={Orders} />

      <Route path={sales} component={Sales} />

      <Route path={products} component={Products} />

      <Route path={storage} component={Storage} />

      <Route path={others} render={() => <Redirect to={home_screen} />} />
    </Switch>
  );
}

export default Routes;
