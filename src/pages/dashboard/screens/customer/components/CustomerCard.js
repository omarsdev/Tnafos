import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

const CustomerCard = ({ data }) => {
  const match = useRouteMatch();

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

      <SuiBox m={0} mb={2}>

        <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
          <SuiTypography
            variant="body2"
            textColor="text"
            my={1}
            justifyContent="center"
            textAlign="center"
          >
            <strong>
              {data.company_name}
            </strong>
          </SuiTypography>
        </SuiBox>

        <SuiBox
          display="flex"
          width="100%"
          my={2}
          justifyContent="center"
          alignItems="center"
        >
          <Link to={`${match.url}/${data.uuid}`}>
            <SuiButton
              buttonColor="light"
              alignItems="center"
            >
              view
            </SuiButton>
          </Link>
        </SuiBox>
      </SuiBox>
    </Card>
  )
}

export default CustomerCard