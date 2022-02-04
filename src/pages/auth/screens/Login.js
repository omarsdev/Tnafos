import React, { useState, useContext } from "react";

import { Stack, Flex, Spacer, Box, Center, Text } from "@chakra-ui/react";
import { Link, useHistory, Redirect } from "react-router-dom";

import { UserDataContext } from "../../../context";
import {
  RegularInput,
  PasswordInput,
  PrimaryButton,
  CheckBox,
} from "../../../components";
import { AuthLayout } from "../AuthLayout";
import LoginImage from "../../../assets/images/login.jpg";

import { apiAuth } from "../../../api";
import { setUserSession } from "../../../utils";

const Login = () => {
  const { tokenProviderValue } = useContext(UserDataContext);
  const { setUserToken } = tokenProviderValue;

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const [loadingButton, setLoadingButton] = useState(false);

  const handleLogin = async () => {
    setError(null);
    setLoadingButton(true);
    const res = await apiAuth({ password: password, email: email }, "login");

    if (res.success) {
      let maxAge = 2;
      if (rememberMe) {
        maxAge = 365;
      }
      setUserSession(res.token, maxAge);
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
        <Flex
          w="100%"
          h="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Stack spacing={4}>
            <Text userSelect="none" fontSize="2.25rem" lineHeight="2.5rem">
              Welcome Back!
            </Text>
            <Text
              userSelect="none"
              fontSize="1.875rem"
              lineHeight="2.25rem"
              color="brand.primary"
            >
              Sign in
            </Text>
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
              <Text
                color="brand.grey"
                fontSize="1rem"
                lineHeight="1.5rem"
                cursor="pointer"
                userSelect="none"
              >
                Forgot Password?
              </Text>
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
                <Text color="red.500" fontSize="1.25rem" lineHeight="1.75rem">
                  {error?.message}
                </Text>
              </Center>
            )}
          </Stack>
        </Flex>
      </AuthLayout>
    </div>
  );
};

export default Login;
