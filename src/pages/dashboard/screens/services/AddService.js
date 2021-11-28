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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const [err, setErr] = useState(null);

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
        setAlert({
          message: `${err.response.data}`,
          type: "error",
        });
        setErr(err.response.data);
      });
  };

  const handleCancel = () => {
    history.push("/dashboard/service");
  };

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      borderWidth="1px"
      w="2xl"
      px="20"
      pt="5"
      h="lg"
    >
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
            {errors?.errors?.name &&
              errors?.errors?.name.map((e) => (
                <Text className="text-left" color="red">
                  {e}
                </Text>
              ))}
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
            {errors?.errors?.description &&
              errors?.errors?.description.map((e) => (
                <Text className="text-left" color="red">
                  {e}
                </Text>
              ))}
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
            {errors?.errors?.category_id &&
              errors?.errors?.category_id.map((e) => (
                <Text className="text-left" color="red">
                  {e}
                </Text>
              ))}
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
            {errors?.errors?.price &&
              errors?.errors?.price.map((e) => (
                <Text className="text-left" color="red">
                  {e}
                </Text>
              ))}
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
            {errors?.errors?.type &&
              errors?.errors?.type.map((e) => (
                <Text className="text-left" color="red">
                  {e}
                </Text>
              ))}
          </label>
        </Box>
        <HStack m={3} className="flex flex-row gap-2" ml={"24"}>
          <PrimaryButton
            name="Update"
            onClick={handleSubmit(createService)}
            buttonType="submit"
          />

          <SecondaryButton
            name="Cancel"
            onClick={handleCancel}
            buttonType="button"
          />
        </HStack>
      </form>
    </Box>
  );
};
