import React, { useState, useEffect, useContext } from "react";
import { DashboardContent } from "./DasboardContent";
import { Navbar, Sidebar } from "./components/index";
import { HStack, VStack, Center, Spinner, Box, Grid } from "@chakra-ui/react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { AxiosInstance } from "api";

import {
  Estimate,
  PurchaseRequest,
  Settings,
  UserHome,
  ServiceHome,
  CompanyHome,
  InvoiceHome,
  ClientsHome,
  Ratings,
} from "./screens";
import { PaymentHome } from "./screens/payments";
import { UserDataContext } from "context";
import { getToken } from "utils";

export const DashboardLayout = () => {
  let match = useRouteMatch();

  const { tokenProviderValue, dataProviderValue } = useContext(UserDataContext);
  const { userToken } = tokenProviderValue;
  const { userData, setUserData } = dataProviderValue;

  const [loading, setLoading] = useState(true);

  const fetchTokenMe = async (token) => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/user/my-profile");
      //* save user. info in the context provider which will be invoked later in Home page
      setUserData(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTokenMe();
  }, []);

  //*  note: we picked user information below from the (userData) variable that we've stored in context provider
  return (
    <>
      {userData ? (
        <HStack spacing={0}>
          <Sidebar />
          <VStack className="chakra-stack w-full h-screen">
            <Navbar />

            {/* {body} */}
            <Switch>
              <Route exact path={match.path} component={DashboardContent} />
              <Route path={`${match.path}/company`} component={CompanyHome} />
              <Route path={`${match.path}/user`} component={UserHome} />
              <Route path={`${match.path}/service`} component={ServiceHome} />
              <Route
                path={`${match.path}/purchase-requests`}
                component={PurchaseRequest}
              />
              <Route path={`${match.path}/payment`} component={PaymentHome} />
              <Route path={`${match.path}/invoice`} component={InvoiceHome} />
              <Route path={`${match.path}/estimate`} component={Estimate} />
              <Route path={`${match.path}/client`} component={ClientsHome} />
              <Route path={`${match.path}/settings`} component={Settings} />
              <Route path={`${match.path}/rating`} component={Ratings} />
            </Switch>
          </VStack>
        </HStack>
      ) : (
        <Center h="100vh" w="100%">
          <Spinner size="xl" color="#F8B916" />
        </Center>
      )}
    </>
  );
};
