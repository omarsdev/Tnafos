import { Box, Text, Heading } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AxiosInstance } from "../../../../api/AxiosInstance";
import { AlertContext } from "context";
import { PrimaryButton, RegularInput } from "components";

export const CreateCompany = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const setAlert = alertProviderValue;

  const history = useHistory();
  const [err, setErr] = useState(null);

  const { register, handleSubmit } = useForm();

  const createCompany = async (input) => {
    await AxiosInstance.post("/api/dashboard/company/create", input)
      .then((res) => {
        setAlert({
          message: "Company profile has been created!",
          type: "success",
        });
        history.push("/dashboard/company");
      })
      .catch((err) => {
        console.log(err.response.data);
        // setErr(err.response.data);
        // setAlert({
        //   message: ` ${err?.response?.data}`,
        //   type: "error",
        // });
      });
  };

  return (
    <Box borderRadius="lg" borderWidth="1px" boxSize="2xl" px="20" pt="5">
      <Box>
        <Heading
          color="#F8B916"
          fontSize="x-large"
          fontWeight="lg"
          alignItems="baseline"
        >
          Fill in your company info
        </Heading>
      </Box>
      <form mt="5">
        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Company Name :
            <RegularInput
              inputType="text"
              width="180px"
              name="name"
              register={register}
              width="100%"
              error={err?.err?.name ? true : false}
            />
            {err && err?.name && (
              <Text className="text-left" color="red">
                {err?.name}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Type :
            <RegularInput
              inputType="text"
              width="180px"
              name="type"
              register={register}
              width="100%"
              error={err?.err?.type ? true : false}
            />
            {err && err?.type && (
              <Text className="text-left" color="red">
                {err?.type}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Cr Number :
            <RegularInput
              inputType="text"
              width="180px"
              name="cr"
              register={register}
              width="100%"
              error={err?.err?.cr ? true : false}
            />
            {err && err?.cr && (
              <Text className="text-left" color="red">
                {err?.cr}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            VAT Number :
            <RegularInput
              inputType="text"
              width="180px"
              name="vat"
              register={register}
              width="100%"
              error={err?.err?.vat ? true : false}
            />
            {err && err?.vat && (
              <Text className="text-left" color="red">
                {err?.vat}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Establishment Year :
            <RegularInput
              inputType="text"
              width="180px"
              name="establishment_year"
              register={register}
              width="100%"
              error={err?.err?.establishment_year ? true : false}
            />
            {err && err?.establishment_year && (
              <Text className="text-left" color="red">
                {err?.establishment_year}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Total Employees :
            <RegularInput
              inputType="text"
              width="180px"
              name="total_employees"
              register={register}
              width="100%"
              error={err?.err?.total_employees ? true : false}
            />
            {err && err?.total_employees && (
              <Text className="text-left" color="red">
                {err?.total_employees}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Bio :
            <RegularInput
              inputType="text"
              width="180px"
              name="bio"
              register={register}
              width="100%"
              error={err?.err?.bio ? true : false}
            />
            {err && err?.bio && (
              <Text className="text-left" color="red">
                {err?.bio}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Telephone :
            <RegularInput
              inputType="number"
              width="180px"
              name="telephone"
              register={register}
              width="100%"
              error={err?.err?.telephone ? true : false}
            />
            {err && err?.telephone && (
              <Text className="text-left" color="red">
                {err?.telephone}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Fax :
            <RegularInput
              inputType="text"
              width="180px"
              name="fax"
              register={register}
              width="100%"
              error={err?.err?.fax ? true : false}
            />
            {err && err?.fax && (
              <Text className="text-left" color="red">
                {err?.fax}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            E-mail :
            <RegularInput
              inputType="text"
              width="180px"
              name="email"
              register={register}
              width="100%"
              error={err?.err?.email ? true : false}
            />
            {err && err?.email && (
              <Text className="text-left" color="red">
                {err?.email}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Website :
            <RegularInput
              inputType="text"
              width="180px"
              name="website"
              register={register}
              width="100%"
              error={err?.err?.website ? true : false}
            />
            {err && err?.website && (
              <Text className="text-left" color="red">
                {err?.website}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Country-Id :
            <RegularInput
              inputType="text"
              width="180px"
              name="country_id"
              register={register}
              width="100%"
              error={err?.err?.country_id ? true : false}
            />
            {err && err?.country_id && (
              <Text className="text-left" color="red">
                {err?.country_id}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            City :
            <RegularInput
              inputType="text"
              width="180px"
              name="city"
              register={register}
              width="100%"
              error={err?.err?.city ? true : false}
            />
            {err && err?.city && (
              <Text className="text-left" color="red">
                {err?.city}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            po-Box :
            <RegularInput
              inputType="text"
              width="180px"
              name="po_box"
              register={register}
              width="100%"
              error={err?.err?.po_box ? true : false}
            />
            {err && err?.po_box && (
              <Text className="text-left" color="red">
                {err?.po_box}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            ZIP-Code :
            <RegularInput
              inputType="text"
              width="180px"
              name="zip_code"
              register={register}
              width="100%"
              error={err?.err?.zip_code ? true : false}
            />
            {err && err?.zip_code && (
              <Text className="text-left" color="red">
                {err?.zip_code}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Address :
            <RegularInput
              inputType="text"
              width="180px"
              name="address"
              register={register}
              width="100%"
              error={err?.err?.address ? true : false}
            />
            {err && err?.address && (
              <Text className="text-left" color="red">
                {err?.address}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Location :
            <RegularInput
              inputType="text"
              width="180px"
              name="location"
              register={register}
              width="100%"
              error={err?.err?.location ? true : false}
            />
            {err && err?.location && (
              <Text className="text-left" color="red">
                {err?.location}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Logo :
            <RegularInput
              inputType="text"
              width="180px"
              name="logo"
              register={register}
              width="100%"
              error={err?.err?.logo ? true : false}
            />
            {err && err?.logo && (
              <Text className="text-left" color="red">
                {err?.logo}
              </Text>
            )}
          </label>
        </Box>

        <Box className="mt-4">
          <label className="w-32 text-left text-gray-500 ">
            Category-Id :
            <RegularInput
              inputType="text"
              width="180px"
              name="category_id"
              register={register}
              width="100%"
              error={err?.err?.category_id ? true : false}
            />
            {err && err?.category_id && (
              <Text className="text-left" color="red">
                {err?.category_id}
              </Text>
            )}
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
    </Box>
  );
};
