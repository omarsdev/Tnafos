import React, { useState } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory, useRouteMatch } from "react-router-dom";

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
    history.push("/dashboard/paymenthome");
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

          <HStack spacing="10px" py="10" ml="40">
            <PrimaryButton
              name="SAVE"
              onClick={handleSubmit(createPayment)}
              loadingButton={isUpdating}
              width={{ base: 16, sm: 20, md: 32, lg: 36 }}
              height={{ base: 6, sm: 8, md: 12 }}
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
              width={{ base: 16, sm: 20, md: 32, lg: 36 }}
              height={{ base: 6, sm: 8, md: 12 }}
              fontSize={{
                base: "xx-small",
                sm: "xx-small",
                md: "sm",
                lg: "md",
              }}
            />
          </HStack>
        </form>
      </Box>
    </Box>
  );
};

export default AddPayment;
