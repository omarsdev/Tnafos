// TODO purchase for incoming and outgoing

import React, { useState, useEffect, useContext } from "react";
import { Navbar, Sidebar } from "./components/index";
import {
  HStack,
  VStack,
  Center,
  Spinner,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  Grid,
} from "@chakra-ui/react";
import {
  useRouteMatch,
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { FiInbox } from "react-icons/fi";
import { AxiosInstance } from "api";

import {
  IncomingEstimates,
  OutgoingEstimates,
  Settings,
  UserHome,
  IncomingPurchases,
  OutgoingPurchases,
  ServiceHome,
  CompanyLayout,
  Incoming,
  Outgoing,
  ClientsHome,
  Ratings,
  PaymentHome,
} from "./screens";

import { UserDataContext } from "context";
// import { PrivateRoute } from "./components/PrivateRoute";
import {} from "./screens/company/CompanyLayout";

export const DashboardLayout = () => {
  const colors = ["#F8B916", "#007BFF", "#AEAEAE", "#B00020"];

  //* set border color:
  const randomElement = colors[Math.floor(Math.random() * colors.length)];

  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const { tokenProviderValue, dataProviderValue } = useContext(UserDataContext);
  const { userToken } = tokenProviderValue;
  const { userData, setUserData } = dataProviderValue;

  const [loading, setLoading] = useState(true);

  const fetchTokenMe = async (token) => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/user/my-profile");
      console.log(res.data.data);
      setUserData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setUserData(error.response);
      setLoading(false);
      // console.log(status);
    }
  };

  const removeForwardSlashFromUrl = () => {
    console.log(location);
    if (location.pathname === "/dashboard/") {
      history.push("/dashboard");
    }
  };

  useEffect(() => {
    if (userData) return;
    fetchTokenMe();
    removeForwardSlashFromUrl();
  }, []);

  return (
    <>
      {!loading && userData ? (
        <HStack spacing={0}>
          <Sidebar />
          <VStack className="chakra-stack w-full h-screen overflow-scroll">
            <Navbar />
            {/* {body} */}

            <Switch>
              <Route exact path={match.path}>
                <Box>
                  <Grid templateColumns="repeat(4, 1fr)" gap={10} pt="20px">
                    <Box
                      mt="5"
                      w="240px"
                      h="70px"
                      rounded="xl"
                      boxShadow="2xl"
                      relative
                      bg={"white"}
                      borderLeftColor={randomElement}
                      borderLeftWidth="4px"
                    >
                      <HStack w="full">
                        <Stat px="5%" w="full">
                          <StatLabel py="1">Title</StatLabel>
                          <StatNumber fontSize="xl">number</StatNumber>
                        </Stat>
                        <Box pr="7%" fontSize="4xl" fontWeight="light" pt="2%">
                          <FiInbox color="#AEAEAE" />
                        </Box>
                      </HStack>
                    </Box>

                    <Box
                      mt="5"
                      w="240px"
                      h="70px"
                      rounded="xl"
                      boxShadow="2xl"
                      relative
                      bg={"white"}
                      borderLeftColor={randomElement}
                      borderLeftWidth="4px"
                    >
                      <HStack w="full">
                        <Stat px="5%" w="full">
                          <StatLabel py="1">Title</StatLabel>
                          <StatNumber fontSize="xl">number</StatNumber>
                        </Stat>
                        <Box pr="7%" fontSize="4xl" fontWeight="light" pt="2%">
                          <FiInbox color="#AEAEAE" />
                        </Box>
                      </HStack>
                    </Box>

                    <Box
                      mt="5"
                      w="240px"
                      h="70px"
                      rounded="xl"
                      boxShadow="2xl"
                      relative
                      bg={"white"}
                      borderLeftColor={randomElement}
                      borderLeftWidth="4px"
                    >
                      <HStack w="full">
                        <Stat px="5%" w="full">
                          <StatLabel py="1">Title</StatLabel>
                          <StatNumber fontSize="xl">number</StatNumber>
                        </Stat>
                        <Box pr="7%" fontSize="4xl" fontWeight="light" pt="2%">
                          <FiInbox color="#AEAEAE" />
                        </Box>
                      </HStack>
                    </Box>

                    <Box
                      mt="5"
                      w="240px"
                      h="70px"
                      rounded="xl"
                      boxShadow="2xl"
                      relative
                      bg={"white"}
                      borderLeftColor={randomElement}
                      borderLeftWidth="4px"
                    >
                      <HStack w="full">
                        <Stat px="5%" w="full">
                          <StatLabel py="1">Title</StatLabel>
                          <StatNumber fontSize="xl">number</StatNumber>
                        </Stat>
                        <Box pr="7%" fontSize="4xl" fontWeight="light" pt="2%">
                          <FiInbox color="#AEAEAE" />
                        </Box>
                      </HStack>
                    </Box>
                  </Grid>
                </Box>
              </Route>
              <Route path={`${match.path}/company`} component={CompanyLayout} />
              <Route path={`${match.path}/rating`} component={Ratings} />
              <Route path={`${match.path}/user`} component={UserHome} />
              <Route path={`${match.path}/service`} component={ServiceHome} />
              <Route
                path={`${match.path}/purchase-request/incomingpurchases`}
                component={IncomingPurchases}
              />
              <Route
                path={`${match.path}/purchase-request/outgoingpurchases`}
                component={OutgoingPurchases}
              />
              <Route path={`${match.path}/payment`} component={PaymentHome} />
              <Route
                path={`${match.path}/invoice/incoming`}
                component={Incoming}
              />
              <Route
                path={`${match.path}/invoice/outgoing`}
                component={Outgoing}
              />
              <Route
                path={`${match.path}/estimate/incomingestimates`}
                component={IncomingEstimates}
              />
              <Route
                path={`${match.path}/estimate/outgoingestimates`}
                component={OutgoingEstimates}
              />
              <Route
                path={`${match.path}/clientshome`}
                component={ClientsHome}
              />
              <Route path={`${match.path}/settings`} component={Settings} />
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
