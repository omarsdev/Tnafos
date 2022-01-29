import React, { useState, useContext } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { CustomAddForm } from "../../components";

import { SecondaryButton, PrimaryButton } from "../../../../components";
import { AlertContext } from "../../../../context";
import { AxiosInstance } from "../../../../api";

const AddClient = () => {
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

  const createClient = async (data) => {
    try {
      const res = await AxiosInstance.post(
        "/api/dashboard/customer/create",
        data
      );

      setIsUpdating(false);
      setAlert({
        message: `New client has been added!`,
        type: "success",
      });
      history.push("/dashboard/client");
    } catch (err) {
      setIsUpdating(false);
      setErr(err.response.data.errors);
      setAlert({
        message: `${err.response.data.message}`,
        type: "error",
      });
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/client");
  };

  return (
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
          fontSize={{ base: "sm", sm: "md", md: "large", lg: "x-large" }}
          fontWeight="lg"
          alignItems="baseline"
          py={{ base: 4, sm: 8, md: 6, lg: 8 }}
          ml={{ base: 2, sm: 4, md: 4, lg: 6 }}
        >
          Fill in this form to add new client
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

          <HStack spacing="5px" py="10" justify="center">
            <PrimaryButton
              name="SAVE"
              onClick={handleSubmit(createClient)}
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

export default AddClient;
