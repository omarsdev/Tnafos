import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import ServiceHome from "./ServiceHome";
import AddService from "./AddService";
import MyService from "./MyService";
import EditService from "./EditService";

const ServiceLayout = () => {
  const match = useRouteMatch();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Switch>
        <Route exact path={`${match.path}`} component={ServiceHome} />
        <Route path={`${match.path}/addservice`} component={AddService} />
        <Route
          path={`${match.path}/:uuid/editservice`}
          component={EditService}
        />
        <Route path={`${match.path}/:uuid`} component={MyService} />
      </Switch>
    </DashboardLayout>
  );
};

export default ServiceLayout;
