import { Heading, Box, HStack, Checkbox, Text, Spacer } from "@chakra-ui/react";
import React, { useState, useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { AxiosInstance } from "api/AxiosInstance";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AlertContext } from "context";

import { RegularInput, PrimaryButton } from "components";
import { SecondaryButton } from "components";

export const CreateUser = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const setAlert = alertProviderValue;

  const history = useHistory();
  const [err, setErr] = useState(null);

  const [photo, setPhoto] = useState(null);
  let inputRef = useRef();

  //* form validation rules
  const validationSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters !"),
    password_confirmation: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match !"),
  });

  //* get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const fileSelectHandler = (ev) => {
    console.log(ev.target.files[0]);
    setPhoto(ev.target.files[0]);
  };

  //* photoUpload function:
  const photoUploadHandler = async () => {
    inputRef.current.onChange((e) => fileSelectHandler(e));
    if (fileSelectHandler) {
      await AxiosInstance.post("api/dashboard/media/store", photo).then(
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
    await AxiosInstance.post("/api/dashboard/user/create", userData)
      .then((res) => {
        setAlert({
          message: "New user has been added!",
          type: "success",
        });
        history.push("/dashboard/user");
      })
      .catch((error) => {
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
          type="file"
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
            <RegularInput
              inputType="password"
              width="180px"
              name="password"
              register={register}
              width="100%"
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
            Password :
            <RegularInput
              inputType="password"
              width="180px"
              name="password_confirmation"
              register={register}
              width="100%"
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
            />

            <SecondaryButton onClick={handleCancel} name="CANCEL" />
          </HStack>
        </Box>
      </form>
    </Box>
  );
};
