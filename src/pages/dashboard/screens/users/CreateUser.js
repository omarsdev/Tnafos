import {
  Heading,
  Box,
  HStack,
  Checkbox,
  Text,
  Spacer,
  Center,
  Stack,
} from "@chakra-ui/react";
import React, { useState, useContext, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

import { AxiosInstance } from "api/AxiosInstance";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AlertContext } from "context";

import {
  RegularInput,
  PrimaryButton,
  PasswordInput,
  SecondaryButton,
} from "components";

const validationSchema = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters !"),
  //   .matches(RegExp("(.*[a-z].*)"), "Lowercase")
  //   .matches(RegExp("(.*[A-Z].*)"), "at least one Uppercase character")
  //   .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "Special")
  //   .matches(RegExp("(.*\\d.*)"), "Number"),

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
export const CreateUser = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const setAlert = alertProviderValue;

  const history = useHistory();
  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [photo, setPhoto] = useState(null);
  let inputRef = useRef(null);

  //* form validation rules

  //* get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  //* select photo for upload function:
  const handleFileInput = (e) => {
    setPhoto(e.target.files[0]);
  };

  //* photoUpload function:
  const photoUploadHandler = async () => {
    //   const formData = new FormData();
    // formData.append("name", name);
    // formData.append("file", selectedFile);
    // console.log("Works");
    // inputRef.current.onChange((e) => fileSelectHandler(e));
    // if (fileSelectHandler) {
    //   await AxiosInstance.post("/api/dashboard/media/store", photo)
    //     .then((res) => {
    //       console.log(res.data);
    //       setAlert({
    //         message: "photo has been uploaded",
    //         type: "info",
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error.response.data);
    //     });
    // }
  };

  //* onSubmit function:
  const addUser = async (userData) => {
    // console.log(userData);
    // console.log(err);

    await AxiosInstance.post("/api/dashboard/user/create", userData)
      .then((res) => {
        history.push("/dashboard/user");
        setAlert({
          message: `New user has been added!`,
          type: "success",
        });
      })
      .catch((error) => {
        setErr(error.response.data);
        setAlert({
          message: `${error?.response?.data}`,
          type: "error",
        });
      });
  };

  const handleCancel = () => {
    history.push("/dashboard/user");
  };

  return (
    <Box overflowY="scroll" w="full" px="20" pt="5">
      <Heading
        color="#F8B916"
        fontSize="3xl"
        fontWeight="lg"
        alignItems="baseline"
        pl="56"
      >
        Add user
      </Heading>

      <HStack className="pt-10 w-full flex pl-56 " spacing="20px">
        <input
          type="file"
          onChange={(ev) => handleFileInput(ev)}
          ref={inputRef}
        />

        <SecondaryButton onClick={photoUploadHandler} name="Upload photo" />
      </HStack>
      <Center>
        <form>
          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 ">
              First Name :
              <RegularInput
                placeHolder="first name"
                inputtype="text"
                width="180px"
                register={register("first_name")}
                width="100%"
                error={err?.first_name?.message ? true : false}
              />
              {err && err?.first_name && (
                <Text className="text-left" color="red">
                  {err?.first_name?.message}
                </Text>
              )}
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 ">
              Last Name :
              <RegularInput
                placeHolder="last name"
                inputtype="text"
                width="100%"
                error={err?.last_name ? true : false}
                register={register("last_name")}
              />
              {err && err?.last_name && (
                <Text className="text-left" color="red">
                  {err?.last_name?.message}
                </Text>
              )}
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 ">
              Email :
              <RegularInput
                placeHolder="Enter email"
                inputtype="text"
                width="100%"
                error={err?.email ? true : false}
                register={register("email")}
              />
              {err && err?.email && (
                <Text className="text-left" color="red">
                  {err?.email.message}
                </Text>
              )}
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 ">
              Password :
              <PasswordInput
                placeHolder="password"
                className="w-64"
                error={err?.password ? true : false}
                register={register("password")}
              />
              {err && err?.password && (
                <Text className="text-left" color="red">
                  {err?.password?.message}
                </Text>
              )}
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 ">
              Confirm Password :
              <PasswordInput
                placeHolder="confirm your password"
                inputtype="password"
                width="100%"
                error={err?.password_confirmation ? true : false}
                register={register("password_confirmation")}
              />
              {err && err?.password_confirmation?.message && (
                <Text className="text-left" color="red">
                  {err?.password_confirmation?.message}
                </Text>
              )}
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 ">
              Phone Number :
              <RegularInput
                placeHolder="phone number"
                inputtype="number"
                width="381px"
                width="100%"
                error={err?.phone_number ? true : false}
                register={register("phone_number")}
              />
              {err && err?.phone_number && (
                <Text className="text-left" color="red">
                  {err?.phone_number?.message}
                </Text>
              )}
            </label>
          </Box>

          <Box className="flex flex-col items-center gap-2 mt-5">
            <Heading fontSize="2xl" color="gray.500" fontWeight="normal">
              Terms and Conditions agreement
            </Heading>
            <Checkbox colorScheme="blue" required>
              I agree to Tnafos
            </Checkbox>
            <HStack>
              <Link to="/" className="text-blue-700 hover:underline">
                <Text>terms of service</Text>
              </Link>{" "}
              <Text>and</Text>
              <Link to="/" className="text-blue-700 hover:underline">
                Privacy policy
              </Link>
            </HStack>
            <Box>
              <Heading fontSize="2xl" color="gray.500" fontWeight="normal">
                Decleration of Valid Information
              </Heading>
            </Box>
            <Checkbox required>
              I confirm that the information given in this form is true,
              complete and accurate.
            </Checkbox>

            <HStack spacing="10px" py="5">
              <PrimaryButton
                buttonType="submit"
                name="SAVE"
                onClick={handleSubmit(addUser)}
                loadingButton={isUpdating}
              />

              <SecondaryButton onClick={handleCancel} name="CANCEL" />
            </HStack>
          </Box>
        </form>
        {/* <button onClick={handleCancel}>Alert</button> */}
      </Center>
    </Box>
  );
};
