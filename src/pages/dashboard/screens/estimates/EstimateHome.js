import React from "react";
import { HStack, Heading, Box, IconButton, Button } from "@chakra-ui/react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import {
  AddEstimate,
  EstimateCard,
  IncomingEstimates,
  OutgoingEstimates,
} from "./";

export const EstimateHome = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        <HStack w="full" spacing={"900px"} py="5">
          <Heading
            textColor="gray.600"
            fontWeight="medium"
            fontSize="xx-large"
            fontFamily="inhirit"
            alignItems="baseline"
            ml="5"
          >
            Estimates
          </Heading>
        </HStack>
      </Route>
      <Route path={`${match.path}/incoming`} component={IncomingEstimates} />
      <Route path={`${match.path}/outgoing`} component={OutgoingEstimates} />
    </Switch>
  );
};
