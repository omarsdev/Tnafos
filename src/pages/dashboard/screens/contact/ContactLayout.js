import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import ContactHome from "./ContactHome";
import ContactView from "./ContactView";
import ContactCreate from "./ContactCreate";
import ContactUpdate from "./ContactUpdate";

const ContactLayout = () => {
  const match = useRouteMatch();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Switch>

        <Route exact path={`${match.path}`} component={ContactHome} />

        <Route exact path={`${match.path}/create`} component={ContactCreate} />

        <Route path={`${match.path}/:uuid/update`} component={ContactUpdate} />
        <Route path={`${match.path}/:uuid`} component={ContactView} />

      </Switch>
    </DashboardLayout>
  )
}

export default ContactLayout