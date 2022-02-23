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
import { AxiosInstance } from "../../../../../api/AxiosInstance";

import { useRouteMatch } from "react-router-dom";

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiSelect from "components/SuiSelect";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

const UserInfo = ({ formData }) => {
  const [countryList, setCountryList] = useState(null);
  const match = useRouteMatch();
  const { formField, values, errors, touched } = formData;
  const {
    first_name,
    last_name,
    email,
    phone_number,
    password,
    password_confirmation,
  } = formField;
  const {
    first_name: firstNameV,
    last_name: lastNameV,
    email: emailV,
    phone_number: phoneNumberV,
    password: passwordV,
    password_confirmation: passwordConfirmationV,
  } = values;

  const getAllCountry = async () => {
    try {
      const res = await AxiosInstance.get("/api/country");
      setCountryList(res.data.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getAllCountry();
  }, []);

  return (
    <SuiBox>
      <SuiBox lineHeight={0}>
        <SuiTypography variant="h5" fontWeight="bold">
          Add new user
        </SuiTypography>
        <SuiTypography variant="button" fontWeight="regular" textColor="text">
          Mandatory informations
        </SuiTypography>
      </SuiBox>
      <SuiBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={first_name.type}
              label={first_name.label}
              name={first_name.name}
              value={firstNameV}
              placeholder={first_name.placeholder}
              error={errors.first_name && touched.first_name}
              success={firstNameV.length > 0 && !errors.first_name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={last_name.type}
              label={last_name.label}
              name={last_name.name}
              value={lastNameV}
              placeholder={last_name.placeholder}
              error={errors.last_name && touched.last_name}
              success={lastNameV.length > 0 && !errors.last_name}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={phone_number.type}
              label={phone_number.label}
              name={phone_number.name}
              value={phoneNumberV}
              placeholder={phone_number.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={email.type}
              label={email.label}
              name={email.name}
              value={emailV}
              placeholder={email.placeholder}
              error={errors.email && touched.email}
              success={emailV.length > 0 && !errors.email}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={password.type}
              label={password.label}
              name={password.name}
              value={passwordV}
              placeholder={password.placeholder}
              error={errors.password && touched.password}
              success={passwordV.length > 0 && !errors.password}
              inputProps={{ autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={password_confirmation.type}
              label={password_confirmation.label}
              name={password_confirmation.name}
              value={passwordConfirmationV}
              placeholder={password_confirmation.placeholder}
              error={
                errors.password_confirmation && touched.password_confirmation
              }
              success={
                passwordConfirmationV.length > 0 &&
                !errors.password_confirmation
              }
              inputProps={{ autoComplete: "" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <SuiBox mb={3}>
              <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
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
    </SuiBox>
  );
};

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
