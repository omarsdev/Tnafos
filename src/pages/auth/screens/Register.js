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
import { RegularInputControl } from "components";
import { PasswordInputControl } from "components";

export const Register = () => {
  const { tokenProviderValue } = useContext(UserDataContext);
  const { setUserToken } = tokenProviderValue;

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [error, setError] = useState(null);
  const [loadingButton, setLoadingButton] = useState(false);

  const onSubmit = async (data) => {
    setError(null);
    setLoadingButton(true);
    const res = await apiAuth(data, "register");
    if (res.success) {
      if (data.rememberMe) {
        localStorage.setItem("token", res.token);
      } else {
        setUserToken(res.token);
      }
      history.push("/dashboard/company/create");
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
                    <RegularInputControl
                      placeHolder="First Name"
                      name="first_name"
                      control={control}
                      register={register}
                      width="180px"
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
                    <RegularInputControl
                      placeHolder="Last Name"
                      name="last_name"
                      control={control}
                      register={register}
                      width="180px"
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
                  <RegularInputControl
                    placeHolder="Email"
                    name="email"
                    control={control}
                    register={register}
                    error={error?.errors?.email ? true : false}
                  />
                  {error?.errors?.email &&
                    error?.errors?.email.map((e) => (
                      <Text color="red">{e}</Text>
                    ))}
                </Box>
                <PasswordInputControl
                  placeHolder="Password"
                  name="password"
                  control={control}
                  register={register}
                  error={error?.errors?.password ? true : false}
                />
                <Box>
                  <PasswordInputControl
                    control={control}
                    register={register}
                    placeHolder="Confirm password"
                    name="password_confirmation"
                    error={error?.errors?.password_confirmation ? true : false}
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
                    <RegularInputControl
                      placeHolder="Mobile"
                      name="phone_number"
                      control={control}
                      register={register}
                      inputType="tel"
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
