import React, { useState } from 'react'

// react-router-dom components
import { Link, useHistory } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import IllustrationLayout from "../components/IllustrationLayout";

// Image
import LoginCover from "assets/images/login.jpg";
import { apiAuth } from 'api';
import { setUserSession } from 'utils';

const Login = () => {
  const history = useHistory();

  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [loadingButton, setLoadingButton] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const onChangeInput = (e) => {
    const newData = { ...loginData }
    newData[e.target.id] = e.target.value;
    setLoginData(newData)
  }

  const loginHandler = async () => {
    setError(null);
    setLoadingButton(true);
    const res = await apiAuth(loginData, "login");

    if (res.success) {
      let maxAge = 2;
      if (rememberMe) {
        maxAge = 365;
      }
      setUserSession(res.token, maxAge);
      history.push("/dashboard");
    } else {
      setError(res.error);
      setLoadingButton(false);
    }
  }

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: LoginCover,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <SuiBox component="form" role="form">
        <SuiBox mb={2}>
          <SuiInput id="email" type="email" placeholder="Email" size="large" onChange={onChangeInput} />
        </SuiBox>
        <SuiBox mb={2}>
          <SuiInput id="password" type="password" placeholder="Password" size="large" onChange={onChangeInput} />
        </SuiBox>
        <SuiBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SuiTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SuiTypography>
        </SuiBox>
        <SuiBox mt={4} mb={1}>
          <SuiButton variant="gradient" color="info" size="large" fullWidth onClick={loginHandler}>
            Login
          </SuiButton>
        </SuiBox>
        <SuiBox mt={3} textAlign="center">
          <SuiTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SuiTypography
              component={Link}
              to="/register"
              variant="button"
              color="info"
              fontWeight="bold"
              textGradient
            >
              Register
            </SuiTypography>
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </IllustrationLayout>
  )
}

export default Login