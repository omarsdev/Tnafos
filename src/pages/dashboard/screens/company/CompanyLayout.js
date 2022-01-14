import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import CreateCompany from "./CreateCompany";
import CompanyHome from "./CompanyHome";

const CompanyLayout = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/create`} component={CreateCompany} />
      <Route path={`${match.path}`} component={CompanyHome} />
    </Switch>
  );
};

export default CompanyLayout;
