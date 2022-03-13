import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import LeadSourceHome from "./LeadSourceHome"
import LeadSourceCreate from "./LeadSourceCreate"

const LeadSourceLayout = () => {
  const match = useRouteMatch();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Switch>
        <Route exact path={`${match.path}/`} component={LeadSourceHome} />
        <Route path={`${match.path}/create`} component={LeadSourceCreate} />
        <Route path={`${match.path}/update/:uuid`} component={LeadSourceCreate} />

        {/* <Route path={`${match.path}/outgoing`} component={Outgoing} /> */}
      </Switch>
    </DashboardLayout>
  )
}

export default LeadSourceLayout