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
  RegularInputControl,
  PasswordInputControl,
} from "../../../components";

import { AuthLayout } from "../AuthLayout";
import RegisterImage from "../../../assets/images/register.jpg";
import { useForm } from "react-hook-form";

import { apiAuth } from "../../../api";
import { UserDataContext } from "../../../context";
import { setUserSession } from "../../../utils";

export const Register = () => {
  const { tokenProviderValue } = useContext(UserDataContext);
  const { setUserToken } = tokenProviderValue;

  const history = useHistory();

  const { register, handleSubmit, control } = useForm();

  const [error, setError] = useState(null);
  const [loadingButton, setLoadingButton] = useState(false);

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
      setUserToken(res.token);
      history.push("/dashboard/company/create");
    } else {
      setError(res.error.errors);
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
                      errors={error}
                    />
                  </Flex>
                  <Spacer />
                  <Flex direction="column">
                    <RegularInputControl
                      placeHolder="Last Name"
                      name="last_name"
                      control={control}
                      register={register}
                      width="180px"
                      errors={error}
                    />
                  </Flex>
                </Flex>
                <Box>
                  <RegularInputControl
                    placeHolder="Email"
                    name="email"
                    control={control}
                    register={register}
                    errors={error}
                  />
                </Box>
                <Box>
                  <PasswordInputControl
                    placeHolder="Password"
                    name="password"
                    control={control}
                    register={register}
                    errors={error}
                  />
                </Box>
                <Box>
                  <PasswordInputControl
                    control={control}
                    register={register}
                    placeHolder="Confirm password"
                    name="password_confirmation"
                    errors={error}
                  />
                </Box>
                <Box>
                  <InputGroup>
                    <InputLeftAddon
                      children="+966"
                      bgColor={"white"}
                      position={"absolute"}
                      zIndex={"10"}
                      borderRadius="25px"
                      borderColor={error?.phone_number ? "red" : "#AEAEAE"}
                      borderRightWidth="1px"
                      borderRightColor="#AEAEAE"
                    />
                    <RegularInputControl
                      placeHolder="Mobile"
                      name="phone_number"
                      control={control}
                      register={register}
                      inputType="tel"
                      errors={error}
                    />
                  </InputGroup>
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
