import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import Incoming from "./Incoming"
import Outgoing from "./Outgoing"

const InvoicesLayout = () => {
  const match = useRouteMatch();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Switch>
        <Route path={`${match.path}/incoming`} component={Incoming} />
        <Route path={`${match.path}/outgoing`} component={Outgoing} />
      </Switch>
    </DashboardLayout>
  )
}

export default InvoicesLayout