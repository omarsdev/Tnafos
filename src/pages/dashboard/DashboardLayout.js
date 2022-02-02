// TODO purchase for incoming and outgoing

import React, { useState, useEffect, useContext } from "react";
import { Navbar, Sidebar } from "./components/index";
import { HStack, VStack, Center, Spinner } from "@chakra-ui/react";
import {
  useRouteMatch,
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { AxiosInstance } from "../../api";

import DashboardHome from "./screens/home/DashboardHome";
import ClientLayout from "./screens/clients/ClientLayout";
import CompanyLayout from "./screens/company/CompanyLayout";
import EstimateLayout from "./screens/estimates/EstimateLayout";
import PaymentLayout from "./screens/payments/PaymentLayout";
import PurchasesLayout from "./screens/purchase-requests/PurchasesLayout";
import Ratings from "./screens/rating/Ratings";
import ServiceLayout from "./screens/services/ServiceLayout";
import SettingLayout from "./screens/settings/SettingLayout";
import UserLayout from "./screens/users/UserLayout";
import InvoiceLayout from "./screens/invoices/InvoiceLayout";
// import Proposal from "./screens/proposals/Proposal"

import { UserDataContext } from "../../context";
import ProposalLayout from "./screens/proposals/ProposalLayout";
import MediaLayout from "./screens/media/MediaLayout";
import SupplierLayout from "./screens/supplier/SupplierLayout";
// import { PrivateRoute } from "./components/PrivateRoute";

const DashboardLayout = () => {
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

  return !loading && userData ? (
    <HStack spacing={0}>
      <Sidebar />
      <VStack w="100%" h="100vh" overflow="scroll">
        <Navbar />
        {/* {body} */}

        <Switch>
          <Route exact path={match.path} component={DashboardHome} />
          <Route path={`${match.path}/company`} component={CompanyLayout} />
          <Route path={`${match.path}/rating`} component={Ratings} />
          <Route path={`${match.path}/supplier`} component={SupplierLayout} />
          <Route path={`${match.path}/media`} component={MediaLayout} />
          <Route path={`${match.path}/user`} component={UserLayout} />
          <Route path={`${match.path}/service`} component={ServiceLayout} />
          <Route path={`${match.path}/proposal`} component={ProposalLayout} />

          <Route
            path={`${match.path}/purchase-request`}
            component={PurchasesLayout}
          />

          <Route path={`${match.path}/payment`} component={PaymentLayout} />

          <Route path={`${match.path}/invoice`} component={InvoiceLayout} />

          <Route path={`${match.path}/estimate`} component={EstimateLayout} />
          <Route path={`${match.path}/client`} component={ClientLayout} />
          <Route path={`${match.path}/settings`} component={SettingLayout} />
        </Switch>
      </VStack>
    </HStack>
  ) : (
    <Center h="100vh" w="100%">
      <Spinner size="xl" color="#F8B916" />
    </Center>
  );
};

export default DashboardLayout;
