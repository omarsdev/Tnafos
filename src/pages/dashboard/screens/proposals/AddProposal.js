import React, { useState } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { CustomAddForm } from "../../components";

import { SecondaryButton, PrimaryButton } from "../../../../components";
import { AxiosInstance } from "../../../../api";

const AddProposal = () => {
  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const createProposal = async (data) => {
    try {
      const res = await AxiosInstance.post(
        "/api/dashboard/proposal/create",
        data
      );

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/proposalhome");
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
                head: "Subject",
                placeHolder: "Enter Subject ",
                name: "subject",
                err: err,
              },
              {
                head: " Status",
                placeHolder: "Enter status ",
                name: "status",
                err: err,
              },
              {
                head: "Enter Date  ",
                placeHolder: "Enter date ",
                name: "date",
                err: err,
              },
              {
                head: "Valid - till ",
                placeHolder: "Enter valid_till",
                name: "valid_till",
                err: err,
              },
              {
                head: "Currency ",
                placeHolder: "Enter currency",
                name: "currency",
                err: err,
              },
              {
                head: "Lead- Id",
                placeHolder: "Enter lead_id",
                name: "lead_id",
                err: err,
              },
              {
                head: "Assigned_to ",
                placeHolder: "assigned_to",
                name: "assigned_to",
                err: err,
              },
              {
                head: " Discount_type ",
                placeHolder: "Enter discount_type",
                name: "discount_type",
                err: err,
              },
              {
                head: "Discount_amount ",
                placeHolder: "discount_amount",
                name: "discount_amount",
                err: err,
              },
              {
                head: "Subtotal ",
                placeHolder: "Enter subtotal",
                name: "subtotal",
                err: err,
              },
              {
                head: "Total ",
                placeHolder: "total",
                name: "total",
                err: err,
              },
            ]}
            control={control}
            register={register}
          />

          <HStack spacing="10px" py="10" ml="40">
            <PrimaryButton
              name="SAVE"
              onClick={handleSubmit(createProposal)}
              loadingButton={isUpdating}
            />

            <SecondaryButton onClick={handleCancel} name="CANCEL" />
          </HStack>
        </form>
      </Box>
    </Box>
  );
};

export default AddProposal;
