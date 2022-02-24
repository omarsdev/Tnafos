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

import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AxiosInstance } from "../../../../../api/AxiosInstance";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// NewProduct page components
import FormField from "./FormField";

function ProductInfo() {
  const [service, setService] = useState(null);
  const { uuid } = useParams();
  const history = useHistory();

  const getMyService = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/service/${uuid}`);
      //   resetHooksForm(res.data.data);
      setService(res.data.data);
    } catch (err) {
      history.push("/dashboard/service");
    }
  };

  useEffect(() => {
    getMyService();
  }, []);

  return (
    <Card className="overflow-visible">
      <SuiBox p={3}>
        <SuiTypography variant="h5">Service Information</SuiTypography>
        <SuiBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField
                type="text"
                label="Price "
                defaultValue={`${service?.price}`}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                type="text"
                label="Type"
                defaultValue={`${service?.type}`}
              />
            </Grid>
          </Grid>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default ProductInfo;
