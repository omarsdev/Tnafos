import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import CustomerHome from "./CustomerHome"
import CustomerView from "./CustomerView"
import CustomerMedia from "./CustomerMedia"
import CustomerContacts from "./CustomerContacts"
import CustomerCreate from "./CustomerCreate"
import CustomerUpdate from "./CustomerUpdate"

const CustomerLayout = () => {
  const match = useRouteMatch();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Switch>
        {/* /customers */}
        {/* /customers/:uuid */}
        {/* /customers/:uuid/media */}
        {/* /customers/:uuid/contacts */}
        {/* /customers/create */}
        {/* /customers/:uuid/update */}

        <Route exact path={`${match.path}`} component={CustomerHome} />

        <Route exact path={`${match.path}/create`} component={CustomerCreate} />

        <Route exact path={`${match.path}/:uuid/media`} component={CustomerMedia} />
        <Route exact path={`${match.path}/:uuid/contacts`} component={CustomerContacts} />
        <Route exact path={`${match.path}/:uuid/update`} component={CustomerUpdate} />
        <Route exact path={`${match.path}/:uuid`} component={CustomerView} />

      </Switch>
    </DashboardLayout>
  )
}

export default CustomerLayout