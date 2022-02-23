import React, { useState } from "react";

// react-router-dom components
import { Link, useHistory } from "react-router-dom";

// @mui material components
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from '@mui/material/CircularProgress';

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import IllustrationLayout from "../components/IllustrationLayout";

// Images
import RegisterCover from "assets/images/register.jpg";
import { useForm } from "react-hook-form";
import { Spinner } from "@chakra-ui/react";
import { apiAuth } from "api";
import { setUserSession } from "utils";
import { Typography } from "@mui/material";


const Register = () => {
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  const [agreement, setAgreemnet] = useState(true);
  const [error, setError] = useState(null);
  const [loadingButton, setLoadingButton] = useState(false);

  const handleSetAgremment = () => setAgreemnet(!agreement);

  const onSubmit = async (data) => {
    setError(null);
    setLoadingButton(true);
    const res = await apiAuth(data, "register");
    if (res.success) {
      let maxAge = 2;
      if (data.rememberMe) {
        maxAge = 365;
      }
      setUserSession(res.token, maxAge);
      history.push("/dashboard/company/create");
    } else {
      setError(res.error.errors);
      setLoadingButton(false);
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
      <SuiBox component="form" role="form" onSubmit={handleSubmit(onSubmit)}>
        <SuiBox mb={2} display="flex" flexDirection="row" width="100%">
          <SuiBox mr={1} width="100%">
            <SuiInput placeholder="First Name" size="large" {...register("first_name")} />
          </SuiBox>
          <SuiBox ml={1} width="100%">
            <SuiInput placeholder="Last Name" size="large" {...register("last_name")} />
          </SuiBox>
        </SuiBox>
        <SuiBox mb={2}>
          <SuiInput type="email" placeholder="Email" size="large" {...register("email")} />
        </SuiBox>
        <SuiBox mb={2}>
          <SuiInput type="number" placeholder="Phone Number" size="large" {...register("phone_number")} />
        </SuiBox>
        <SuiBox mb={2}>
          <SuiInput type="password" placeholder="Password" size="large" {...register("password")} />
        </SuiBox>
        <SuiBox mb={2}>
          <SuiInput type="password" placeholder="Confirm password" size="large" {...register("password_confirmation")} />
        </SuiBox>
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
            {loadingButton && (
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
      </SuiBox>
    </IllustrationLayout>
  )
}

export default Register