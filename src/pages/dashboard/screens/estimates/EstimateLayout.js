import React from "react";
import { HStack, Heading, Box, IconButton, Button } from "@chakra-ui/react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import IncomingEstimates from "./IncomingEstimates";
import OutgoingEstimates from "./OutgoingEstimates";
import EstimateHome from "./EstimateHome";
import EstimateCard from "./EstimateCard";

const EstimateLayout = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={EstimateHome} />
      <Route path={`${match.path}/incoming/:uuid`} component={EstimateCard} />
      <Route path={`${match.path}/outgoing/:uuid`} component={EstimateCard} />
      <Route path={`${match.path}/outgoing`} component={OutgoingEstimates} />
      <Route path={`${match.path}/incoming`} component={IncomingEstimates} />
    </Switch>
  );
};

export default EstimateLayout;
