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
import { BsFillTelephoneFill } from "react-icons/bs";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

const CardComponent = ({ userData }) => {
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
            // display="flex"
            justifyContent="center"
            textAlign="center"
          >
            <strong>
              {userData?.first_name}
              {userData?.last_name}
            </strong>{" "}
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
            {userData?.email}
          </SuiTypography>
        </SuiBox>

        <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
          <SuiTypography
            variant="body2"
            textColor="text"
            justifyContent="center"
            textAlign="center"
          >
            <BsFillTelephoneFill />
            {userData.phone_number}
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
              history.push(`${match.url}/${userData.uuid}`);
            }}
          >
            view{" "}
          </SuiButton>
        </SuiBox>
      </SuiBox>
    </Card>
  );
};

export default CardComponent;
