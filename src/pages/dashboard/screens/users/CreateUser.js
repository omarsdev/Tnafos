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
import { useHistory, useRouteMatch } from "react-router-dom";
import { AlertContext } from "../../../../context";
import { AxiosInstance } from "../../../../api";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";

// NewUser page components
import UserInfo from "./components/UserInfo";

// NewUser layout schemas for form and form feilds
import validations from "layouts/pages/users/new-user/schemas/validations";
import form from "layouts/pages/users/new-user/schemas/form";
import initialValues from "layouts/pages/users/new-user/schemas/initialValues";

const getSteps = () => {
  return ["User Info"];
};

const getStepContent = (formData) => {
  return <UserInfo formData={formData} />;
};

const CreateUser = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();

  const [countryList, setCountryList] = useState(null);
  const match = useRouteMatch();

  //   const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const [checked, setChecked] = useState(false);
  const [ch, setCh] = useState(false);

  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const addUser = async (userData, values, actions) => {
    try {
      setIsUpdating(true);
      //   submitForm(values, actions);
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
      //   setErr(error.response.data.errors);
      setAlert({
        message: `${error.response.data.message}`,
        type: "error",
      });
      actions.setTouched({});
      actions.setSubmitting(false);
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

  return countryList ? (
    <SuiBox py={3} mb={20}>
      <Grid container justifyContent="center" className="h-100">
        <Grid item xs={12} lg={8}>
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidation}
            onSubmit={addUser}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form id={formId} autoComplete="off">
                <Card className="h-100">
                  <SuiBox p={2}>
                    <SuiBox>
                      {getStepContent({
                        values,
                        touched,
                        formField,
                        errors,
                      })}
                      <SuiBox
                        mt={2}
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                      >
                        <SuiButton
                          disabled={isSubmitting}
                          type="submit"
                          variant="gradient"
                          buttonColor="dark"
                          onClick={addUser}
                        >
                          add user
                        </SuiButton>
                        <SuiButton
                          disabled={isSubmitting}
                          type="submit"
                          variant="gradient"
                          buttonColor="dark"
                          onClick={handleCancel}
                        >
                          Cancel
                        </SuiButton>
                      </SuiBox>
                    </SuiBox>
                  </SuiBox>
                </Card>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </SuiBox>
  ) : null;
};

export default CreateUser;
