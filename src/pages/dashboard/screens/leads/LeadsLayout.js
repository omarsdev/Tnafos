import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import LeadsCreate from "./LeadsCreate"

const LeadsLayout = () => {
  const match = useRouteMatch();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Switch>
        <Route path={`${match.path}/create`} component={LeadsCreate} />

        {/* <Route path={`${match.path}/outgoing`} component={Outgoing} /> */}
      </Switch>
    </DashboardLayout>
  )
}

export default LeadsLayout