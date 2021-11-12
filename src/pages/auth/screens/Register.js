import React, { useContext, useState } from "react";

import {
  Stack,
  Flex,
  Spacer,
  InputGroup,
  Box,
  Center,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";

import { Link, useHistory } from "react-router-dom";

import {
  RegularInput,
  PasswordInput,
  PrimaryButton,
  CheckBox,
} from "components";

import { AuthLayout } from "../AuthLayout";
import RegisterImage from "assets/images/register.jpg";
import { useForm } from "react-hook-form";

import { apiAuth } from "api";
import { UserDataContext } from "context";

export const Register = () => {
  const { tokenProviderValue } = useContext(UserDataContext);
  const { setUserToken } = tokenProviderValue;

  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState(null);
  const [loadingButton, setLoadingButton] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setError(null);
    setLoadingButton(true);
    const res = await apiAuth(data, "register");
    if (res.success) {
      if (data.rememberMe) {
        localStorage.setItem("token", res.token);
      } else {
        setUserToken(res.token);
      }
      history.push("/dashboard");
    } else {
      console.log(res.error);
      setError(res.error);
      setLoadingButton(false);
    }
  };

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
                  <Flex direction="column">
                    <RegularInput
                      placeHolder="First name"
                      inputType="text"
                      width="180px"
                      name="first_name"
                      register={register}
                      error={error?.errors?.first_name ? true : false}
                    />
                    {error?.errors?.first_name &&
                      error?.errors?.first_name.map((e) => (
                        <Text color="red" maxWidth="180px" textAlign="center">
                          {e}
                        </Text>
                      ))}
                  </Flex>
                  <Spacer />
                  <Flex direction="column">
                    <RegularInput
                      placeHolder="Last name"
                      inputType="text"
                      width="180px"
                      name="last_name"
                      register={register}
                      error={error?.errors?.last_name ? true : false}
                    />
                    {error?.errors?.last_name &&
                      error?.errors?.last_name.map((e) => (
                        <Text color="red" maxWidth="180px" textAlign="center">
                          {e}
                        </Text>
                      ))}
                  </Flex>
                </Flex>
                <Box>
                  <RegularInput
                    placeHolder="Email"
                    inputType="email"
                    name="email"
                    register={register}
                    error={error?.errors?.email ? true : false}
                  />
                  {error?.errors?.email &&
                    error?.errors?.email.map((e) => (
                      <Text color="red">{e}</Text>
                    ))}
                </Box>
                <PasswordInput
                  placeHolder="Password"
                  name="password"
                  register={register}
                  error={error?.errors?.password ? true : false}
                />
                <Box>
                  <PasswordInput
                    placeHolder="Confirm password"
                    name="password_confirmation"
                    register={register}
                    error={error?.errors?.password ? true : false}
                  />
                  {error?.errors?.password &&
                    error?.errors?.password.map((e) => (
                      <Text color="red">{e}</Text>
                    ))}
                </Box>
                <Box>
                  <InputGroup>
                    <InputLeftAddon
                      children="+966"
                      bgColor={"white"}
                      position={"absolute"}
                      zIndex={"10"}
                      borderRadius="25px"
                      borderColor={
                        error?.errors?.phone_number ? "red" : "#AEAEAE"
                      }
                      borderRightWidth="1px"
                      borderRightColor="#AEAEAE"
                    />
                    <RegularInput
                      placeHolder="Mobile"
                      inputType="tel"
                      name="phone_number"
                      register={register}
                      error={error?.errors?.phone_number ? true : false}
                    />
                  </InputGroup>
                  {error?.errors?.phone_number &&
                    error?.errors?.phone_number.map((e) => (
                      <Text color="red">{e}</Text>
                    ))}
                </Box>
                <Flex>
                  <Flex>
                    <CheckBox name="rememberMe" register={register} />
                  </Flex>
                  <Spacer />
                  <h1 className="text-CGrey text-base cursor-pointer select-none">
                    Forgot Password?
                  </h1>
                </Flex>

                <Flex>
                  <PrimaryButton
                    name="Register"
                    onClick={handleSubmit(onSubmit)}
                    loadingButton={loadingButton}
                    buttonType="submit"
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
