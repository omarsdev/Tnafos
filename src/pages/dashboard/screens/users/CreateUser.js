import { Heading, Box, HStack, Checkbox, Text, Spacer } from "@chakra-ui/react";
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

export const CreateUser = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const setAlert = alertProviderValue;

  const history = useHistory();
  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const [photo, setPhoto] = useState(null);
  let inputRef = useRef();

  //* form validation rules
  const validationSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters !")
      .matches(RegExp("(.*[a-z].*)"), "Lowercase")
      .matches(RegExp("(.*[A-Z].*)"), "at least one Uppercase character")
      .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "Special")
      .matches(RegExp("(.*\\d.*)"), "Number"),

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

  //* get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  //* select photo for upload function:
  const fileSelectHandler = (ev) => {
    console.log(ev.target.files[0]);
    setPhoto(ev.target.files[0]);
  };

  //* photoUpload function:
  const photoUploadHandler = async () => {
    inputRef.current.onChange((e) => fileSelectHandler(e));
    if (fileSelectHandler) {
      await AxiosInstance.post("/api/dashboard/media/store", photo).then(
        (res) => {
          console.log(res.data);
          setAlert({
            message: "photo has been uploaded",
            type: "info",
          }).catch((error) => {
            console.log(error.response.data);
          });
        }
      );
    }
  };

  //* onSubmit function:
  const addUser = async (userData) => {
    setIsUpdating(true);
    await AxiosInstance.post("/api/dashboard/user/create", userData)
      .then((res) => {
        setIsUpdating(false);
        setAlert({
          message: "New user has been added!",
          type: "success",
        });
        history.push("/dashboard/user");
      })
      .catch((error) => {
        setIsUpdating(false);
        console.log(error);
        setErr(error);
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
    <Box borderRadius="lg" borderWidth="1px" boxSize="2xl" px="20" pt="5">
      <HStack>
        <Heading
          color="#F8B916"
          fontSize="x-large"
          fontWeight="lg"
          alignItems="baseline"
        >
          Add user
        </Heading>

        <Spacer />
        <input
          type="file"
          onChange={(ev) => fileSelectHandler(ev)}
          style={{ display: "none" }}
          ref={inputRef}
        />
        <SecondaryButton
          onClick={handleSubmit(photoUploadHandler)}
          name="Upload photo"
          buttonType="file"
          rounded="lg"
          width="120px"
          height="30px"
        />
      </HStack>
      <form>
        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            First Name :
            <RegularInput
              placeHolder="first name"
              inputType="text"
              width="180px"
              name="first_name"
              register={register}
              width="100%"
              error={err?.first_name ? true : false}
            />
            {err && err?.first_name && (
              <Text className="text-left" color="red">
                {err?.first_name}
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
              width="180px"
              name="last_name"
              register={register}
              width="100%"
              error={err?.last_name ? true : false}
            />
            {err && err?.last_name && (
              <Text className="text-left" color="red">
                {err?.last_name}
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
              width="180px"
              name="email"
              register={register}
              width="100%"
              error={err?.email ? true : false}
            />
            {err && err?.email && (
              <Text className="text-left" color="red">
                {err?.email}
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
              name="password"
              register={register}
              error={err?.password ? true : false}
            />
            {err && err?.password && (
              <Text className="text-left" color="red">
                {err?.password}
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
              name="password_confirmation"
              register={register}
              error={err?.password_confirmation ? true : false}
            />
            {err && err?.password_confirmation && (
              <Text className="text-left" color="red">
                {err?.password_confirmation}
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
              name="phone_number"
              register={register}
              width="100%"
              error={err?.phone_number ? true : false}
            />
            {err && err?.phone_number && (
              <Text className="text-left" color="red">
                {err?.phone_number}
              </Text>
            )}
          </label>
        </Box>

        <Box className="flex flex-col items-center gap-2">
          <Heading fontSize="md" color="gray.500" fontWeight="normal">
            Terms and Conditions agreement
          </Heading>
          <Checkbox size="sm" colorScheme="blue" required>
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
            <Heading fontSize="md" color="gray.500" fontWeight="normal">
              Decleration of Valid Information
            </Heading>
          </Box>
          <Checkbox required>
            I confirm that the information given in this form is true, complete
            and accurate.
          </Checkbox>

          <HStack spacing="10px">
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
    </Box>
  );
};
