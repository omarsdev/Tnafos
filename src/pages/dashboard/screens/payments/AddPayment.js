import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../../api";

export const AddPayment = () => {
  const { register, handleSubmit, errors } = useForm();

  const [input, setInput] = useState({
    amount: "",
    method: "",
    transaction_number: "",
    date: "",
    notes: "",
    invoice_id: "",
  });

  const createPayment = async (e, input) => {
    e.preventDefault();
    await AxiosInstance.post("/api/dashboard/payment/create", input)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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

      <form onSubmit={handleSubmit((ev) => createPayment(ev))}>
        <label className="w-32 text-right">
          amount :
          <input
            size="sm"
            type="text"
            borderRadius="lg"
            name="amount"
            ref={register({ required: "This field is required!" })}
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </label>

        <label className="w-32 text-right">
          method :
          <input
            size="sm"
            type="text"
            borderRadius="lg"
            name="method"
            ref={register({ required: "This field is required!" })}
          />
        </label>

        <label className="w-32 text-right">
          transaction_number :
          <input
            size="sm"
            type="number"
            borderRadius="lg"
            name="transaction_number"
            ref={register({ required: "This field is required!" })}
          />
          {errors.transaction_number && (
            <p>{errors.transaction_number.message}</p>
          )}
        </label>

        <label className="w-32 text-right">
          date :
          <input
            size="sm"
            type="text"
            borderRadius="lg"
            name="date"
            ref={register({ required: "This field is required!" })}
          />
          {errors.date && <p>{errors.date.message}</p>}
        </label>

        <label className="w-32 text-right">
          notes :
          <input
            size="sm"
            type="text"
            borderRadius="lg"
            name="notes"
            ref={register({ required: "This field is required!" })}
          />
          {errors.notes && <p>{errors.notes.message}</p>}
        </label>

        <label className="w-32 text-right">
          invoice_id :
          <input
            size="sm"
            type="number"
            borderRadius="lg"
            name="invoice_id"
            ref={register({ required: "This field is required!" })}
          />
          {errors.invoice_id && <p>{errors.invoice_id.message}</p>}
        </label>
      </form>
    </Box>
  );
};
