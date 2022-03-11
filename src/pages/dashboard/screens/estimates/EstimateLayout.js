import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import Incoming from "./Incoming";
import Outgoing from "./Outgoing";
import EstimateCreate from "./EstimateCreate";

const EstimateLayout = () => {
  const match = useRouteMatch();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Switch>
        <Route path={`${match.path}/incoming`} component={Incoming} />
        <Route path={`${match.path}/outgoing`} component={Outgoing} />
        <Route path={`${match.path}/create`} component={EstimateCreate} />

      </Switch>
    </DashboardLayout>
  );
};

export default EstimateLayout;
