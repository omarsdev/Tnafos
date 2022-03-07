import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

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

  const navigateViewScreen = () => {
    history.push(`${match.url}/${info.uuid}`);
  }

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
            <strong>{info.name}</strong>
          </SuiTypography>
        </SuiBox>
        <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
          <SuiTypography
            variant="body2"
            textColor="text"
            justifyContent="center"
            textAlign="center"
          >
            {info.type}
          </SuiTypography>
        </SuiBox>

        <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
          <SuiTypography
            variant="h5"
            fontWeight="medium"
            justifyContent="center"
            textAlign="center"
          >
            $ {info.price}
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
            onClick={navigateViewScreen}
          >
            view
          </SuiButton>
        </SuiBox>
      </SuiBox>
    </Card>
  );
};

export default ServiceCard;
