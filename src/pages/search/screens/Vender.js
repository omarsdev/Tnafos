import React, { useContext, useEffect } from "react";

import { useRouteMatch } from "react-router-dom";
import { AxiosInstance } from "../../../api/AxiosInstance";
import { SearchDataContext } from "../../../context/SearchDataContext";

import CardCompany from "../components/CardCompany";

import { CircularProgress } from "@mui/material";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

const Vender = () => {
  const match = useRouteMatch();

  const { vendorsListProviderValue } = useContext(SearchDataContext);
  const { vendorsList, setVendorsList } = vendorsListProviderValue;

  useEffect(() => {
    const handleShowServiceApi = async () => {
      await AxiosInstance.get(
        `api/services/show/${match.params.serviceId}`
      ).then((res) => {
        setVendorsList(res.data.data);
      });
    };

    handleShowServiceApi();
  }, [match.params.serviceId, setVendorsList]);
  return (
    <SuiBox my={3}>
      <Card>
        <SuiBox lineHeight={1}>
          <SuiTypography variant="h5" fontWeight="medium">
            List of all venders
          </SuiTypography>
        </SuiBox>

        <Card mb={3}>
          {!vendorsList ? (
            <CircularProgress color="info" />
          ) : (
            <Grid container spacing={3}>
              {vendorsList.companies.map((e, i) => (
                <Grid item xs={12} lg={8} key={i}>
                  <CardCompany data={e} />
                </Grid>
              ))}
            </Grid>
          )}
        </Card>
      </Card>
    </SuiBox>
  );
};

export default Vender;
