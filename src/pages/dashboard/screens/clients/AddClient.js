import React, { useState, useContext, useEffect } from "react";
import { Box, Heading, Center, HStack, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "api";
import { useHistory } from "react-router-dom";
import {
  RegularInputControl,
  SecondaryButton,
  PrimaryButton,
} from "components";
import { AlertContext } from "context";

export const AddClient = () => {
  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const createClient = async (data) => {
    // e.preventDefault();
    await AxiosInstance.post("/api/dashboard/client/create", data)
      .then((res) => {
        console.log(res);
        setIsUpdating(false);
        setAlert({
          message: `New client has been added!`,
          type: "success",
        });
        history.push("/dashboard/user");
      })
      .catch((err) => {
        console.log(err);
        setIsUpdating(false);
        setErr(err.response.data.errors);
        console.log(err.response.data.errors);
        setAlert({
          message: `${err?.response?.data?.errors}`,
          type: "error",
        });
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
              Company Name :
              <RegularInputControl
                placeHolder="company name"
                name="company_name"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              VAT Number :
              <RegularInputControl
                placeHolder="vat number"
                name="vat_number"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Phone :
              <RegularInputControl
                placeHolder="phone"
                name="phone"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Fax :
              <RegularInputControl
                placeHolder="fax"
                name="fax"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Website :
              <RegularInputControl
                placeHolder="website"
                name="website"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Currency :
              <RegularInputControl
                placeHolder="currency"
                name="currency"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Language:
              <RegularInputControl
                placeHolder="language"
                name="language"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Country Id :
              <RegularInputControl
                placeHolder="country_id"
                name="country_id"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Address :
              <RegularInputControl
                placeHolder="address"
                name="address"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              City :
              <RegularInputControl
                placeHolder="city"
                name="city"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              State :
              <RegularInputControl
                placeHolder="state"
                name="state"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              ZIP Code :
              <RegularInputControl
                placeHolder="zipcode"
                name="zipcode"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Is Registered :
              <RegularInputControl
                placeHolder="is_registered"
                name="is_registered"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Country code :
              <RegularInputControl
                placeHolder="country_code"
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
