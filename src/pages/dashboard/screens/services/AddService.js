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
import { CustomAddForm } from "pages";

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

  const history = useHistory();

  const [categoriesList, setCategoriesList] = useState(null);

  //* service adding function:
  const createService = async (data) => {
    await AxiosInstance.post("/api/dashboard/service/create", data)
      .then((res) => {
        setAlert({
          message: "new service has been added!",
          type: "success",
        });
        history.push("/dashboard/service");
      })
      .catch((err) => {
        setErr(err.response.data.errors);
        setAlert({
          message: `${err.response.data.message}`,
          type: "error",
        });
      });
  };

  const handleCancel = () => {
    history.push("/dashboard/service");
  };

  const getAllCategories = async () => {
    await AxiosInstance.get("/api/category")
      .then((res) => {
        setCategoriesList(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return categoriesList ? (
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
          <CustomAddForm
            listForm={[
              {
                head: "Name of service : ",
                placeHolder: "Enter first name : ",
                name: "name",
                err: err,
                inputType: "text",
              },
              {
                head: "Description : ",
                placeHolder: "Enter Description : ",
                name: "description",
                inputType: "text",
                err: err,
              },
              {
                head: "Category : ",
                placeHolder: "Select category",
                name: "category_id",
                err: err,
                isSelect: true,
                optionList: categoriesList,
                value: "uuid",
                key: "uuid",
                displayValue: "name",
              },
              {
                head: "Price : ",
                placeHolder: "Enter Price : ",
                name: "price",
                inputType: "number",
                err: err,
              },
              {
                head: "Type : ",
                placeHolder: "Enter Type : ",
                name: "type",
                inputType: "text",
                err: err,
              },
            ]}
            control={control}
            register={register}
          />

          <HStack mt="8" className="flex flex-row gap-2" ml={"24"}>
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
    </Box>
  ) : (
    <Center h="100vh" w="100%">
      <Spinner size="xl" color="#F8B916" />
    </Center>
  );
};
