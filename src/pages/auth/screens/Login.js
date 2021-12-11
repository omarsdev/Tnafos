import React, { useState, useContext } from "react";

import { Stack, Flex, Spacer, Box, Center, Text } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";

import { UserDataContext } from "context";
import {
  RegularInput,
  PasswordInput,
  PrimaryButton,
  CheckBox,
} from "components";
import { AuthLayout } from "../AuthLayout";
import LoginImage from "assets/images/login.jpg";

import { apiAuth } from "../../../api";
import { AxiosInstance } from "api/AxiosInstance";

export const Login = () => {
  const { tokenProviderValue } = useContext(UserDataContext);
  const { setUserToken } = tokenProviderValue;

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const [companyInfo, setCompanyInfo] = useState(null);

  const [loadingButton, setLoadingButton] = useState(false);

  const showCompany = async () => {
    await AxiosInstance.get("/api/dashboard/company")
      .then((res) => {
        setCompanyInfo(res.data.data);
        let company = res.data.data;
        console.log(company);
        delete company.country;
        delete company.admin;
        delete company.category;
      })
      .catch((err) => {
        history.push("/dashboard/company");
      });
  };

  const handleLogin = async () => {
    setError(null);
    setLoadingButton(true);
    const res = await apiAuth({ password: password, email: email }, "login");

    if (res.success) {
      let maxAge = 7200;
      if (rememberMe) {
        maxAge = 1209600;
      }
      const auth_token = `tnafos_auth=${res.token}`;
      document.cookie =
        auth_token +
        // change it once in production
        ";samesite=lax;Secure;domain=127.0.0.1;" +
        "max-age=" +
        maxAge;
      setUserToken(res.token);
      history.push("/dashboard");
    } else {
      setError(res.error);
      setLoadingButton(false);
    }
  };

  return (
    <div>
      <AuthLayout BGImage={LoginImage}>
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <Stack spacing={4}>
            <h1 className="select-none text-4xl">Welcome Back!</h1>
            <h2 className="select-none text-3xl text-CPrimary">Sign in</h2>
            <RegularInput
              value={email}
              setValue={setEmail}
              placeHolder="Email"
              inputType="email"
            />
            <PasswordInput
              value={password}
              setValue={setPassword}
              placeHolder="Password"
            />
            <Flex>
              <Flex>
                <CheckBox
                  name="Remember me"
                  value={rememberMe}
                  setValue={setRememberMe}
                />
              </Flex>
              <Spacer />
              <h1 className="text-CGrey text-base cursor-pointer select-none">
                Forgot Password?
              </h1>
            </Flex>

            <Flex>
              <PrimaryButton
                name="Login"
                onClick={handleLogin}
                loadingButton={loadingButton}
                buttonType="submit"
              />
              <Spacer />

              <Link to="/register">
                <Box w="126px" color="black">
                  Dont have an account? Signup now! Its Free!
                </Box>
              </Link>
            </Flex>
            {error && (
              <Center>
                <Text className="text-red-600 text-xl">{error?.message}</Text>
              </Center>
            )}
          </Stack>
        </div>
      </AuthLayout>
    </div>
  );
};
