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
import React, { useState, useContext } from "react";
import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance, media } from "../../../../api";
import { useHistory, useParams } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// EditProduct page components
import ProductInfo from "./components/ProductInfo";

const EditService = () => {
  const [errors, setErrors] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const { uuid } = useParams();
  const history = useHistory();

  const onUpdateService = async (dataToBeUpdataed) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/service/${uuid}/update`,
        dataToBeUpdataed
      );

      setIsUpdating(false);
      setAlert({
        message: "Service Has Been Updated!",
        type: "info",
      });
      history.push(`/dashboard/service`);
    } catch (err) {
      setIsUpdating(false);
      setErrors(err.response.data.errors);
      setAlert({
        message: `${err.response.data.message}`,
        type: "error",
      });
    }
  };
  return (
    <SuiBox my={4} mt={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Card className="h-100">
            <SuiBox p={3}>
              <SuiTypography variant="h5" fontWeight="bold">
                Service Image
              </SuiTypography>
              <SuiBox
                component="img"
                src={"https://bit.ly/sage-adebayo"}
                alt="Segun Adebayo"
                borderRadius="lg"
                boxShadow="lg"
                width="100%"
                my={3}
              />
              <SuiBox
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <SuiBox mr={1}>
                  <SuiButton variant="gradient" buttonColor="info" size="small">
                    edit
                  </SuiButton>
                </SuiBox>
              </SuiBox>
            </SuiBox>
          </Card>
        </Grid>

        <Grid item xs={12} lg={8}>
          <SuiBox mb={3}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} lg={6}>
                <SuiTypography variant="h4" fontWeight="medium">
                  Make the changes below to update service.
                </SuiTypography>
              </Grid>

              <Grid item xs={12} lg={6}>
                <SuiBox display="flex" justifyContent="flex-end" mr={2}>
                  <SuiButton
                    variant="gradient"
                    buttonColor="info"
                    onClick={onUpdateService}
                  >
                    save
                  </SuiButton>
                </SuiBox>
              </Grid>
            </Grid>
          </SuiBox>
          <ProductInfo />
        </Grid>
      </Grid>
    </SuiBox>
  );
};

export default EditService;
