import React from "react";
import { useRouteMatch, useHistory, Route, Switch } from "react-router-dom";
import { Box, HStack, Heading } from "@chakra-ui/react";

const PurchasesHome = () => {
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
            <Link to={`${match.url}/addpayment`}>
              <IconButton
                as={Button}
                colorScheme="yellow"
                size="lg"
                icon={<AiOutlinePlus />}
                rounded="full"
              ></IconButton>
            </Link>
          </HStack>
        </Box>
      </Route>
    </Switch>
  );
};

export default PurchasesHome;
