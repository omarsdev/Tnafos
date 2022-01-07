import React from "react";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { Box, HStack, Heading } from "@chakra-ui/react";
import { AddPurchase } from "./";

export const PuchasesHome = () => {
  const match = useRouteMatch();
  const history = useHistory();
  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        <Box w="full" overflowY="scroll" padding="10">
          <HStack justifyContent="space-between" paddingBottom="5">
            <Heading
              textColor="gray.600"
              fontSize="xx-large"
              fontWeight="lg"
              alignItems="baseline"
            >
              Purchases - Requests
            </Heading>
          </HStack>
        </Box>
      </Route>
      <Route path={`${match.path}/addpurchase`} component={AddPurchase} />
    </Switch>
  );
};
