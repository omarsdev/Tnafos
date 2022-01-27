import React, { useState, useContext } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { CustomAddForm } from "../../components";

import { SecondaryButton, PrimaryButton } from "../../../../components";
import { AlertContext } from "../../../../context";
import { AxiosInstance } from "../../../../api";

const AddPurchase = () => {
  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const createRequest = async (data) => {
    try {
      const res = await AxiosInstance.post(
        "/api/dashboard/purchase-request/create",
        data
      );

      console.log(res);
      setIsUpdating(false);
      setAlert({
        message: `New purchase-request has been added!`,
        type: "success",
      });
      history.push("/dashboard/purchaseshome");
    } catch (err) {
      console.log(err);
      setIsUpdating(false);
      setErr(err.response.data.errors);
      console.log(err.response.data.errors);
      setAlert({
        message: `${err.response.data.message}`,
        type: "error",
      });
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/purchaseshome");
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
          Fill in this form to add new purchase-request.
        </Heading>

        <form>
          <CustomAddForm
            listForm={[
              {
                head: "Date ",
                placeHolder: "Enter Date",
                name: "date",
                err: err,
                inputType: "text",
              },
              {
                head: "Details",
                placeHolder: "Enter Details ",
                name: "details",
                err: err,
                inputType: "text",
              },
              {
                head: "Lines",
                placeHolder: "Enter Lines",
                name: "lines",
                err: err,
                inputType: "text",
              },
            ]}
            control={control}
            register={register}
          />

          <HStack spacing="10px" py="10" ml="40">
            <PrimaryButton
              name="SAVE"
              onClick={handleSubmit(createRequest)}
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

export default AddPurchase;
