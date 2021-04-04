import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routes from "../constants/routesConstants";

import Login from "../pages/signIn/signIn";
import HomeScreen from "../pages/homeScreen/homeScreen";
import Orders from "../pages/orders/orders";
import Sales from "../pages/sales/sales";
import Products from "../pages/products/products";
import Storage from "../pages/storage/storage";

function Routes() {
  const {
    others,
    home_screen,
    orders,
    products,
    sales,
    sign_in,
    storage,
  } = routes;
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
