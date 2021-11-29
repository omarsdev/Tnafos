import { HStack, Text, Box, Heading } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AxiosInstance } from "api/AxiosInstance";
import { AlertContext } from "context";

import { PrimaryButton, SecondaryButton, RegularInput } from "components";

export const AddService = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const setAlert = alertProviderValue;

  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState(null);

  const history = useHistory();

  //* service adding function:
  const createService = async (data) => {
    await AxiosInstance.post("/api/dashboard/service/create", data)
      .then((res) => {
        setAlert({
          message: "You've just added a new service!",
          type: "success",
        });
        history.push("/dashboard/service");
      })
      .catch((err) => {
        // setAlert({
        //   message: "SOMETHING WRONG.",
        //   type: "error",
        // });
        setErrors(err.response.data);
      });
  };

  const handleCancel = () => {
    history.push("/dashboard/service");
  };

  return (
    <Box borderRadius="lg" borderWidth="1px" boxSize="2xl" px="20" pt="5">
      <Box>
        <Heading
          color="#F8B916"
          fontSize="x-large"
          fontWeight="lg"
          alignItems="baseline"
        >
          New Service
        </Heading>
      </Box>
      <form>
        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Name of service :
            <RegularInput
              inputType="text"
              name="name"
              register={register}
              width="100%"
              error={errors?.errors?.name ? true : false}
            />
            {errors && errors?.errors && errors?.errors?.name && (
              <Text className="text-left" color="red">
                {errors?.errors?.name}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Description :
            <RegularInput
              inputType="text"
              name="description"
              register={register}
              width="100%"
              error={errors?.errors?.description ? true : false}
            />
            {errors && errors?.errors && errors?.errors?.description && (
              <Text className="text-left" color="red">
                {errors?.errors?.description}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Category-Id :
            <RegularInput
              inputType="text"
              name="category_id"
              register={register}
              width="100%"
              error={errors?.errors?.category_id ? true : false}
            />
            {errors && errors?.errors && errors?.errors?.category_id && (
              <Text className="text-left" color="red">
                {errors?.errors?.category_id}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Price :
            <RegularInput
              inputType="text"
              name="price"
              register={register}
              width="100%"
              error={errors?.errors?.price ? true : false}
            />
            {errors && errors?.errors && errors?.errors?.price && (
              <Text className="text-left" color="red">
                {errors?.errors?.price}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Type:
            <RegularInput
              inputType="text"
              name="type"
              register={register}
              width="100%"
              error={errors?.errors?.type ? true : false}
            />
            {errors && errors?.errors && errors?.errors?.type && (
              <Text className="text-left" color="red">
                {errors?.errors?.type}
              </Text>
            )}
          </label>
        </Box>
        <HStack m={3} className="flex flex-row gap-2" ml={"24"}>
          <PrimaryButton
            name="ADD SERVICE"
            onClick={handleSubmit(createService)}
            buttonType="submit"
          />

          <SecondaryButton
            name="Cancel"
            onClick={handleCancel}
            buttonType="button"
          />
        </HStack>
        <Box>
          {errors?.message && (
            <Text className="text-center mt-4" color="red">
              {errors?.message}
            </Text>
          )}
        </Box>
      </form>
    </Box>
  );
};
