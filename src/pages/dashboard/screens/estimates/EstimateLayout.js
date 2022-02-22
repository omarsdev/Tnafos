import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import Incoming from "./Incoming";
import Outgoing from "./Outgoing";
import EstimateHome from "./EstimateHome";
// import EstimateCard from "./EstimateCard";
// import UpdateStatus from "./UpdateStatus";
// import ConvertToInvoice from "./ConvertToInvoice";
// import AddEstimate from "./AddEstimate";

const EstimateLayout = () => {
  const match = useRouteMatch();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Switch>
        {/* <Route exact path={`${match.path}`} component={EstimateHome} /> */}

        {/* <Route
          path={`${match.path}/incoming/:uuid/convert-to-invoice`}
          component={ConvertToInvoice}
        />
        <Route
          path={`${match.path}/incoming/:uuid/update-status`}
          component={UpdateStatus}
        /> */}
        {/* <Route path={`${match.path}/incoming/:uuid`} component={EstimateCard} /> */}
        <Route path={`${match.path}/incoming`} component={Incoming} />

        {/* <Route
          path={`${match.path}/outgoing/:uuid/update-status`}
          component={UpdateStatus}
        />
        <Route
          path={`${match.path}/outgoing/:uuid/convert-to-invoice`}
          component={ConvertToInvoice}
        />
        <Route path={`${match.path}/outgoing/:uuid`} component={EstimateCard} /> */}

        <Route path={`${match.path}/outgoing`} component={Outgoing} />

        {/* <Route path={`${match.path}/addestimate`} component={AddEstimate} /> */}
      </Switch>
    </DashboardLayout>
  );
};

export default EstimateLayout;
