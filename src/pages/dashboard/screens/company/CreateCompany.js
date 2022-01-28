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
        px={{ base: 1, md: 2 }}
        mt={{ base: 1, md: 3 }}
        boxShadow="2xl"
        rounded="3xl"
        w={{ base: 230, sm: 400, md: 550, lg: 700 }}
        ml={{ base: 12, sm: 16, md: 16, lg: 24 }}
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
          Fill in your company info
        </Heading>
        <Center mx={{ base: "4%", md: "10%" }}>
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
            <Box spacing="10px" py={{ base: 2, sm: 2, md: 4, lg: 8 }}>
              <PrimaryButton
                colorScheme="yellow"
                m="5"
                ml="96"
                name="SAVE"
                buttonType="submit"
                onClick={handleSubmit(createCompany)}
                width={{ base: 24, sm: 24, md: 36, lg: 40 }}
                height={{ base: 8, md: 12 }}
                fontSize={{
                  base: "xx-small",
                  sm: "xx-small",
                  md: "sm",
                  lg: "md",
                }}
              />

              <Box>
                {err?.message && (
                  <Text className="text-center mt-4" color="red">
                    {err?.message}
                  </Text>
                )}
              </Box>
            </Box>
          </form>
        </Center>
      </Box>
    </Box>
  );
};

export default CreateCompany;
