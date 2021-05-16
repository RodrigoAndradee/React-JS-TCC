import React from "react";
import { Route, Switch } from "react-router-dom";

import { ROUTES } from "../constants/routesConstants";

import Login from "../pages/signIn/SignIn";
import HomeScreen from "../pages/homeScreen/HomeScreen";
import Orders from "../pages/orders/Orders";
import Sales from "../pages/sales/Sales";
import Products from "../pages/products/Products";
import Storage from "../pages/stock/Stock";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/notFound/Notfound";

function Routes() {
  const { home, orders, products, sales, sign_in, stock, others } = ROUTES;

  return (
    <Switch>
      <Route component={Login} exact={sign_in.exact} path={sign_in.path} />

      <PrivateRoute
        component={HomeScreen}
        exact={home.exact}
        path={home.path}
      />

      <PrivateRoute
        component={Orders}
        exact={orders.exact}
        path={orders.path}
      />

      <PrivateRoute component={Sales} exact={sales.exact} path={sales.path} />

      <PrivateRoute
        component={Products}
        exact={products.exact}
        path={products.path}
      />

      <PrivateRoute component={Storage} exact={stock.exact} path={stock.path} />

      <PrivateRoute
        component={NotFound}
        exact={others.exact}
        path={others.path}
      />
    </Switch>
  );
}

export default Routes;
