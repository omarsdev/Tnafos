import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import IncomingEstimates from "./IncomingEstimates";
import OutgoingEstimates from "./OutgoingEstimates";
import EstimateHome from "./EstimateHome";
import EstimateCard from "./EstimateCard";
import UpdateStatus from "./UpdateStatus";
import ConvertToInvoice from "./ConvertToInvoice";

const EstimateLayout = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={EstimateHome} />

      <Route path={`${match.path}/incoming/:uuid`} component={EstimateCard} />
      <Route
        path={`${match.path}/incoming/:uuid/convert-to-invoice`}
        component={ConvertToInvoice}
      />
      <Route
        path={`${match.path}/incoming/:uuid/update-status`}
        component={UpdateStatus}
      />

      <Route path={`${match.path}/outgoing/:uuid`} component={EstimateCard} />
      <Route
        path={`${match.path}/outgoing/:uuid/convert-to-invoice`}
        component={ConvertToInvoice}
      />
      <Route
        path={`${match.path}/outgoing/:uuid/update-status`}
        component={UpdateStatus}
      />
      <Route path={`${match.path}/outgoing`} component={OutgoingEstimates} />
      <Route path={`${match.path}/incoming`} component={IncomingEstimates} />
    </Switch>
  );
};

export default EstimateLayout;
