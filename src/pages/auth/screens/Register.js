import React, { useState } from "react";

import {
  Stack,
  Flex,
  Spacer,
  InputGroup,
  Box,
  Center,
  InputLeftAddon,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import {
  RegularInput,
  PasswordInput,
  PrimaryButton,
  CheckBox,
} from "components";

import { AuthLayout } from "../AuthLayout";
import RegisterImage from "assets/images/register.jpg";
import { useForm } from "react-hook-form";

export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleRegister = (data) => {};

  return (
    <div>
      <AuthLayout BGImage={RegisterImage}>
        <Center h="100vh">
          <Stack spacing={4}>
            <h1 className="select-none text-4xl">Ready To</h1>
            <h2 className="select-none text-3xl text-CPrimary">Signup</h2>
            <form>
              <Stack spacing={4}>
                <Flex>
                  <RegularInput
                    placeHolder="First name"
                    inputType="text"
                    width="180px"
                    name="firstName"
                    register={register}
                  />
                  <Spacer />
                  <RegularInput
                    placeHolder="Last name"
                    inputType="text"
                    width="180px"
                    name="lastName"
                    register={register}
                  />
                </Flex>
                <RegularInput
                  placeHolder="Email"
                  inputType="email"
                  name="email"
                  register={register}
                />
                <PasswordInput
                  placeHolder="Password"
                  name="password"
                  register={register}
                />
                <PasswordInput
                  placeHolder="Confirm password"
                  name="confirm_password"
                  register={register}
                />
                <InputGroup>
                  <InputLeftAddon
                    children="+966"
                    bgColor={"white"}
                    position={"absolute"}
                    zIndex={"10"}
                    borderRadius="25px"
                    borderColor={"#AEAEAE"}
                    _focus={{
                      borderColor: "#F8B916",
                    }}
                  />
                  <RegularInput
                    placeHolder="Mobile"
                    inputType="tel"
                    name="mobile"
                    register={register}
                  />
                </InputGroup>

                <Flex>
                  <Flex>
                    <CheckBox name="Remember me" register={register} />
                  </Flex>
                  <Spacer />
                  <h1 className="text-CGrey text-base cursor-pointer select-none">
                    Forgot Password?
                  </h1>
                </Flex>

                <Flex>
                  <PrimaryButton
                    name="Register"
                    buttonType="submit"
                    onClick={handleSubmit(onSubmit)}
                  />
                  <Spacer />

                  <Link to="/login">
                    <Box w="126px" color="black">
                      have an account? Login form here
                    </Box>
                  </Link>
                </Flex>
              </Stack>
            </form>
          </Stack>
        </Center>
      </AuthLayout>
    </div>
  );
};
