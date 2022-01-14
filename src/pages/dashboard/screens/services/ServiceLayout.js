import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import ServiceHome from "./ServiceHome";
import AddService from "./AddService";
import MyService from "./MyService";

const ServiceLayout = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={ServiceHome} />
      <Route path={`${match.path}/addservice`} component={AddService} />
      <Route path={`${match.path}/:uuid`} component={MyService} />
    </Switch>
  );
};

export default ServiceLayout;
