import React, { useEffect, useState } from "react";

import { useRouteMatch, Switch, Route } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Create from "./Create";
import Edit from "./edit/Edit";
import Home from "./Home";

import { AxiosInstance } from "api";
import { Box, CircularProgress } from "@mui/material";

const CompanyLayout = () => {
  const match = useRouteMatch();

  const [company, setCompany] = useState(null)

  const getCompanyInfo = async () => {
    await AxiosInstance.get("/api/dashboard/company")
      .then((res) => {
        setCompany(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => { });
  };

  useEffect(() => {
    getCompanyInfo();
  }, []);


  return company ? (
    <DashboardLayout>
      <DashboardNavbar />
      <Switch>
        <Route path={`${match.path}/create`}>
          <Create company={company} setCompany={setCompany} />
        </Route>
        <Route path={`${match.path}/edit`}>
          <Edit company={company} setCompany={setCompany} />
        </Route>
        <Route path={`${match.path}`}>
          <Home company={company} />
        </Route>
      </Switch>
    </DashboardLayout>
  ) : (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress color="info" />
    </Box>

  );
};

export default CompanyLayout;