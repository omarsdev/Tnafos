import React, { useEffect, useState } from "react";

import {
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

import { AxiosInstance } from "../../../../api";

const MyService = () => {
  const history = useHistory();
  const { uuid } = useParams();
  const match = useRouteMatch();

  const [service, setService] = useState(null);

  const getMyService = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/service/${uuid}`);
      setService(res.data.data);
    } catch (err) {
      history.push("/dashboard/service");
    }
  };

  const navigateEditScreen = () => {
    history.push(`${match.url}/edit-service`);
  }

  useEffect(() => {
    getMyService();
  }, []);
  return service && (

    <SuiBox py={3}>
      <Card className="overflow-visible">
        <SuiBox p={3}>
          <SuiBox mb={3}>
            <SuiTypography variant="h5" fontWeight="medium">
              <strong> Service details ... </strong>
            </SuiTypography>
          </SuiBox>

          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} xl={5}>
              <SuiBox>
                <SuiBox
                  component="img"
                  src={"https://bit.ly/sage-adebayo"}
                  alt="Segun Adebayo"
                  boxShadow="lg"
                  borderRadius="lg"
                  width="100%"
                />
              </SuiBox>
            </Grid>

            <Grid item xs={12} lg={5} className="mx-auto" mt={6}>
              <SuiBox m={0} pl={4} mb={2}>
                <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
                  <SuiTypography variant="body2" textColor="text">
                    {" "}
                    <strong>Name of service: </strong> {service?.name}
                  </SuiTypography>
                </SuiBox>
                <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
                  <SuiTypography variant="body2" textColor="text">
                    <strong> Description: </strong> {service?.description}
                  </SuiTypography>
                </SuiBox>
                <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
                  <SuiTypography variant="body2" textColor="text">
                    <strong> Category-id: </strong>
                    {service?.category.uuid}
                  </SuiTypography>
                </SuiBox>
                <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
                  <SuiTypography variant="body2" textColor="text">
                    <strong> Type : </strong>
                    {service?.type}
                  </SuiTypography>
                </SuiBox>
                <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
                  <SuiTypography variant="body2" textColor="text">
                    <strong> Price: </strong> {service?.price}
                  </SuiTypography>
                </SuiBox>
              </SuiBox>

              <SuiBox
                display="flex"
                width="100%"
                mb={3}
                mt={8}
                pl={4}
                justifyContent="start"
                alignItems="start"
              >
                <Grid item xs={12} lg={5} container>
                  <SuiButton
                    variant="gradient"
                    buttonColor="info"
                    fullWidth
                    onClick={navigateEditScreen}
                  >
                    edit
                  </SuiButton>
                </Grid>
              </SuiBox>
            </Grid>
          </Grid>
        </SuiBox>
      </Card>
    </SuiBox>
  );
};

export default MyService;
