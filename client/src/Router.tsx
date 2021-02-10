import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";

const HOME_ROUTE = "/";
const MOVIES_ROUTE = "/movies";

export const Router = () => {
  return (
    <Switch>
      <Route path={MOVIES_ROUTE}>
        <Movies />
      </Route>
      <Route path={HOME_ROUTE}>
        <Home />
      </Route>
    </Switch>
  );
};
