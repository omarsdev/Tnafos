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
// react-router-dom components
import { Link, useRouteMatch, useHistory } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

import { AxiosInstance } from "../../../../api";
import CardComponent from "./CardComponent";

const UserHome = () => {
  const [usersList, setUsersList] = useState(null);

  const match = useRouteMatch();
  const history = useHistory();

  const showUsersList = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/user");
      setUsersList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showUsersList();
  }, []);

  return (
    <SuiBox my={3}>
      <Card>
        <SuiBox
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          p={3}
        >
          <SuiBox lineHeight={1}>
            <SuiTypography variant="h5" fontWeight="medium">
              All Users
            </SuiTypography>
          </SuiBox>
          <Stack spacing={1} direction="row">
            <Link to={`${match.url}/createuser`} className="decoration-none">
              <SuiButton variant="gradient" buttonColor="info" size="small">
                + new user
              </SuiButton>
            </Link>
          </Stack>
        </SuiBox>
        <Grid container spacing={3}>
          {usersList.map((el, idx) => (
            <Grid item xs={12} lg={4} key={idx}>
              <CardComponent userData={el} />
            </Grid>
          ))}
        </Grid>
      </Card>
    </SuiBox>
  );
};

export default UserHome;
