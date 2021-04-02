import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import routes from "../constants/routesConstants";

import Login from "../pages/signIn/signIn";

function Routes() {
  const { login, orders, products, sales, signin, storage } = routes;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={login} render={(props) => <Login {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
