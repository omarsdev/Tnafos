// /**
// =========================================================
// * Soft UI Dashboard PRO React - v2.0.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
// * Copyright 2021 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

import React, { useState, useContext, useEffect } from "react";

import { AxiosInstance } from "../../../../../api/AxiosInstance";
import { AlertContext } from "../../../../../context/AlertContext";

import { Link, useHistory, useRouteMatch } from "react-router-dom";

import { Formik, Form } from "formik";
// @mui material components
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

import { Typography } from "@mui/material";

import { checkout, initialValue, validation } from "./schema/form";
import FormField from "components/FormField";

const UserForm = () => {
  const { formId, formField } = checkout;

  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();
  const match = useRouteMatch();

  const [agreement, setAgreemnet] = useState(true);
  const handleSetAgremment = () => setAgreemnet(!agreement);

  const [ch, setCh] = useState(true);
  const handleSetCh = () => setCh(!ch);

  const [countryList, setCountryList] = useState(null);

  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const addUser = async (userData) => {
    try {
      setIsUpdating(true);
      const res = await AxiosInstance.post(
        "/api/dashboard/user/create",
        userData
      );
      setAlert({
        message: `New user has been added!`,
        type: "success",
      });
      history.push("/dashboard/user");
    } catch (error) {
      console.log(error.response.data);
      setErr(error.response.data.errors);
      setAlert({
        message: `${error.response.data.message}`,
        type: "error",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/user");
  };

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

  const FormData = ({ formData }) => {
    const { formField, values, errors, touched } = formData;
    const {
      first_name,
      last_name,
      phone_number,
      email,
      password,
      password_confirmation,
    } = formField;
    const {
      first_name: firstNameV,
      last_name: lastNameV,
      phone_number: phoneNumberV,
      email: emailV,
      password: passwordV,
      password_confirmation: passwordConfirmationV,
    } = values;

    return (
      <>
        <SuiBox>
          <SuiTypography variant="h5">Add new user</SuiTypography>
          <SuiBox display="flex" flexDirection="row" width="100%">
            <SuiBox mr={1} width="100%">
              <FormField
                type={first_name.type}
                label={first_name.label}
                name={first_name.name}
                value={firstNameV}
                placeholder={first_name.placeholder}
                error={errors.first_name && touched.first_name}
                success={firstNameV.length > 0 && !errors.first_name}
              />
            </SuiBox>
            <SuiBox ml={1} width="100%">
              <FormField
                type={last_name.type}
                label={last_name.label}
                name={last_name.name}
                value={lastNameV}
                placeholder={last_name.placeholder}
                error={errors.last_name && touched.last_name}
                success={lastNameV.length > 0 && !errors.last_name}
              />
            </SuiBox>
          </SuiBox>
          <SuiBox>
            <FormField
              type={phone_number.type}
              label={phone_number.label}
              name={phone_number.name}
              value={phoneNumberV}
              placeholder={phone_number.placeholder}
              error={errors.phone_number && touched.phone_number}
              success={phoneNumberV.length > 0 && !errors.phone_number}
            />
            <FormField
              type={email.type}
              label={email.label}
              name={email.name}
              value={emailV}
              placeholder={email.placeholder}
              error={errors.email && touched.email}
              success={emailV.length > 0 && !errors.email}
            />
            <FormField
              type={password.type}
              label={password.label}
              name={password.name}
              value={passwordV}
              placeholder={password.placeholder}
              error={errors.password && touched.password}
              success={passwordV.length > 0 && !errors.password}
            />
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
            />
          </SuiBox>
          //* country code input ...
          {/* <SuiBox mt={2}>
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
        </SuiBox> */}
        </SuiBox>
      </>
    );
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validation[0]}
      onSubmit={addUser}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form id={formId} autoComplete="off">
          <FormData
            formData={{
              values,
              touched,
              formField,
              errors,
            }}
          />

          <SuiBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            textAlign="center"
          >
            <SuiBox>
              <SuiBox mb={1}>
                <SuiTypography variant="h6" fontWeight="medium">
                  Terms and Conditions agreement
                </SuiTypography>
              </SuiBox>
              <SuiBox display="flex" alignItems="center" alignItems="center">
                <Checkbox
                  checked={agreement}
                  onChange={handleSetAgremment}
                  alignItems="center"
                />
                <SuiTypography
                  variant="button"
                  fontWeight="regular"
                  onClick={handleSetAgremment}
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  &nbsp;&nbsp;I agree to Tnafos&nbsp;
                </SuiTypography>
              </SuiBox>
              ;
              <SuiBox
                display="flex"
                width="100%"
                my={2}
                justifyContent="center"
                alignItems="center"
              >
                <SuiTypography
                  component={Link}
                  href="#"
                  variant="button"
                  fontWeight="bold"
                  textGradient
                  mx={1}
                >
                  terms of service
                </SuiTypography>
                <SuiTypography
                  component="p"
                  variant="button"
                  fontWeight="regular"
                  textColor="text"
                >
                  and
                </SuiTypography>
                <SuiTypography
                  component={Link}
                  href="#"
                  variant="button"
                  fontWeight="bold"
                  textGradient
                  mx={1}
                >
                  Privacy policy
                </SuiTypography>
              </SuiBox>
              <SuiBox mb={1}>
                <SuiTypography variant="h6" fontWeight="medium">
                  Decleration of Valid Information
                </SuiTypography>
              </SuiBox>
              <SuiBox
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Checkbox checked={ch} onChange={handleSetCh} />
                <SuiTypography
                  variant="button"
                  fontWeight="regular"
                  onClick={handleSetCh}
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  &nbsp;&nbsp;I confirm that the information given in this form
                  is true, complete and accurate."&nbsp;
                </SuiTypography>
              </SuiBox>
            </SuiBox>
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
                onClick={addUser}
              >
                add user
              </SuiButton>
            </SuiBox>

            <SuiButton
              variant="gradient"
              buttonColor="secondary"
              onClick={handleCancel}
            >
              cancel
            </SuiButton>
          </SuiBox>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
