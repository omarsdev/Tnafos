import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ServiceHome, AddService, MyService } from "./";

export const Service = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={ServiceHome} />
      <Route path={`${match.path}/addservice`} component={AddService} />
      <Route path={`${match.path}/:uuid`} component={MyService} />
    </Switch>
  );
};
