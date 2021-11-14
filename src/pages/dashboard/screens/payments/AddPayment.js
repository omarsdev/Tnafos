import React, { useState } from "react";
import { Box, Heading, Input, Button, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../../api";
import { useHistory } from "react-router-dom";

export const AddPayment = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const [input, setInput] = useState({
  //     amount: "",
  //     method: "",
  //     transaction_number: "",
  //     date: "",
  //     notes: "",
  //     invoice_id: "",
  //   });

  const createPayment = async (e, data) => {
    e.preventDefault();
    await AxiosInstance.post("/api/dashboard/payment/create", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    history.push("/dashboard/payment");
  };

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      borderWidth="1px"
      w="2xl"
      px="15"
      pt="5"
      h="2xl"
    >
      <Box>
        <Heading
          color="yellow.500"
          fontWeight="medium"
          fontSize="x-large"
          fontFamily="inhirit"
          alignItems="baseline"
        >
          Fill in this form to add payment ...
        </Heading>
      </Box>

      <form onSubmit={handleSubmit(createPayment)}>
        <label className="ml-3 font-normal text-gray-600 text-lg">
          amount :
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("amount", { required: "This field is required!" })}
          />
          {errors.amount && <p>{errors.amount?.message}</p>}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-lg">
          method :
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("method", { required: "This field is required!" })}
          />
          {errors.method && <p>{errors.method?.message}</p>}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-lg">
          transaction_number :
          <Input
            size="sm"
            type="number"
            borderRadius="lg"
            {...register("transaction_number", {
              required: "This field is required!",
            })}
          />
          {errors.transaction_number && (
            <p>{errors.transaction_number?.message}</p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-lg">
          date :
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("date", { required: "This field is required!" })}
          />
          {errors.date && <p>{errors.date.message}</p>}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-lg">
          notes :
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("notes", { required: "This field is required!" })}
          />
          {errors.notes && <p>{errors.notes?.message}</p>}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-lg">
          invoice_id :
          <Input
            size="sm"
            type="number"
            borderRadius="lg"
            {...register("invoice_id", { required: "This field is required!" })}
          />
          {errors.invoice_id && <p>{errors.invoice_id?.message}</p>}
        </label>
        <HStack m={3} className="flex flex-row gap-2" ml={"24"}>
          <Button type="submit" colorScheme="blue" size="sm">
            SAVE
          </Button>

          <Button onClick={handleCancel} colorScheme="blackAlpha" size="sm">
            CANCEL
          </Button>
        </HStack>
      </form>
    </Box>
  );
};
