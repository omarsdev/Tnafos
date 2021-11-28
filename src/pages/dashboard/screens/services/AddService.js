import { HStack, Button, Input, Box, Heading } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AxiosInstance } from "api/AxiosInstance";
import { AlertContext } from "context";

export const AddService = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const setAlert = alertProviderValue;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  // const [err, setErr] = useState(null);

  //* service adding function:
  const createService = async (data) => {
    await AxiosInstance.post("/api/dashboard/service/create", data)
      .then((res) => {
        setAlert({
          message: "User Has Been Updated",
          // type: "success",
        });
        history.push("/dashboard/service");
      })
      .catch((err) => {
        setAlert({
          message: `${err.response.data}`,
          // type: "error",
        });
        // setErr(err);
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
      w="xl"
      px="20"
      pt="5"
      h="lg"
    >
      <Box>
        <Heading
          color="yellow.500"
          fontWeight="medium"
          fontSize="x-large"
          fontFamily="inhirit"
          alignItems="baseline"
          m={4}
        >
          New Service
        </Heading>
      </Box>
      <form onSubmit={handleSubmit(createService)}>
        <label className="ml-3 font-normal text-gray-600 text-lg">
          name:
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            m={2}
            {...register("name", { required: "This field is required!" })}
          />
          {errors.name && (
            <p className="text-red-700">{errors.name?.message}</p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-lg">
          description :
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            m={2}
            {...register("description", {
              required: "This field is required!",
            })}
          />
          {errors.description && (
            <p className="text-red-700">{errors.description?.message}</p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-lg">
          category_id :
          <Input
            size="sm"
            type="number"
            borderRadius="lg"
            m={2}
            {...register("category_id", {
              required: "This field is required!",
            })}
          />
          {errors.category_id && (
            <p className="text-red-700">{errors.category_id?.message}</p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-lg">
          price :
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            m={2}
            {...register("price", { required: "This field is required!" })}
          />
          {errors.price && (
            <p className="text-red-700">{errors.price?.message}</p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-lg">
          type :
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            m={2}
            {...register("type", { required: "This field is required!" })}
          />
          {errors.type && (
            <p className="text-red-700">{errors.type?.message}</p>
          )}
        </label>
        <HStack m={3} className="flex flex-row gap-2" ml={"24"}>
          <Button colorScheme="blue" size="sm" type="submit">
            ADD SERVICE
          </Button>
          <Button colorScheme="blackAlpha" size="sm" onClick={handleCancel}>
            CANCEL
          </Button>
        </HStack>
      </form>
    </Box>
  );
};
