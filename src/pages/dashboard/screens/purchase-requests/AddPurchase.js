import React, { useState, useContext, useEffect } from "react";
import { Box, Heading, Center, HStack, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { CustomAddForm } from "../../components";

import {
  RegularInputControl,
  SecondaryButton,
  PrimaryButton,
} from "../../../../components";
import { AlertContext } from "../../../../context";
import { AxiosInstance } from "../../../../api";

export const AddPurchase = () => {
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
    // e.preventDefault();
    await AxiosInstance.post("/api/dashboard/purchase-request/create", data)
      .then((res) => {
        console.log(res);
        setIsUpdating(false);
        setAlert({
          message: `New purchase-request has been added!`,
          type: "success",
        });
        history.push("/dashboard/purchaseshome");
      })
      .catch((err) => {
        console.log(err);
        setIsUpdating(false);
        setErr(err.response.data.errors);
        console.log(err.response.data.errors);
        setAlert({
          message: `${err.response.data.message}`,
          type: "error",
        });
      });
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
                head: "Enter Company Name ",
                placeHolder: "Enter Company Name",
                name: "company_name",
                err: err,
              },
              {
                head: "Enter VAT Number",
                placeHolder: "Enter VAT Number ",
                name: "vat_number",
                err: err,
              },
              {
                head: "Enter Phone",
                placeHolder: "Enter Phone",
                name: "phone",
                err: err,
              },
              {
                head: "Enter Fax",
                placeHolder: "Enter Fax ",
                name: "fax",
                err: err,
              },
              {
                head: "Enter Currency",
                placeHolder: "Currency",
                name: "currency",
                err: err,
                isPassword: true,
              },
              {
                head: "Enter Website ",
                placeHolder: "Website",
                name: "website",
                err: err,
              },
              {
                head: "Enter Language ",
                placeHolder: "Language",
                name: "language",
                err: err,
              },
              {
                head: "Enter Country Id",
                placeHolder: "Country Id",
                name: "country_id",
                err: err,
              },
              {
                head: "Enter Address ",
                placeHolder: "Address",
                name: "address",
                err: err,
              },
              {
                head: "Enter City ",
                placeHolder: "City",
                name: "city",
                err: err,
              },
              {
                head: "Enter State",
                placeHolder: "State",
                name: "state",
                err: err,
              },
              {
                head: "Enter ZIP Code ",
                placeHolder: "ZIP Code",
                name: "zipcode",
                err: err,
              },
              {
                head: "Enter Is Registered ",
                placeHolder: "Is Registered",
                name: "is_regisered",
                err: err,
              },
              {
                head: "Enter Is Country code ",
                placeHolder: "Is Country code",
                name: "country_code",
                err: err,
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
            />

            <SecondaryButton onClick={handleCancel} name="CANCEL" />
          </HStack>
        </form>
      </Box>
    </Box>
  );
};
