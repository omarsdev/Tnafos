import React, { useState, useContext, useEffect } from "react";
import { HStack, Text, Box, Heading, Center, Spinner } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory, useRouteMatch } from "react-router-dom";

import { CustomAddForm } from "../../components";

import { PrimaryButton, SecondaryButton } from "../../../../components";
import { AxiosInstance } from "../../../../api";
import { AlertContext } from "../../../../context";

const AddService = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [err, setErr] = useState(null);
  const [categoriesList, setCategoriesList] = useState(null);

  const history = useHistory();

  const createService = async (data) => {
    try {
      const res = await AxiosInstance.post(
        "/api/dashboard/service/create",
        data
      );

      setAlert({
        message: "new service has been added!",
        type: "success",
      });
      history.push("/dashboard/service");
    } catch (error) {
      setErr(err.response.data.errors);
      setAlert({
        message: `${err.response.data.message}`,
        type: "error",
      });
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/servicehome");
  };

  const getAllCategories = async () => {
    try {
      const res = await AxiosInstance.get("/api/category");
      setCategoriesList(res.data.data);
    } catch (err) {
      console.log(err.response);
      history.push("/dashboard/service");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return categoriesList ? (
    <Box overflowY="scroll" w="full">
      <Box
        px={{ base: 1, md: 2 }}
        mt={{ base: 1, md: 3 }}
        boxShadow="2xl"
        rounded="3xl"
        w={{ base: 230, sm: 340, md: 550, lg: 700 }}
        ml={{ base: 2, sm: 16, md: 16, lg: 24 }}
        bg="white"
      >
        <Heading
          color="#F8B916"
          fontSize={{ base: "large", md: "x-large", lg: "xx-large" }}
          fontWeight="lg"
          alignItems="baseline"
          pt={{ base: 4, sm: 8, md: 6, lg: 8 }}
          ml={{ base: 2, sm: 4, md: 4, lg: 6 }}
        >
          New Service
        </Heading>

        <Center mx={{ base: "4%", md: "10%" }}>
          <form>
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

            <HStack spacing="10px" py={{ base: 2, md: 4, lg: 8 }}>
              <PrimaryButton
                name="ADD SERVICE"
                onClick={handleSubmit(createService)}
                buttonType="submit"
                width={{ base: 24, sm: 24, md: 36, lg: 40 }}
                height={{ base: 8, md: 12 }}
                fontSize={{
                  base: "xx-small",
                  sm: "xx-small",
                  md: "sm",
                  lg: "md",
                }}
              />

              <SecondaryButton
                name="Cancel"
                onClick={handleCancel}
                buttonType="button"
                width={{ base: 24, sm: 24, md: 36, lg: 40 }}
                height={{ base: 8, md: 12 }}
                fontSize={{
                  base: "xx-small",
                  sm: "xx-small",
                  md: "sm",
                  lg: "md",
                }}
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
        </Center>
      </Box>
    </Box>
  ) : (
    <Center h="100vh" w="100%">
      <Spinner size={{ base: "small", md: "md", lg: "xl" }} color="#F8B916" />
    </Center>
  );
};

export default AddService;
