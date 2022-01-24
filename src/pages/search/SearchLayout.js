import React from "react";

import { Box, Flex, VStack } from "@chakra-ui/react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Company from "./screens/Company";
import Service from "./screens/Service";
import Vender from "./screens/Vender";

import { Navbar, CardItem, MyList, MainCompany } from "./components";

import { SearchDataContextProvider } from "../../context";

const SearchLayout = () => {
  let match = useRouteMatch();

  return (
    <SearchDataContextProvider>
      <Box h={"100vh"} w={"100%"}>
        <Navbar />
        <Box h={48} className="w-full bg-blue-300" />
        <Box h={"91%"} marginTop="50px">
          {/* <Flex> */}
          <Box w="75%" px="40px" pb="100px">
            <Switch>
              <Route exact path={`${match.path}`} component={Service} />
              <Route
                path={`${match.path}/:serviceId/:companyId`}
                component={Company}
              />
              <Route path={`${match.path}/:serviceId`} component={Vender} />
            </Switch>
          </Box>
          {/* <Box mx={"auto"}>
              <Flex mx={"auto"}>
                <Box w="1px" h="700px" bg={"brand.grey"} /> */}
          {/* <Switch>
            <Route
              path={`${match.path}/:serviceId/:companyId`}
              component={Company}
            />
            <Route path={`${match.path}/:serviceId`} component={Vender} />
            <Route path={`${match.path}`} component={Service} />
          </Switch> */}
        </Box>
        {/* <Flex>
            <Box w="70%" px="80px" pb="100px">
            </Box> */}
        {/* <Box w="30%">
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
                      <VStack>
                        <CardItem isSelected={true} />
                        <MyList />
                      </VStack>
                    </Route>
                  </Switch>
                </Box>
              </Flex>
            </Box> */}
        {/* </Flex>
        </Box> */}
      </Box>
    </SearchDataContextProvider>
  );
};

export default SearchLayout;
