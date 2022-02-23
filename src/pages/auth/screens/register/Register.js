import React, { useState } from "react";

// react-router-dom components
import { Link, useHistory } from "react-router-dom";

import { Formik, Form, ErrorMessage, Field } from "formik";
import PropTypes from "prop-types";
// @mui material components
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from '@mui/material/CircularProgress';

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import IllustrationLayout from "../../components/IllustrationLayout";

// Images
import RegisterCover from "assets/images/register.jpg";
import { apiAuth } from "api";
import { setUserSession } from "utils";
import { Typography } from "@mui/material";

import { checkout, initialValue, validation } from "./schema/form"


const Register = () => {
  const { formId, formField } = checkout;

  const history = useHistory();

  const [agreement, setAgreemnet] = useState(true);

  const handleSetAgremment = () => setAgreemnet(!agreement);

  const handleSubmit = async (values, actions) => {
    const res = await apiAuth(values, "register");
    if (res.success) {
      let maxAge = 2;
      // if (values.rememberMe) {
      //   maxAge = 365;
      // }
      setUserSession(res.token, maxAge);
      history.push("/dashboard/company/create");
    } else {
      let error = {}
      for (const key in res.error.errors) {
        let msg = ''
        res.error.errors[key].forEach(element => {
          msg += element + " "
        });
        error[key] = msg;
      }
      actions.setErrors(error);
    }
  };

  return (
    <IllustrationLayout
      title="Sign Up"
      description="Enter your email and password to register"
      illustration={{
        image: RegisterCover,
        title: "Your journey starts here",
        description:
          "Just as it takes a company to sustain a product, it takes a community to sustain a protocol.",
      }}
    >
      <Formik
        initialValues={initialValue}
        validationSchema={validation[0]}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form id={formId} autoComplete="off">
            <FormData formData={{
              values,
              touched,
              formField,
              errors,
            }} />
            <SuiBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SuiTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SuiTypography>
              <SuiTypography component="a" href="#" variant="button" fontWeight="bold" textGradient>
                Terms and Conditions
              </SuiTypography>
            </SuiBox>
            <SuiBox mt={4} mb={1}>
              <SuiButton variant="gradient" color="info" size="large" fullWidth type="submit">
                Register
                {isSubmitting && (
                  <SuiBox ml={1}>
                    <CircularProgress size={20} />
                  </SuiBox>
                )}
              </SuiButton>
            </SuiBox>
            <SuiBox mt={3} textAlign="center">
              <SuiTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SuiTypography
                  component={Link}
                  to="login"
                  variant="button"
                  color="info"
                  fontWeight="bold"
                  textGradient
                >
                  Login
                </SuiTypography>
              </SuiTypography>
            </SuiBox>
          </Form>
        )}
      </Formik>
    </IllustrationLayout>
  )
}

const FormData = ({ formData }) => {
  const { formField, values, errors, touched } = formData;
  const { first_name, last_name, phone_number, email, password, password_confirmation } = formField;
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
      <SuiBox >
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
          error={errors.password_confirmation && touched.password_confirmation}
          success={passwordConfirmationV.length > 0 && !errors.password_confirmation}
        />
      </SuiBox>
    </>
  )
}

const FormField = ({ label, name, ...rest }) => {
  return (
    <SuiBox>
      <SuiBox ml={0.5} lineHeight={0} display="inline-block">
        <SuiTypography
          component="label"
          variant="caption"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {label}
        </SuiTypography>
      </SuiBox>
      <Field {...rest} name={name} as={SuiInput} />
      <SuiBox mt={0.5}>
        <SuiTypography component="div" variant="caption" color="error">
          <ErrorMessage name={name} />
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Register