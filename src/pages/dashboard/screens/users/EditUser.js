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

import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { useForm } from "react-hook-form";
import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance } from "../../../../api/AxiosInstance";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiSelect from "components/SuiSelect";

// NewProduct page components
import FormField from "./components/FormField";

const EditUser = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const { uuid } = useParams();
  const history = useHistory();

  const { register, handleSubmit, reset, control } = useForm();
  const [errors, setErrors] = useState(null);
  const [countryList, setCountryList] = useState(null);

  const [isUpdating, setIsUpdating] = useState(false);
  const [card, setCard] = useState(null);

  const resetHooksForm = (data) => {
    reset({
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      email: data.email,
      uuid: data.uuid,
      country_code: data.country_code,
    });
  };

  const getUser = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/user/${uuid}`);

      resetHooksForm(res.data.data);
      setCard(res.data.data);
    } catch (err) {

      history.push("/dashboard/user");
    }
  };

  const onUpdateUserInfo = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/user/${uuid}/update`,
        data
      );
      setIsUpdating(false);
      setAlert({
        message: "User Has Been Updated!",
        type: "info",
      });
      history.push(`/dashboard/user`);
    } catch (err) {
      setIsUpdating(false);
      setErrors(err.response.data);
      setAlert({
        message: `${err.response.data.message}`,
        type: "error",
      });
    }
  };

  const onCancelHandler = () => {
    if (isUpdating) return;
    resetHooksForm(card);
    setErrors(null);
  };

  const getAllCountry = async () => {
    try {
      const res = await AxiosInstance.get("/api/country");
      setCountryList(res.data.data);
    } catch (err) {
    }
  };

  useEffect(() => {
    getAllCountry();
    getUser();
  }, []);

  return !card ? null : (
    <SuiBox mt={2} mb={20}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Card className="overflow-visible">
            <SuiBox p={2}>
              <SuiBox>
                <SuiTypography variant="h5">
                  <strong>Fill up the fields below to update user</strong>
                </SuiTypography>

                <SuiBox mt={4}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <FormField
                        type="text"
                        label="first name "
                        defaultValue={card.first_name}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormField
                        type="text"
                        label="last name"
                        defaultValue={card.last_name}
                      />
                    </Grid>
                  </Grid>
                </SuiBox>

                <SuiBox mt={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <FormField
                        type="text"
                        label="email"
                        defaultValue={card.email}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormField
                        type="text"
                        label="phone number"
                        defaultValue={card.phone_number}
                      />
                    </Grid>
                  </Grid>
                </SuiBox>

                <SuiBox mt={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <FormField
                        type="text"
                        label="uuid"
                        defaultValue={card.uuid}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <SuiBox mb={3}>
                        <SuiBox
                          mb={1}
                          ml={0.5}
                          lineHeight={0}
                          display="inline-block"
                        >
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Country Code
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          defaultValue={{
                            value: "short_name",
                            label: "Select Country Code : ex SA",
                          }}
                          options={countryList}
                        />
                      </SuiBox>
                    </Grid>
                  </Grid>
                </SuiBox>

                <SuiBox
                  display="flex"
                  width="100%"
                  my={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <SuiBox mr={1}>
                    <SuiButton
                      variant="gradient"
                      buttonColor="dark"
                      onClick={handleSubmit(onUpdateUserInfo)}
                    >
                      add user
                    </SuiButton>
                  </SuiBox>

                  <SuiButton
                    variant="gradient"
                    buttonColor="secondary"
                    onClick={onCancelHandler}
                  >
                    cancel
                  </SuiButton>
                </SuiBox>
              </SuiBox>
            </SuiBox>
          </Card>
        </Grid>
      </Grid>
    </SuiBox>
  );
};

export default EditUser;
