import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

// import  Navbar  from "./components/navbar/Navbar";

// import Company from "./screens/Company";
// import Service from "./screens/Service";
// import Vender from "./screens/Vender";

// import { Navbar, CardItem, MyList, MainCompany } from "./components";

import { SearchDataContextProvider } from "../../context";

const Search = () => {
  let match = useRouteMatch();

  return (
    <SearchDataContextProvider>
      {/* <Navbar /> */}

      {/* <Box h={"100vh"} w={"100%"}>
        <Navbar />
        <Box h={48} w="full" backgroundColor={"blue.300"} />
        <Flex flexDirection={{ base: "column-reverse", md: "row" }}>
          <Box flex="1" m="10">
            <Switch>
              <Route exact path={`${match.path}`} component={Service} />
              <Route
                path={`${match.path}/:serviceId/:companyId`}
                component={Company}
              />
              <Route path={`${match.path}/:serviceId`} component={Vender} />
            </Switch>
          </Box>
          <Box mt="10">
            <Flex>
              <Box
                display={{ base: "none", md: "flex" }}
                w="2px"
                h="700px"
                backgroundColor={"brand.black"}
              />
              <Flex w="100%" m="10" justifyContent="center">
                <Switch>
                  <Route exact path={`${match.path}`}>
                    <MyList />
                  </Route>
                  <Route path={`${match.path}/:serviceId/:companyId`}>
                    <MainCompany />
                  </Route>
                  <Route path={`${match.path}/:serviceId`}>
                    <Flex
                      flexDirection={{ base: "column-reverse", md: "column" }}
                    >
                      <CardItem isSelected={true} />
                      <Box h="1rem" />
                      <MyList />
                    </Flex>
                  </Route>
                </Switch>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        
      </Box> */}
    </SearchDataContextProvider>
  );
};

export default Search;
