import React, { useState, useContext, useCallback } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AxiosInstance } from "../../../../api/AxiosInstance";
import { AlertContext } from "context";
import { PrimaryButton, RegularInput } from "components";

export const CreateCompany = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();
  const [err, setErr] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
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
        setErr(err.response.data);
        setAlert({
          message: ` ${err?.response?.data}`,
          type: "error",
        });
      });
  }, []);

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
              width="100%"
              error={err?.err?.name ? true : false}
              register={register("name")}
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
              width="100%"
              error={err?.err?.type ? true : false}
              register={register("type")}
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
              width="100%"
              error={err?.err?.cr ? true : false}
              register={register("cr")}
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
              width="100%"
              error={err?.err?.vat ? true : false}
              register={register("vat")}
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
              width="100%"
              error={err?.err?.establishment_year ? true : false}
              register={register("establishment_year")}
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
              width="100%"
              error={err?.err?.total_employees ? true : false}
              register={register("total_employees")}
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
              width="100%"
              error={err?.err?.bio ? true : false}
              register={register("bio")}
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
              width="100%"
              error={err?.err?.telephone ? true : false}
              register={register("telephone")}
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
              width="100%"
              error={err?.err?.fax ? true : false}
              register={register("fax")}
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
              width="100%"
              error={err?.err?.email ? true : false}
              register={register("email")}
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
              width="100%"
              error={err?.err?.website ? true : false}
              register={register("website")}
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
              width="100%"
              error={err?.err?.country_id ? true : false}
              register={register("country_id")}
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
              width="100%"
              error={err?.err?.city ? true : false}
              register={register("city")}
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
              width="100%"
              error={err?.err?.po_box ? true : false}
              register={register("po_box")}
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
              width="100%"
              error={err?.err?.zip_code ? true : false}
              register={register("zip_code")}
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
              width="100%"
              error={err?.err?.address ? true : false}
              register={register("address")}
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
              width="100%"
              error={err?.err?.location ? true : false}
              register={register("location")}
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
              width="100%"
              error={err?.err?.logo ? true : false}
              register={register("logo")}
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
              width="100%"
              error={err?.err?.category_id ? true : false}
              register={register("category_id")}
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
