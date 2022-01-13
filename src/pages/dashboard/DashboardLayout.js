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
import { AxiosInstance } from "../../api";

import { FiInbox } from "react-icons/fi";

// import Proposal from "./screens/proposals/Proposal"
import Ratings from "./screens/rating/Ratings";
import { UserDataContext } from "../../context";
import ClientsHome from "./screens/clients/ClientsHome";
import PurchasesHome from "./screens/purchase-requests/PurchasesHome";
import PaymentHome from "./screens/payments/PaymentHome";
import EstimateHome from "./screens/estimates/EstimateHome";
import OutgoingEstimates from "./screens/estimates/OutgoingEstimates";
import IncomingEstimates from "./screens/estimates/IncomingEstimates";
import ServiceHome from "./screens/services/ServiceHome";
import SettingHome from "./screens/settings/SettingHome";
import Incoming from "./screens/invoices/Incoming";
import Outgoing from "./screens/invoices/Outgoing";
import UserHome from "./screens/users/UserHome";
import CompanyHome from "./screens/company/CompanyHome";
import OutgoingPurchases from "./screens/purchase-requests/OutgoingPurchases";
import IncomingPurchases from "./screens/purchase-requests/IncomingPurchases";
import InvoiceHome from "./screens/invoices/InvoiceHome";

// import { PrivateRoute } from "./components/PrivateRoute";

const DashboardLayout = () => {
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const { tokenProviderValue, dataProviderValue } = useContext(UserDataContext);
  const { userToken } = tokenProviderValue;
  const { userData, setUserData } = dataProviderValue;

  const [loading, setLoading] = useState(true);

  const colors = ["#F8B916", "#007BFF", "#AEAEAE", "#B00020"];

  //* set border color:
  const randomElement = colors[Math.floor(Math.random() * colors.length)];

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
              <Route path={`${match.path}/company`} component={CompanyHome} />
              <Route path={`${match.path}/rating`} component={Ratings} />
              <Route path={`${match.path}/user`} component={UserHome} />
              <Route path={`${match.path}/service`} component={ServiceHome} />
              <Route
                path={`${match.path}/purchase-request`}
                component={PurchasesHome}
              />
              <Route
                path={`${match.path}/purchase-request/incomingpurchases`}
                component={IncomingPurchases}
              />
              <Route
                path={`${match.path}/purchase-request/outgoingpurchases`}
                component={OutgoingPurchases}
              />
              <Route path={`${match.path}/payment`} component={PaymentHome} />
              <Route path={`${match.path}/invoice`} component={InvoiceHome} />
              <Route
                path={`${match.path}/invoice/incoming`}
                component={Incoming}
              />
              <Route
                path={`${match.path}/invoice/outgoing`}
                component={Outgoing}
              />
              <Route path={`${match.path}/estimate`} component={EstimateHome} />
              <Route
                path={`${match.path}/estimate/`}
                component={EstimateHome}
              />
              <Route path={`${match.path}/estimate`} component={EstimateHome} />
              <Route path={`${match.path}/client`} component={ClientsHome} />
              <Route path={`${match.path}/settings`} component={SettingHome} />
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
