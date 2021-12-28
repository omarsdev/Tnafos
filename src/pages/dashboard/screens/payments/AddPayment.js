import React, { useState } from "react";
import { Box, Heading, Center, HStack, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../../api";
import { useHistory } from "react-router-dom";
import {
  RegularInputControl,
  SecondaryButton,
  PrimaryButton,
} from "components";

export const AddPayment = () => {
  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  //   const [input, setInput] = useState({
  //     amount: "",
  //     method: "",
  //     transaction_number: "",
  //     date: "",
  //     notes: "",
  //     invoice_id: "",
  //   });

  const createPayment = async (data) => {
    // e.preventDefault();
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
          Fill in this form to add payment.
        </Heading>

        <form>
          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              amount :
              <RegularInputControl
                placeHolder="amount"
                name="amount"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              method :
              <RegularInputControl
                placeHolder="method"
                name="method"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Transaction-number :
              <RegularInputControl
                placeHolder="transaction number"
                name="transaction-number"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              Date :
              <RegularInputControl
                placeHolder="date"
                name="date"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              notes :
              <RegularInputControl
                placeHolder="notes"
                name="notes"
                control={control}
                register={register}
                width="100%"
                errors={err}
              />
            </label>
          </Box>

          <Box className="mt-4">
            <label className="w-32 text-left text-gray-500 pl-3">
              invoice_id :
              <RegularInputControl
                placeHolder="invoice_id"
                name="invoice_id"
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
              onClick={handleSubmit(createPayment)}
              loadingButton={isUpdating}
            />

            <SecondaryButton onClick={handleCancel} name="CANCEL" />
          </HStack>
        </form>
      </Box>
    </Box>
  );
};
