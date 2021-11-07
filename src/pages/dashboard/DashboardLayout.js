import React, { useEffect, useContext } from "react";
import { DashboardContent } from "./DasboardContent";
import { Navbar, Sidebar } from "./components/index";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouteMatch, useHistory, Route, Switch } from "react-router-dom";
import { UserDataContext } from "../../context";
import { getToken, removeUserSession } from "../../utils/handleUser";
import { handleTokenRequest } from "../../utils";
import {
  Client,
  Company,
  Estimate,
  Payment,
  Invoice,
  PurchaseRequest,
  Settings,
  User,
  Service,
} from "../../components";

export const DashboardLayout = () => {
  let match = useRouteMatch();

  // const { userDataProvider, userTokenProvider } = useContext(UserDataContext);
  // const [userData, setUserData] = userDataProvider;
  // const [clientToken, setClientToken] = userTokenProvider;

  // const getUser = async () => {
  //   if (!userData) {
  //     //* grab token wether from local storage or context
  //     let token = getToken() || clientToken;
  //     if (token) {
  //       try {
  //         const response = await handleTokenRequest(token);
  //         console.log(response);
  //         //* save user. info in the context provider which will be invoked later in Home page
  //         setUserData(response.data);
  //         // history.push("/");
  //         // return response;
  //       } catch (error) {}
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  //   // checkCopmany();
  // }, []);

  //*  note: we picked user information below from the (userData) variable that we've stored in context provider
  return (
    <>
      {/* {userData ?*/}
      <Box>
        <HStack spacing={0}>
          <Sidebar />
          <VStack className="chakra-stack h-screen  w-full">
            <Navbar className="w-full" />
            <DashboardContent />
          </VStack>
        </HStack>
        {/* {body} */}
        <Switch>
          <Route exact path={match.path} />
          <Route path={`${match.path}/company`} component={Company} />
          <Route path={`${match.path}/user`} component={User} />
          <Route path={`${match.path}/service`} component={Service} />
          <Route
            path={`${match.path}/purchase-requests`}
            component={PurchaseRequest}
          />
          <Route path={`${match.path}/payment`} component={Payment} />
          <Route path={`${match.path}/invoice`} component={Invoice} />
          <Route path={`${match.path}/estimate`} component={Estimate} />
          <Route path={`${match.path}/client`} component={Client} />
          <Route path={`${match.path}/settings`} component={Settings} />
        </Switch>
        {/* ) : (
        <h1>loading</h1>
      )} */}
      </Box>
    </>
  );
};
