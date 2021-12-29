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
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { FiInbox } from "react-icons/fi";
import { AxiosInstance } from "api";

import {
  Estimate,
  PurchaseRequest,
  Settings,
  UserHome,
  ServiceHome,
  CompanyLayout,
  Incoming,
  Outgoing,
  ClientsHome,
  Ratings,
} from "./screens";
import { PaymentHome } from "./screens/payments";
import { UserDataContext } from "context";
import { PrivateRoute } from "./components/PrivateRoute";

export const DashboardLayout = () => {
  const colors = ["#F8B916", "#007BFF", "#AEAEAE", "#B00020"];

  //* set border color:
  const randomElement = colors[Math.floor(Math.random() * colors.length)];

  let match = useRouteMatch();

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

  useEffect(() => {
    if (userData) return;
    fetchTokenMe();
  }, []);

  return (
    <>
      {!loading && userData ? (
        <HStack spacing={0}>
          <Sidebar />
          <VStack className="chakra-stack w-full h-screen">
            <Navbar />
            {/* {body} */}

            <Switch>
              <PrivateRoute exact path={match.path}>
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
              </PrivateRoute>
              <Route path={`${match.path}/company`} component={CompanyLayout} />
              <PrivateRoute path={`${match.path}/rating`} component={Ratings} />
              <PrivateRoute path={`${match.path}/user`} component={UserHome} />
              <PrivateRoute
                path={`${match.path}/service`}
                component={ServiceHome}
              />
              <PrivateRoute
                path={`${match.path}/purchase-requests`}
                component={PurchaseRequest}
              />
              <PrivateRoute
                path={`${match.path}/payment`}
                component={PaymentHome}
              />
              <PrivateRoute
                path={`${match.path}/invoice/incoming`}
                component={Incoming}
              />
              <PrivateRoute
                path={`${match.path}/invoice/outgoing`}
                component={Outgoing}
              />
              <PrivateRoute
                path={`${match.path}/estimate`}
                component={Estimate}
              />
              <PrivateRoute
                path={`${match.path}/client`}
                component={ClientsHome}
              />
              <PrivateRoute
                path={`${match.path}/settings`}
                component={Settings}
              />
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
