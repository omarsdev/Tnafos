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
import { useRouteMatch, Link, useHistory } from "react-router-dom";

import { IoIosMail } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

const ServiceCard = ({ info }) => {
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <Card className="overflow-visible">
      <SuiBox p={2} mt={3}>
        <Grid container alignItems="center">
          <SuiBox
            component="img"
            src={"https://bit.ly/sage-adebayo"}
            alt="User Image"
            boxShadow="lg"
            borderRadius="lg"
            width="100%"
          />
        </Grid>
      </SuiBox>

      <SuiBox m={0} pl={4} mb={2}>
        <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
          <SuiTypography
            variant="body2"
            textColor="text"
            my={1}
            justifyContent="center"
            textAlign="center"
          >
            <strong>{info?.name}</strong>{" "}
          </SuiTypography>
        </SuiBox>
        <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
          <SuiTypography
            variant="body2"
            textColor="text"
            justifyContent="center"
            textAlign="center"
          >
            <IoIosMail />
            {info?.type}
          </SuiTypography>
        </SuiBox>

        <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
          <SuiTypography
            variant="body2"
            textColor="text"
            justifyContent="center"
            textAlign="center"
          >
            <BsCurrencyDollar color="#007BFF" />
            {info?.price}
          </SuiTypography>
        </SuiBox>

        <SuiBox
          display="flex"
          width="100%"
          my={2}
          justifyContent="center"
          alignItems="center"
        >
          <SuiButton
            buttonColor="light"
            alignItems="center"
            onClick={() => {
              history.push(`${match.url}/${info.uuid}`);
            }}
          >
            view{" "}
          </SuiButton>
        </SuiBox>
      </SuiBox>
    </Card>
  );
};

export default ServiceCard;
