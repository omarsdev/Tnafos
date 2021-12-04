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
  const [err, setErr] = useState(null);

  const history = useHistory();

  //* service adding function:
  const createService = async (data) => {
    console.log(data);
    await AxiosInstance.post("/api/dashboard/service/create", data)
      .then((res) => {
        console.log(res.data.data);
        setAlert({
          message: "new service has been added!",
          type: "success",
        });
        history.push("/dashboard/service");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErr(err?.response?.data.errors);
        setAlert({
          message: `${err.response.data.message}`,
          type: "error",
        });
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
              width="100%"
              error={errors?.errors?.name ? true : false}
              {...register("name")}
            />
            {errors?.name &&
              errors?.name.map((e) => (
                <Text className="text-left" color="red">
                  {e}
                </Text>
              ))}
            {err?.name &&
              err?.name.map((e) => (
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
              width="100%"
              error={errors?.errors?.description ? true : false}
              {...register("description")}
            />
            {errors?.errors?.description &&
              errors?.errors?.description.map((e) => (
                <Text className="text-left" color="red">
                  {e}
                </Text>
              ))}
            {err?.name &&
              err?.description.map((e) => (
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
              width="100%"
              error={errors?.errors?.category_id ? true : false}
              {...register("category_id")}
            />
            {errors?.errors?.category_id &&
              errors?.errors?.category_id.map((e) => (
                <Text className="text-left" color="red">
                  {e}
                </Text>
              ))}
            {err?.name &&
              err?.category_id.map((e) => (
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
              width="100%"
              error={errors?.errors?.price ? true : false}
              {...register("price")}
            />
            {errors?.errors?.price &&
              errors?.errors?.price.map((e) => (
                <Text className="text-left" color="red">
                  {e}
                </Text>
              ))}
            {err?.name &&
              err?.price.map((e) => (
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
              width="100%"
              error={errors?.errors?.type ? true : false}
              {...register("type")}
            />
            {errors?.errors?.type &&
              errors?.errors?.type.map((e) => (
                <Text className="text-left" color="red">
                  {e}
                </Text>
              ))}
            {err?.name &&
              err?.type.map((e) => (
                <Text className="text-left" color="red">
                  {e}
                </Text>
              ))}
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
