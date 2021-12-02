import {
  Heading,
  Box,
  HStack,
  Checkbox,
  Text,
  Spacer,
  Center,
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  //* select photo for upload function:
  // const fileSelectHandler = (ev) => {
  //   console.log(ev.target.files[0]);
  //   setPhoto(ev.target.files[0]);
  // };
  const handleFileInput = (e) => {
    setPhoto(e.target.files[0]);
  };

  const chooseFile = () => {};

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
    console.log(userData);
    console.log(errors);
    // setIsUpdating(true);
    // await AxiosInstance.post("/api/dashboard/user/create", userData)
    //   .then((res) => {
    //     setIsUpdating(false);
    //     setAlert({
    //       message: "New user has been added!",
    //       type: "success",
    //     });
    //     history.push("/dashboard/user");
    //   })
    //   .catch((error) => {
    //     setIsUpdating(false);
    //     console.log(error);
    //     setErr(error);
    //     setAlert({
    //       message: `${error?.response?.data}`,
    //       type: "error",
    //     });
    //   });
  };

  const handleCancel = () => {
    // history.push("/dashboard/user");
    // console.log(errors);
    setAlert({
      message: `error message`,
      type: "success",
    });
  };

  return (
    <Box overflowY="scroll" w="full" px="20" pt="5">
      {/* <HStack className="px-52 ">
        <Heading
          color="#F8B916"
          fontSize="3xl"
          fontWeight="lg"
          alignItems="baseline"
        >
          Add user
        </Heading>

        <Spacer />
        <input
          type="file"
          onChange={(ev) => handleFileInput(ev)}
          // style={{ display: "none" }}
          ref={inputRef}
        />
        <SecondaryButton
          onClick={photoUploadHandler}
          name="Upload photo"
          buttonType="file"
          rounded="lg"
          width="120px"
          height="30px"
        />
        <SecondaryButton
          onClick={(e) => inputRef.current && inputRef.current.click()}
          name="Choose photo"
          buttonType="file"
          rounded="lg"
          width="120px"
          height="30px"
        />
      </HStack> */}
      <Center pt="10">
        <form>
          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 ">
              First Name :
              <RegularInput
                placeHolder="first name"
                inputType="text"
                width="180px"
                register={register("first_name")}
                width="100%"
                error={errors?.first_name?.message ? true : false}
              />
              {errors && errors?.first_name && (
                <Text className="text-left" color="red">
                  {errors?.first_name?.message}
                </Text>
              )}
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 ">
              Last Name :
              <RegularInput
                placeHolder="last name"
                inputType="text"
                width="100%"
                error={errors?.last_name ? true : false}
                register={register("last_name")}
              />
              {errors && errors?.last_name && (
                <Text className="text-left" color="red">
                  {errors?.last_name?.message}
                </Text>
              )}
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 ">
              Email :
              <RegularInput
                placeHolder="Enter email"
                inputType="text"
                width="100%"
                error={errors?.email ? true : false}
                register={register("email")}
              />
              {errors && errors?.email && (
                <Text className="text-left" color="red">
                  {errors?.email.message}
                </Text>
              )}
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 ">
              Password :
              <PasswordInput
                placeHolder="password"
                inputType="password"
                // name="password"
                // register={register}
                error={errors?.password ? true : false}
                register={register("password")}
              />
              {errors && errors?.password && (
                <Text className="text-left" color="red">
                  {errors?.password?.message}
                </Text>
              )}
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 ">
              Confirm Password :
              <PasswordInput
                placeHolder="confirm your password"
                inputType="password"
                // name="password_confirmation"
                // register={register}
                error={errors?.password_confirmation ? true : false}
                register={register("password_confirmation")}
              />
              {errors && errors?.password_confirmation?.message && (
                <Text className="text-left" color="red">
                  {errors?.password_confirmation?.message}
                </Text>
              )}
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 ">
              Phone Number :
              <RegularInput
                placeHolder="phone number"
                inputType="number"
                width="180px"
                // name="phone_number"
                // register={register}
                width="100%"
                error={errors?.phone_number ? true : false}
                register={register("phone_number")}
              />
              {errors && errors?.phone_number && (
                <Text className="text-left" color="red">
                  {errors?.phone_number?.message}
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
              <Link to="#" className="text-blue-700 hover:underline">
                <Text>terms of service</Text>
              </Link>{" "}
              <Text>and</Text>
              <Link className="text-blue-700 hover:underline">
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
        <button onClick={handleCancel}>Alert</button>
      </Center>
    </Box>
  );
};
