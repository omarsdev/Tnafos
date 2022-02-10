import React, { useState } from "react";
import { Box, Heading, HStack, Center } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { CustomAddForm } from "../../components";

import { SecondaryButton, PrimaryButton } from "../../../../components";
import { AxiosInstance } from "../../../../api";

const AddPayment = () => {
  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const createPayment = async (data) => {
    try {
      const res = await AxiosInstance.post(
        "/api/dashboard/payment/create",
        data
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/payment");
  };

  return (
    <Box overflowY="scroll" w="full">
      <Box
        px={{ base: 1, md: 2 }}
        mt={{ base: 4, md: 12 }}
        boxShadow="2xl"
        rounded="3xl"
        w={{ base: 230, sm: 340, md: 550, lg: 700 }}
        ml={{ base: 8, sm: 16, md: 16, lg: 32 }}
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
          Fill in this form to add new payment
        </Heading>

        <Center mx={{ base: "2%", md: "5%" }} mt="10px">
          <form>
            <CustomAddForm
              listForm={[
                {
                  head: "Enter amount",
                  placeHolder: "Enter amount ",
                  name: "amount",
                  err: err,
                },
                {
                  head: "Enter method",
                  placeHolder: "Enter method ",
                  name: "method",
                  err: err,
                },
                {
                  head: "Enter Transaction-number ",
                  placeHolder: "Enter Transaction-number",
                  name: "transaction-number",
                  err: err,
                },
                {
                  head: "Enter Date  ",
                  placeHolder: "Enter date ",
                  name: "date",
                  err: err,
                },
                {
                  head: "Enter invoice-id ",
                  placeHolder: "invoice_id",
                  name: "invoice_id",
                  err: err,
                },
                {
                  head: "Enter notes ",
                  placeHolder: "notes",
                  name: "notes",
                  err: err,
                },
              ]}
              control={control}
              register={register}
            />

            <HStack spacing="5px" py="10" w="full" justify="center">
              <PrimaryButton
                name="SAVE"
                onClick={handleSubmit(createPayment)}
                loadingButton={isUpdating}
                width={{ base: 20, sm: 20, md: 32, lg: 36 }}
                height={{ base: 6, sm: 8, md: 10 }}
                fontSize={{
                  base: "xx-small",
                  sm: "xx-small",
                  md: "sm",
                  lg: "md",
                }}
              />

              <SecondaryButton
                onClick={handleCancel}
                name="CANCEL"
                width={{ base: 20, sm: 20, md: 32, lg: 36 }}
                height={{ base: 6, sm: 8, md: 10 }}
                fontSize={{
                  base: "xx-small",
                  sm: "xx-small",
                  md: "sm",
                  lg: "md",
                }}
              />
            </HStack>
          </form>
        </Center>
      </Box>
    </Box>
  );
};

export default AddPayment;
