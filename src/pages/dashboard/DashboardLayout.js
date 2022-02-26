// TODO purchase for incoming and outgoing

import React, { useState, useEffect, useContext } from "react";
import {
  useRouteMatch,
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { AxiosInstance } from "../../api";

import { UserDataContext, useSize } from "context";
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
import PurchaseRequestsLayout from "./screens/purchaseRequests/PurchaseRequestsLayout";
import EstimateLayout from "./screens/estimates/EstimateLayout";
import InvoicesLayout from "./screens/invoices/InvoicesLayout";
import ServiceLayout from "./screens/services/ServiceLayout";
import UserLayout from "./screens/users/UserLayout";
import { Box, CircularProgress } from "@mui/material";

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
        <Route path={`${match.path}/user`} component={UserLayout} />
        <Route path={`${match.path}/service`} component={ServiceLayout} />
        <Route
          path={`${match.path}/purchase-requests`}
          component={PurchaseRequestsLayout}
        />
        <Route path={`${match.path}/estimates`} component={EstimateLayout} />
        <Route path={`${match.path}/invoices`} component={InvoicesLayout} />
      </Switch>
    </>
  ) : (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="info" />
    </Box>
  );
};

export default DashboardLayout;
