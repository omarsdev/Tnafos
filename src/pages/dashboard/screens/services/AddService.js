import React, { useState, useContext, useCallback, useEffect } from "react";
import { HStack, Text, Box, Heading, Center, Spinner } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AxiosInstance } from "api/AxiosInstance";
import { AlertContext } from "context";

import {
  PrimaryButton,
  SecondaryButton,
  RegularInputControl,
} from "components";

import { DropDownCategory } from "../../components";

export const AddService = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [err, setErr] = useState(null);
  const [listCategory, setListCategory] = useState(null);

  const history = useHistory();

  //* service adding function:
  const createService = async (data) => {
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
        setErr(err?.response?.data.errors);
        setAlert({
          message: `${err.response.data.message}`,
          type: "error",
        });
      });
  };

  const getAllCategory = async () => {
    await AxiosInstance.get("/api/category/")
      .then((res) => {
        setListCategory(res.data.data);
      })
      .catch((err) => {
        setErr(err.response.data);
      });
  };

  const handleCancel = () => {
    history.push("/dashboard/service");
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return listCategory ? (
    <Box boxShadow="2xl" rounded="3xl" boxSize="2xl">
      <Box px="20" mt="10">
        <Heading
          color="#F8B916"
          fontSize="x-large"
          fontWeight="lg"
          alignItems="baseline"
        >
          New Service
        </Heading>

        <form mt="5">
          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Name of service :
              <RegularInputControl
                placeHolder="Name of service"
                inputType="text"
                width="100%"
                name="name"
                control={control}
                register={register}
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Description :
              <RegularInputControl
                placeHolder="Description"
                name="description"
                inputType="text"
                width="100%"
                control={control}
                register={register}
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Category-Id :
              <DropDownCategory
                list={listCategory}
                width="100%"
                name="category_id"
                control={control}
                register={register}
                errors={err}
                typeButtonHookForm={true}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3 ">
              Price :
              <RegularInputControl
                placeHolder="Price"
                name="price"
                inputType="text"
                width="100%"
                control={control}
                register={register}
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Type:
              <RegularInputControl
                placeHolder="Type"
                name="type"
                inputType="text"
                width="100%"
                control={control}
                register={register}
                errors={err}
              />
            </label>
          </Box>
          <HStack mt="8" className="flex flex-row gap-2" ml={"24"}>
            <PrimaryButton
              name="ADD SERVICE"
              onClick={handleSubmit(createService)}
              buttonType="submit"
              typeButton="react-hook-form"
              typeButtonHookForm={false}
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
    </Box>
  ) : (
    <Center h="100vh" w="100%">
      <Spinner size="xl" color="#F8B916" />
    </Center>
  );
};
