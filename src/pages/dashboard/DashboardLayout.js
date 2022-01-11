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
import { AxiosInstance } from "../../api";

import ClientLayout from "./screens/clients/ClientLayout";
import CompanyLayout from "./screens/company/CompanyLayout";
import EstimateLayout from "./screens/estimates/EstimateLayout";
import InvoiceHome from "./screens/invoices/InvoiceHome";
import PaymentLayout from "./screens/payments/PaymentLayout";
// import Proposal from "./screens/proposals/Proposal"
import PurchasesLayout from "./screens/purchase-requests/PurchasesLayout";
import Ratings from "./screens/rating/Ratings";
import ServiceLayout from "./screens/services/ServiceLayout";
import SettingLayout from "./screens/settings/SettingLayout";
import UserLayout from "./screens/users/UserLayout";

import { UserDataContext } from "../../context";
// import { PrivateRoute } from "./components/PrivateRoute";

const DashboardLayout = () => {
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
      setUserData(res.data.data);
      setLoading(false);
    } catch (error) {
      setUserData(error.response);
      setLoading(false);
    }
  };

  const removeForwardSlashFromUrl = () => {
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
              <Route path={`${match.path}/user`} component={UserLayout} />
              <Route path={`${match.path}/service`} component={ServiceLayout} />
              <Route
                path={`${match.path}/purchase-request`}
                component={PurchasesLayout}
              />

              <Route path={`${match.path}/payment`} component={PaymentLayout} />

              <Route path={`${match.path}/invoice`} component={InvoiceHome} />

              <Route
                path={`${match.path}/estimate`}
                component={EstimateLayout}
              />
              <Route path={`${match.path}/client`} component={ClientLayout} />
              <Route
                path={`${match.path}/settings`}
                component={SettingLayout}
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

export default DashboardLayout;
