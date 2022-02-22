import React from "react";
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

import { useState, useEffect, useContext } from "react";

import { useHistory, useRouteMatch } from "react-router-dom";
// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

// CreateUser page components
import UserInfo from "layouts/pages/users/new-user/components/UserInfo";

// CreateUser layout schemas for form and form feilds
import validations from "layouts/pages/users/new-user/schemas/validations";
import form from "layouts/pages/users/new-user/schemas/form";
import initialValues from "layouts/pages/users/new-user/schemas/initialValues";

import { AxiosInstance } from "../../../../api";
import { AlertContext } from "../../../../context";

const getSteps = () => {
  return ["User Info"];
};

// const getStepContent = (stepIndex, userData) => {
//   switch (stepIndex) {
//     case 0:
//       return <UserInfo userData={userData} />;
//     case 1:
//       return <Address formData={formData} />;
//     case 2:
//       return <Socials formData={formData} />;
//     case 3:
//       return <Profile formData={formData} />;
//     default:
//       return null;
//   }
// };

const CreateUser = () => {
  const [activeStep, setActiveStep] = useState(0);
  //   const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  //   const isLastStep = activeStep === steps.length - 1;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleBack = () => setActiveStep(activeStep - 1);

  const history = useHistory();

  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const [countryList, setCountryList] = useState(null);
  const match = useRouteMatch();

  const [isUpdating, setIsUpdating] = useState(false);

  const [checked, setChecked] = useState(false);
  const [ch, setCh] = useState(false);

  const submitForm = async (values, actions) => {
    await sleep(1000);

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));

    actions.setSubmitting(false);
    actions.resetForm();

    setActiveStep(0);
  };

  const addUser = async (values, actions, userData) => {
    try {
      setIsUpdating(true);
      const res = await AxiosInstance.post(
        "/api/dashboard/user/create",
        userData
      );
      submitForm(values, actions);
      setAlert({
        message: `New user has been added!`,
        type: "success",
      });
      history.push("/dashboard/user");
    } catch (error) {
      console.log(error.response.data);
      //   setErr(error.response.data.errors);
      actions.setTouched({});
      actions.setSubmitting(false);
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
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3} mb={20}>
        <Grid container justifyContent="center" className="h-100">
          <Grid item xs={12} lg={8}>
            {/* <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper> */}
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={addUser}
            >
              {({ values, errors, touched, isSubmitting, userData }) => (
                <Form id={formId} autoComplete="off">
                  <Card className="h-100">
                    <UserInfo userData={userData} />
                    {/* <SuiBox p={2}>
                      <SuiBox>
                        {getStepContent(activeStep, {
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
                          {activeStep === 0 ? (
                            <SuiBox />
                          ) : (
                            <SuiButton
                              variant="gradient"
                              buttonColor="light"
                              onClick={handleBack}
                            >
                              back
                            </SuiButton>
                          )}
                          <SuiButton
                            disabled={isSubmitting}
                            type="submit"
                            variant="gradient"
                            buttonColor="dark"
                          >
                            {isLastStep ? "send" : "next"}
                          </SuiButton>
                        </SuiBox>
                      </SuiBox>
                    </SuiBox> */}
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </SuiBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
};

export default CreateUser;
