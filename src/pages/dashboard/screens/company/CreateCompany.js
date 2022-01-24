import React, { useState, useContext } from "react";
import { Box, Text, Heading, Center } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { CustomAddForm } from "../../components";
import { PrimaryButton } from "../../../../components";
import { AlertContext } from "../../../../context";
import { AxiosInstance } from "../../../../api";

const CreateCompany = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();
  const [err, setErr] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const createCompany = async (input) => {
    try {
      const res = await AxiosInstance.post(
        "/api/dashboard/company/create",
        input
      );

      console.log(res.data.data);
      setAlert({
        message: "Company profile has been created!",
        type: "success",
      });
      history.push("/dashboard/rating");
    } catch (error) {
      setErr(err.response.data.errors);
      setAlert({
        message: `${err.response.data.message}`,
        type: "error",
      });
    }
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
        >
          Fill in your company info
        </Heading>
        <Center mt="10">
          <form>
            <CustomAddForm
              listForm={[
                {
                  head: "Company Name : ",
                  placeHolder: "Enter Company Name",
                  name: "name",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "Type : ",
                  placeHolder: "Enter Type",
                  name: "type",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "Total Employees : ",
                  placeHolder: "Enter Total Employees",
                  name: "total_employees",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "VAT Number ",
                  placeHolder: "Enter VAT Number ",
                  name: "vat",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "Confirm Cr Number : ",
                  placeHolder: "confirm your Cr Number",
                  name: "cr",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "Phone Establishment Year : ",
                  placeHolder: "enter  Establishment Year",
                  name: "establishment_year",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "Phone Bio : ",
                  placeHolder: "enter Bio",
                  name: "bio",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "Telephone : ",
                  placeHolder: "Enter Telephone",
                  name: "telephone",
                  err: err,
                  inputType: "number",
                },
                {
                  head: "Fax : ",
                  placeHolder: "Enter Fax",
                  name: "fax",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "E-mail : ",
                  placeHolder: "Enter E-mail",
                  name: "email",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "Website : ",
                  placeHolder: "Enter Website",
                  name: "website",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "Country-Id  : ",
                  placeHolder: "Enter Country-Id ",
                  name: "country_id ",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "City  : ",
                  placeHolder: "Enter City ",
                  name: "city ",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "po-Box  : ",
                  placeHolder: "Enter po-Box ",
                  name: "po-box ",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "ZIP-Code  : ",
                  placeHolder: "Enter ZIP-Code ",
                  name: "zip_code ",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "Address  : ",
                  placeHolder: "Enter Address ",
                  name: "address ",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "Logo  : ",
                  placeHolder: "Enter Logo ",
                  name: "logo ",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "Location : ",
                  placeHolder: "Enter Location",
                  name: "location",
                  err: err,
                  inputType: "text",
                },
                {
                  head: "Category_id : ",
                  placeHolder: "Enter Category_id",
                  name: "category_id",
                  err: err,
                  inputType: "text",
                },
              ]}
              control={control}
              register={register}
            />

            <PrimaryButton
              colorScheme="yellow"
              m="5"
              ml="96"
              name="SAVE"
              buttonType="submit"
              onClick={handleSubmit(createCompany)}
            />

            <Box>
              {err?.message && (
                <Text textAlign="center" mt="1rem" color="red">
                  {err?.message}
                </Text>
              )}
            </Box>
          </form>
        </Center>
      </Box>
    </Box>
  );
};

export default CreateCompany;
