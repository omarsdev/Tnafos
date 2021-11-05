import React, { useState } from "react";

import { Stack, Flex, Spacer, Icon, Box } from "@chakra-ui/react";

import {
  RegularInput,
  PasswordInput,
  PrimaryButton,
  SecondaryButton,
  CheckBox,
} from "components";

import { Link, useRouteMatch } from "react-router-dom";

import { AuthStructure } from "./components/AuthStructure";
import LoginImage from "assets/images/login.jpg";

export const Login = () => {
  const match = useRouteMatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log(email, password, rememberMe);
  };

  return (
    <div>
      <AuthStructure BGImage={LoginImage}>
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
              <PrimaryButton name="Login" onClick={handleLogin} />
              <Spacer />

              <Link to="/register">
                <Box w="126px" color="black">
                  Dont have an account? Signup now! Its Free!
                </Box>
              </Link>
            </Flex>
          </Stack>
        </div>
      </AuthStructure>
    </div>
  );
};
