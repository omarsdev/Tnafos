import React from "react";

import { Box, Flex, VStack } from "@chakra-ui/react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { Company, Vender, Service } from "./screens";
import { Navbar, CardItem, MyList, MainCompany } from "./components";

import { SearchDataContextProvider } from "../../context";

export const SearchLayout = () => {
  let match = useRouteMatch();

  return (
    <SearchDataContextProvider>
      <Box h={"100vh"}>
        <Navbar />
        <Box className="w-full h-96 bg-blue-300" />
        <Box h={"91%"} marginTop="50px">
          <Flex>
            <Box w="70%" px="80px" pb="100px">
              <Switch>
                <Route exact path={`${match.path}`} component={Service} />
                <Route
                  path={`${match.path}/:serviceId/:companyId`}
                  component={Company}
                />
                <Route path={`${match.path}/:serviceId`} component={Vender} />
              </Switch>
            </Box>
            <Box w="30%">
              <Flex>
                <Box w="2px" h="700px" className="bg-CBlack" mt={0} />
                <Box mx="auto" pb="100px">
                  <Switch>
                    <Route exact path={`${match.path}`}>
                      <MyList />
                    </Route>
                    <Route path={`${match.path}/:serviceId/:companyId`}>
                      <MainCompany />
                    </Route>
                    <Route path={`${match.path}/:serviceId`}>
                      <VStack spacing="40px">
                        <CardItem isSelected={true} />
                        <MyList />
                      </VStack>
                    </Route>
                  </Switch>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </SearchDataContextProvider>
  );
};
