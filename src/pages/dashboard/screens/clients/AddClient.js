import React, { useState } from "react";
import { Box, Heading, Center, HStack, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "api";
import { useHistory } from "react-router-dom";
import {
  RegularInputControl,
  SecondaryButton,
  PrimaryButton,
} from "components";

export const AddClient = () => {
  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const createClient = async (data) => {
    // e.preventDefault();
    await AxiosInstance.post("/api/dashboard/contact/create", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    history.push("/dashboard/clientsHome");
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
          mb="12"
        >
          Fill in this form to add new client.
        </Heading>

        <form>
          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Customer-Id :
              <RegularInputControl
                placeHolder="customer-id"
                name="customer_id"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              First Name :
              <RegularInputControl
                placeHolder="first name"
                name="first_name"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Last Name :
              <RegularInputControl
                placeHolder="last name"
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
              Position :
              <RegularInputControl
                placeHolder="position"
                name="position"
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
                placeHolder="email"
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
              Phone Number :
              <RegularInputControl
                placeHolder="phone number"
                name="phone_number"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Is Primary:
              <RegularInputControl
                placeHolder="is_primary"
                name="is_primary"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Country Code :
              <RegularInputControl
                placeHolder="country code"
                name="country_code"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>
          <HStack spacing="10px" py="10" ml="40">
            <PrimaryButton
              name="SAVE"
              onClick={handleSubmit(createClient)}
              loadingButton={isUpdating}
            />

            <SecondaryButton onClick={handleCancel} name="CANCEL" />
          </HStack>
        </form>
      </Box>
    </Box>
  );
};
