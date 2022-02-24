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

import React, { useState, useContext, useEffect } from "react";

import { AxiosInstance } from "../../../../../api/AxiosInstance";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { AlertContext } from "../../../../../context/AlertContext";

// @mui material components
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiSelect from "components/SuiSelect";

// NewProduct page components
import FormField from "./FormField";

function UserInfo() {
  const validationSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters !"),

    password_confirmation: yup
      .string()
      .required("Confirm Password is required !")
      .oneOf([yup.ref("password")], "Passwords must match !"),

    first_name: yup.string().required("first name is required!"),
    last_name: yup.string().required("last name is required!"),
    email: yup.string().email().required("Email is required!"),
    phone_number: yup
      .number()
      .min(10, "Invalid phone number, minium 10 numbers! ")
      .required("Phone number is required!"),
  });

  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();

  const [countryList, setCountryList] = useState(null);
  const match = useRouteMatch();

  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const [agreement, setAgreemnet] = useState(true);
  const handleSetAgremment = () => setAgreemnet(!agreement);

  const [ch, setCh] = useState(true);
  const handleSetCh = () => setCh(!ch);

  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
  });

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

  return (
    <SuiBox>
      <SuiTypography variant="h5">Add new user</SuiTypography>

      <SuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type="text"
              label="first name "
              placeholder="enter first name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type="text"
              label="last name"
              placeholder="enter last name "
            />
          </Grid>
        </Grid>
      </SuiBox>

      <SuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="email" placeholder="enter email" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type="text"
              label="phone number"
              placeholder="enter phone number"
            />
          </Grid>
        </Grid>
      </SuiBox>

      <SuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type="text"
              label="password"
              placeholder="enter password"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type="text"
              label="confirm password"
              placeholder="confirm your password"
            />
          </Grid>
        </Grid>
      </SuiBox>

      <SuiBox mt={2}>
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

          <SuiBox display="flex" justifyContent="center" alignItems="center">
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

          <SuiBox
            display="flex"
            width="100%"
            my={2}
            justifyContent="center"
            alignItems="center"
          >
            <SuiTypography
              component="a"
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
              component="a"
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

          <SuiBox display="flex" justifyContent="center" alignItems="center">
            <Checkbox checked={ch} onChange={handleSetCh} />
            <SuiTypography
              variant="button"
              fontWeight="regular"
              onClick={handleSetCh}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;I confirm that the information given in this form is
              true, complete and accurate."&nbsp;
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
            onClick={handleSubmit(addUser)}
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
    </SuiBox>
  );
}

export default UserInfo;
