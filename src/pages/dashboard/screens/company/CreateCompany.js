import React, { useState, useContext, useCallback } from "react";
import { Box, Text, Heading, Center } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AxiosInstance } from "../../../../api/AxiosInstance";
import { AlertContext } from "context";
import { PrimaryButton, RegularInputControl } from "components";

export const CreateCompany = () => {
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

  const createCompany = useCallback(async (input) => {
    await AxiosInstance.post("/api/dashboard/company/create", input)
      .then((res) => {
        console.log(res.data.data);
        setAlert({
          message: "Company profile has been created!",
          type: "success",
        });
        history.push("/dashboard/company");
      })
      .catch((err) => {
        console.log(err.response.data);
        setErr(err.response.data.errors);
        setAlert({
          message: ` ${err?.response?.data}`,
          type: "error",
        });
      });
  }, []);

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
            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3">
                Company Name :
                <RegularInputControl
                  placeHolder="Company Name"
                  name="name"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Type :
                <RegularInputControl
                  placeHolder="Type"
                  name="type"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Cr Number :
                <RegularInputControl
                  placeHolder="Cr Number"
                  name="cr"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                VAT Number :
                <RegularInputControl
                  placeHolder="VAT Number"
                  name="vat"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Establishment Year :
                <RegularInputControl
                  placeHolder="Establishment Year"
                  name="establishment_year"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Total Employees :
                <RegularInputControl
                  placeHolder="Total Employees"
                  name="total_employees"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Bio :
                <RegularInputControl
                  placeHolder="Bio"
                  name="bio"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Telephone :
                <RegularInputControl
                  placeHolder="Telephone"
                  name="telephone"
                  inputType="number"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Fax :
                <RegularInputControl
                  placeHolder="Fax"
                  name="fax"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                E-mail :
                <RegularInputControl
                  placeHolder="Email"
                  name="email"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Website :
                <RegularInputControl
                  placeHolder="Website"
                  name="website"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Country-Id :
                <RegularInputControl
                  placeHolder="Country ID"
                  name="country_id"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                City :
                <RegularInputControl
                  placeHolder="City"
                  name="city"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                po-Box :
                <RegularInputControl
                  placeHolder="Po_box"
                  name="po_box"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                ZIP-Code :
                <RegularInputControl
                  placeHolder="Zip code"
                  name="zip_code"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Address :
                <RegularInputControl
                  placeHolder="Address"
                  name="address"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Location :
                <RegularInputControl
                  placeHolder="Location"
                  name="location"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Logo :
                <RegularInputControl
                  placeHolder="Logo"
                  name="logo"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

            <Box className="mt-4">
              <label className="w-32 text-left text-gray-500 pl-3 ">
                Category-Id :
                <RegularInputControl
                  placeHolder="Category Id"
                  name="category_id"
                  inputType="text"
                  width="100%"
                  control={control}
                  register={register}
                  errors={err}
                />
              </label>
            </Box>

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
                <Text className="text-center mt-4" color="red">
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
