// TODO purchase for incoming and outgoing

import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import {
  useRouteMatch,
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { AxiosInstance } from "../../api";

import { UserDataContext, useSize } from "context";
import { Center, HStack, Spinner } from "@chakra-ui/react";
import {
  useSoftUIController,
  setMiniSidenav,
  setOpenConfigurator,
} from "context/SoftUI";
// import { PrivateRoute } from "./components/PrivateRoute";

import Sidenav from "examples/Sidenav";

import routes from "./routes";

import brand from "assets/icons/tnafos.svg";
import { setTransparentSidenav } from "context/SoftUI";

import DashboardHome from "./screens/home/DashboardHome";
import CompanyLayout from "./screens/company/CompanyLayout";
// import ClientLayout from "./screens/clients/ClientLayout";
import EstimateLayout from "./screens/estimates/EstimateLayout";
// import PaymentLayout from "./screens/payments/PaymentLayout";
// import PurchasesLayout from "./screens/purchase-requests/PurchasesLayout";
// import Ratings from "./screens/rating/Ratings";
// import ServiceLayout from "./screens/services/ServiceLayout";
// import SettingLayout from "./screens/settings/SettingLayout";
import UserLayout from "./screens/users/UserLayout";
// import InvoiceLayout from "./screens/invoices/InvoiceLayout";
// import Proposal from "./screens/proposals/Proposal";
// import ProposalLayout from "./screens/proposals/ProposalLayout";
// import MediaLayout from "./screens/media/MediaLayout";
// import SupplierLayout from "./screens/supplier/SupplierLayout";

const DashboardLayout = () => {
  const match = useRouteMatch();

  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } =
    controller;

  const { dataProviderValue } = useContext(UserDataContext);
  const { userData, setUserData } = dataProviderValue;

  const location = useLocation();
  const history = useHistory();

  const [loading, setLoading] = useState(true);

  const [onMouseEnter, setOnMouseEnter] = useState(false);

  const fetchTokenMe = async () => {
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
    setTransparentSidenav(dispatch, false);
    if (userData) return;
    fetchTokenMe();
    removeForwardSlashFromUrl();
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  return !loading && userData ? (
    <>
      <Sidenav
        color={sidenavColor}
        brand={brand}
        brandName="Tnafos"
        routes={routes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
      <Switch>
        <Route exact path={match.path} component={DashboardHome} />
        <Route path={`${match.path}/company`} component={CompanyLayout} />
        {/* <Route path={`${match.path}/rating`} component={Ratings} />
        <Route path={`${match.path}/supplier`} component={SupplierLayout} />
        <Route path={`${match.path}/media`} component={MediaLayout} /> */}
        <Route path={`${match.path}/user`} component={UserLayout} />
        {/* <Route path={`${match.path}/service`} component={ServiceLayout} />
        <Route path={`${match.path}/proposal`} component={ProposalLayout} /> */}

        {/* <Route
          path={`${match.path}/purchase-request`}
          component={PurchasesLayout}
        /> */}

        {/* <Route path={`${match.path}/payment`} component={PaymentLayout} />

        <Route path={`${match.path}/invoice`} component={InvoiceLayout} /> */}

        <Route path={`${match.path}/estimate`} component={EstimateLayout} />
        {/* <Route path={`${match.path}/client`} component={ClientLayout} />
        <Route path={`${match.path}/settings`} component={SettingLayout} /> */}
      </Switch>
    </>
  ) : (
    <Center h="100vh" w="100%">
      <Spinner size="xl" color="#F8B916" />
    </Center>
  );
};

export default DashboardLayout;
