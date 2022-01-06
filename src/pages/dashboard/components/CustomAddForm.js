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
  PrimaryButton,
  SecondaryButton,
  RegularInputControl,
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

  email: yup.string().email().required("Email is required!"),
  phone_number: yup
    .number()
    .min(10, "Invalid phone number, minium 10 numbers! ")
    .required("Phone number is required!"),
  fieldName: yup.string().required("this field is required!"),
});

export const CustomAddForm = ({ component, inputName, fieldName }) => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();
  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  //* for checkbox:
  const [checked, setChecked] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [photo, setPhoto] = useState(null);
  let inputRef = useRef(null);

  //* get functions to build form with useForm() hook

  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
  });

  //   //* select photo for upload function:
  //   const handleFileInput = (e) => {
  //     setPhoto(e.target.files[0]);
  //   };

  //   //* media file upload:
  //     const uploadFile = (photo) => {
  //       if (!photo) return;
  //       media(uuid, [component], photo);
  //     };

  //   //* photoUpload function:
  //   const photoUploadHandler = async () => {
  //       const formData = new FormData();
  //     formData.append("name", name);
  //     formData.append("file", selectedFile);
  //     console.log("Works");
  //     inputRef.current.onChange((e) => fileSelectHandler(e));
  //     if (fileSelectHandler) {
  //       await AxiosInstance.post("/api/dashboard/media/store", photo)
  //         .then((res) => {
  //           console.log(res.data);
  //           setAlert({
  //             message: "photo has been uploaded",
  //             type: "info",
  //           });
  //         })
  //         .catch((error) => {
  //           console.log(error.response.data);
  //         });
  //     }
  //   };

  //* onSubmit function:
  const addNewData = useCallback(async (newData) => {
    setIsUpdating(true);
    await AxiosInstance.post(`/api/dashboard/${component}/create`, newData)
      .then((res) => {
        console.log(res.data.data);
        setIsUpdating(false);
        setAlert({
          message: `New data has been added!`,
          type: "success",
        });
        history.push(`/dashboard/${component}`);
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
    history.push(`/dashboard/${component}`);
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
          Add {component}
        </Heading>

        {/* <Flex w="full" pl="5" mt="16">
          <input
            type="file"
            onChange={(ev) => handleFileInput(ev)}
            ref={inputRef}
          />
          <Spacer />
          <SecondaryButton onClick={photoUploadHandler} name="Upload photo" />
        </Flex> */}
        <Center>
          <form>
            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3">
                {inputName} :
                <RegularInputControl
                  placeHolder={inputName}
                  name={fieldName}
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

              {component === "user" ? (
                <>
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
                    value={checked}
                    setValue={setChecked}
                  />
                </>
              ) : (
                <HStack spacing="10px" py="5">
                  <PrimaryButton
                    name="SAVE"
                    onClick={handleSubmit(addNewData)}
                    loadingButton={isUpdating}
                  />

                  <SecondaryButton onClick={handleCancel} name="CANCEL" />
                </HStack>
              )}
            </Box>
          </form>
        </Center>
      </Box>
    </Box>
  );
};
