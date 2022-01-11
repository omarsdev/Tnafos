import React from "react";
import { HStack, Heading, Box, IconButton, Button } from "@chakra-ui/react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import IncomingEstimates from "./IncomingEstimates";
import OutgoingEstimates from "./OutgoingEstimates";
import EstimateHome from "./EstimateHome";

const EstimateLayout = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={EstimateHome} />
      <Route path={`${match.path}/incoming`} component={IncomingEstimates} />
      <Route path={`${match.path}/outgoing`} component={OutgoingEstimates} />
    </Switch>
  );
};

export default EstimateLayout;
