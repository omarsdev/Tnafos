/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useEffect, useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import CardComponent from "./CardComponent";

// Overview page components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { AxiosInstance } from "../../../../api/AxiosInstance";

const ServiceHome = () => {
  const [servicesList, setServicesList] = useState([]);
  const match = useRouteMatch();
  const history = useHistory();

  const showServicesList = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/service");
      setServicesList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showServicesList();
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mb={3}>
        <Card>
          <SuiBox pt={2} px={2}>
            <SuiBox mb={0.5}>
              <SuiTypography variant="h6" fontWeight="medium">
                Services list
              </SuiTypography>
            </SuiBox>
            <SuiBox ml={{ xs: 0, sm: "auto" }} mt={{ xs: 2, sm: 0 }}>
              <SuiButton variant="gradient" buttonColor="info" size="small">
                <Icon className=" font-bold">add</Icon>&nbsp; new service
              </SuiButton>
            </SuiBox>
          </SuiBox>
          <SuiBox p={2}>
            <Grid container spacing={3}>
              {servicesList.map((el, idx) => (
                <Grid item xs={12} md={6} xl={3} key={idx} userData={el}>
                  <CardComponent
                    // image={"https://bit.ly/sage-adebayo"}
                    action={{
                      type: "internal",
                      route: `${match.url}/${userData.uuid}`,
                      color: "info",
                      label: "view service",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </SuiBox>
        </Card>
      </SuiBox>
    </DashboardLayout>
  );
};

export default ServiceHome;
