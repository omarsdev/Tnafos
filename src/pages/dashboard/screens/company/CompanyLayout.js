import React from "react";
import { useRouteMatch, useHistory, Switch, Route } from "react-router-dom";
import { CreateCompany } from "./CreateCompany";
import { CompanyHome } from "./CompanyHome";
import { PrivateRoute } from "pages/dashboard/components/PrivateRoute";
export const CompanyLayout = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/create`} component={CreateCompany} />
      <PrivateRoute path={`${match.path}`} component={CompanyHome} />
    </Switch>
  );
};
