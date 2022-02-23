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

import React from "react";

import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

import { useRouteMatch } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";

const CardComponent = ({ userData }) => {
  const match = useRouteMatch();
  return (
    <Card className="h-100">
      <SuiBox p={3}>
        <SuiBox
          component="img"
          src={"https://bit.ly/sage-adebayo"}
          alt="User Image"
          borderRadius="lg"
          boxShadow="lg"
          width="100%"
          my={3}
        />
        <SuiBox mt={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {userData?.first_name}
              {userData?.last_name}
            </Grid>
            <Grid item xs={12}>
              <IoIosMail />
              {userData?.email}
            </Grid>
            <Grid item xs={12}>
              <BsFillTelephoneFill />
              {userData.phone_number}
            </Grid>
          </Grid>
          <SuiButton
            variant="outlined"
            buttonColor="info"
            size="small"
            onClick={`${match.url}/${userData.uuid}`}
          >
            view details
          </SuiButton>
        </SuiBox>
      </SuiBox>
    </Card>
  );
};

export default CardComponent;
