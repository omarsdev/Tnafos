import React, { useState, useContext, useRef, useEffect } from "react";
import {
  Heading,
  Box,
  HStack,
  Flex,
  Text,
  Spacer,
  Center,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { CustomAddForm } from "../../components";

import { AlertContext } from "../../../../context";
import {
  PrimaryButton,
  SecondaryButton,
  CheckBox,
} from "../../../../components";
import { AxiosInstance } from "../../../../api";

const CreateUser = () => {
  const validationSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters !"),

    password_confirmation: yup
      .string()
      .required("Confirm Password is required !")
      .oneOf([yup.ref("password")], "Passwords must match !"),

    first_name: yup.string().required("first name is required!"),
    last_name: yup.string().required("last name is required!"),
    email: yup.string().email().required("Email is required!"),
    phone_number: yup
      .number()
      .min(10, "Invalid phone number, minium 10 numbers! ")
      .required("Phone number is required!"),
  });

  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();

  const [countryList, setCountryList] = useState(null);
  const match = useRouteMatch();

  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const [checked, setChecked] = useState(false);
  const [ch, setCh] = useState(false);

  const [photo, setPhoto] = useState(null);
  let inputRef = useRef(null);

  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFileInput = (e) => {
    setPhoto(e.target.files[0]);
  };

  const addUser = async (userData) => {
    try {
      setIsUpdating(true);
      const res = await AxiosInstance.post(
        "/api/dashboard/user/create",
        userData
      );
      setAlert({
        message: `New user has been added!`,
        type: "success",
      });
      history.push("/dashboard/user");
    } catch (error) {
      console.log(error.response.data);
      setErr(error.response.data.errors);
      setAlert({
        message: `${error.response.data.message}`,
        type: "error",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/user");
  };

  const getAllCountry = async () => {
    try {
      const res = await AxiosInstance.get("/api/country");
      setCountryList(res.data.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getAllCountry();
  }, []);

  return countryList ? (
    <Box overflowY="scroll" w="full">
      <Box
        px={{ base: 1, md: 2 }}
        mt={{ base: 1, md: 3 }}
        boxShadow="2xl"
        rounded="3xl"
        w={{ base: 230, sm: 340, md: 550, lg: 700 }}
        ml={{ base: 2, sm: 16, md: 16, lg: 24 }}
        bg="white"
      >
        <Heading
          color="#F8B916"
          fontSize={{ base: "large", md: "x-large", lg: "xx-large" }}
          fontWeight="lg"
          alignItems="baseline"
          pt={{ base: 4, sm: 8, md: 6, lg: 8 }}
          ml={{ base: 2, sm: 4, md: 4, lg: 6 }}
        >
          Add user
        </Heading>
        <Center mx={{ base: "2%", md: "5%" }}>
          <form>
            <CustomAddForm
              listForm={[
                {
                  head: "First name : ",
                  placeHolder: "Enter first name : ",
                  name: "first_name",
                  err: err,
                },
                {
                  head: "Last name : ",
                  placeHolder: "Enter last name : ",
                  name: "last_name",
                  err: err,
                },
                {
                  head: "Email : ",
                  placeHolder: "Enter email : ",
                  name: "email",
                  err: err,
                },
                {
                  head: "Password : ",
                  placeHolder: "Enter password : ",
                  name: "password",
                  err: err,
                  isPassword: true,
                },
                {
                  head: "Confirm Password : ",
                  placeHolder: "confirm your password",
                  name: "password_confirmation",
                  err: err,
                  isPassword: true,
                },
                {
                  head: "Phone Number : ",
                  placeHolder: "enter phone number",
                  name: "phone_number",
                  err: err,
                },
                {
                  head: "Country Code : ",
                  placeHolder: "Select Country Code : ex SA",
                  name: "country_code",
                  err: err,
                  isSelect: true,
                  optionList: countryList,
                  value: "short_name",
                  key: "uuid",
                  displayValue: "short_name",
                },
              ]}
              control={control}
              register={register}
            />

            <VStack
              flex
              flexDirection="column"
              justify="center"
              mt={{ base: 4, md: 6, lg: 6 }}
              ml={{ base: 12, md: 20, lg: 24 }}
            >
              <Heading
                fontSize={{
                  base: "small",
                  sm: "small",
                  md: "md",
                  lg: "large",
                }}
                color="grey"
                fontWeight="normal"
              >
                Terms and Conditions agreement
              </Heading>
              <CheckBox
                name="I agree to Tnafos"
                value={checked}
                setValue={setChecked}
              />

              <HStack justify="center">
                <Link to="/">
                  <Text
                    fontSize={{
                      base: "xx-small",
                      sm: "x-small",
                      md: "small",
                      lg: "md",
                    }}
                  >
                    terms of service
                  </Text>
                </Link>{" "}
                <Text
                  fontSize={{
                    base: "xx-small",
                    sm: "x-small",
                    md: "small",
                    lg: "md",
                  }}
                >
                  and
                </Text>
                <Link to="/">
                  <Text
                    fontSize={{
                      base: "xx-small",
                      sm: "x-small",
                      md: "small",
                      lg: "md",
                    }}
                  >
                    Privacy policy
                  </Text>
                </Link>
              </HStack>

              <Heading
                color="grey"
                fontWeight="normal"
                fontSize={{
                  base: "small",
                  sm: "small",
                  md: "md",
                  lg: "large",
                }}
              >
                Decleration of Valid Information
              </Heading>
              <CheckBox
                name="I confirm that the information given in this form is true,
            complete and accurate."
                value={ch}
                setValue={setCh}
              />

              <HStack spacing="10px" py={{ base: 2, md: 4, lg: 8 }}>
                <PrimaryButton
                  name="SAVE"
                  onClick={handleSubmit(addUser)}
                  loadingButton={isUpdating}
                  width={{ base: 20, sm: 20, md: 32, lg: 36 }}
                  height={{ base: 8, md: 12 }}
                  fontSize={{
                    base: "xx-small",
                    sm: "xx-small",
                    md: "sm",
                    lg: "md",
                  }}
                />

                <SecondaryButton
                  onClick={handleCancel}
                  name="CANCEL"
                  width={{ base: 20, sm: 20, md: 32, lg: 36 }}
                  height={{ base: 8, md: 12 }}
                  fontSize={{
                    base: "xx-small",
                    sm: "xx-small",
                    md: "sm",
                    lg: "md",
                  }}
                />
              </HStack>
            </VStack>
          </form>
        </Center>
      </Box>
    </Box>
  ) : (
    <Center h="100vh" w="100%">
      <Spinner size={{ base: "small", md: "md", lg: "xl" }} color="#F8B916" />
    </Center>
  );
};

export default CreateUser;
