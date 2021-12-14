import React, { useState, useContext, useRef, useCallback } from "react";
import {
  Heading,
  Box,
  HStack,
  Flex,
  Text,
  Spacer,
  Center,
  Stack,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";

import { AxiosInstance } from "api/AxiosInstance";
import { CheckBox } from "components";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AlertContext } from "context";

import {
  RegularInput,
  PrimaryButton,
  PasswordInput,
  SecondaryButton,
  RegularInputControl,
  PasswordInputControl,
} from "components";

//* form validation rules
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
  const { setAlert } = alertProviderValue;

  const history = useHistory();
  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  //* for checkboxes:
  const [checked, setChecked] = useState(false);
  const [ch, setCh] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [photo, setPhoto] = useState(null);
  let inputRef = useRef(null);

  //* get functions to build form with useForm() hook

  const { register, handleSubmit, control } = useForm({
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
  const addUser = useCallback(async (userData) => {
    setIsUpdating(true);
    await AxiosInstance.post("/api/dashboard/user/create", userData)
      .then((res) => {
        console.log(res.data.data);
        setIsUpdating(false);
        setAlert({
          message: `New user has been added!`,
          type: "success",
        });
        history.push("/dashboard/user");
      })
      .catch((error) => {
        setIsUpdating(false);
        setErr(error.response.data.errors);
        console.log(error.response.data.errors);
        setAlert({
          message: `${error?.response?.data?.errors}`,
          type: "error",
        });
      });
  }, []);

  const handleCancel = () => {
    history.push("/dashboard/user");
  };

  return (
    <Box overflowY="scroll" w="full">
      <Box
        px="20"
        mt="6"
        boxShadow="2xl"
        rounded="3xl"
        w="750px"
        ml="40"
        bg="white"
      >
        <Heading
          color="#F8B916"
          fontSize="3xl"
          fontWeight="lg"
          alignItems="baseline"
          pt="4"
        >
          Add user
        </Heading>

        <Flex w="full" pl="5" mt="16">
          <input
            type="file"
            onChange={(ev) => handleFileInput(ev)}
            ref={inputRef}
          />
          <Spacer />
          <SecondaryButton onClick={photoUploadHandler} name="Upload photo" />
        </Flex>
        <Center>
          <form>
            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3">
                First Name :
                <RegularInputControl
                  placeHolder="First Name"
                  name="first_name"
                  control={control}
                  register={register}
                  width="100%"
                  errors={err}
                />
              </label>
            </Box>
            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Last Name :
                <RegularInputControl
                  placeHolder="Last name"
                  name="last_name"
                  control={control}
                  register={register}
                  width="100%"
                  errors={err}
                />
              </label>
            </Box>
            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3">
                Email :
                <RegularInputControl
                  placeHolder="Enter email"
                  name="email"
                  control={control}
                  register={register}
                  width="100%"
                  errors={err}
                />
              </label>
            </Box>
            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3">
                Password :
                <PasswordInputControl
                  placeHolder="Password"
                  name="password"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>
            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3">
                Confirm Password :
                <PasswordInputControl
                  placeHolder="confirm your password"
                  name="password_confirmation"
                  control={control}
                  register={register}
                  error={err}
                />
              </label>
            </Box>
            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3">
                Phone Number :
                <RegularInputControl
                  placeHolder="Phone number"
                  name="phone_number"
                  inputType="number"
                  control={control}
                  register={register}
                  width="100%"
                  errors={err}
                />
              </label>
            </Box>

            <Box className="flex flex-col items-center gap-2 mt-10">
              <Heading fontSize="xl" color="grey" fontWeight="normal">
                Terms and Conditions agreement
              </Heading>
              <CheckBox
                name="I agree to Tnafos"
                value={checked}
                setValue={setChecked}
              />

              <HStack>
                <Link to="/" className="hover:underline text-CInfo">
                  <Text>terms of service</Text>
                </Link>{" "}
                <Text>and</Text>
                <Link to="/" className="hover:underline text-CInfo">
                  <Text>Privacy policy</Text>
                </Link>
              </HStack>
              <Box>
                <Heading fontSize="xl" color="grey" fontWeight="normal">
                  Decleration of Valid Information
                </Heading>
              </Box>
              <CheckBox
                name="I confirm that the information given in this form is true,
            complete and accurate."
                value={ch}
                setValue={setCh}
              />

              <HStack spacing="10px" py="5">
                <PrimaryButton
                  name="SAVE"
                  onClick={handleSubmit(addUser)}
                  loadingButton={isUpdating}
                />

                <SecondaryButton onClick={handleCancel} name="CANCEL" />
              </HStack>
            </Box>
          </form>
        </Center>
      </Box>
    </Box>
  );
};
