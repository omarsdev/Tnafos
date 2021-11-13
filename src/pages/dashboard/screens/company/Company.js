import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { CompanyHome, CreateCompany } from "./";

export const Company = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={CompanyHome} />
      <Route path={`${match.path}/create`} component={CreateCompany} />
    </Switch>
  );
};
