import React, { useEffect, useState, useContext } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import {
  Center,
  Spinner,
  GridItem,
  Grid,
  Box,
  Text,
  Heading,
  VStack,
  Divider,
  Icon,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { FaStar, FaSync } from "react-icons/fa";

import CompanyCard from "./CompanyCard";

import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance } from "../../../../api";
import {
  PrimaryButton,
  SecondaryButton,
  RegularInputControl,
} from "../../../../components";

const CompanyHome = () => {
  const [companyInfo, setcompanyInfo] = useState(null);

  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState(null);
  const history = useHistory();
  const match = useRouteMatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();

  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const resetHooksForm = (data) => {
    reset({
      name: data.name,
      type: data.type,
      cr: data.cr,
      vat: data.vat,
      establishment_year: data.establishment_year,
      total_employees: data.total_employees,
      bio: data.bio,
      telephone: data.telephone,
      fax: data.fax,
      email: data.email,
      website: data.web,
      country_id: data.country_id,
      city: data.city,
      po_box: data.po_box,
      zip_code: data.zip_code,
      address: data.address,
      location: data.location,
      category_id: data.category_id,
    });
  };

  //* represent company data:
  const showCompany = async () => {
    await AxiosInstance.get("/api/dashboard/company")
      .then((res) => {
        setcompanyInfo(res.data.data);
        let company = res.data.data;
        delete company.country;
        delete company.admin;
        delete company.category;
        resetHooksForm(res.data.data);
      })
      .catch((err) => {
        history.push("/dashboard/company");
      });
  };

  const onCancelHandler = () => {
    if (isUpdating) return;
    resetHooksForm(companyInfo);
    setErr(null);
    onClose();
  };

  //* update company info:
  const onUpdateCompany = async (dataToBeUpdated) => {
    setErr(null);
    setIsUpdating(true);
    await AxiosInstance.put("/api/dashboard/company/update", dataToBeUpdated)
      .then((res) => {
        setIsUpdating(false);
        setAlert({
          message: "Company info has been updated successfully!",
          type: "success",
        });
        history.push(`/dashboard/company`);
      })
      .catch((err) => {
        setIsUpdating(false);
        setErr(err.response.data.errors);
        setAlert({
          message: `${err.response.data.message}`,
          type: "error",
        });
      });
  };

  useEffect(() => {
    showCompany();
  }, []);

  return (
    <>
      <Box w="full" overflowY="scroll" padding="10">
        <Heading
          textColor="gray.600"
          fontSize="xx-large"
          fontWeight="lg"
          alignItems="baseline"
        >
          Company
        </Heading>

        {!companyInfo ? (
          <Center h="70vh" w="100%">
            <Spinner size="xl" color="#F8B916" />
          </Center>
        ) : (
          <Grid templateColumns="repeat(3, 1fr)" gap={5} mt="10">
            <GridItem colSpan={2}>
              <CompanyCard Data={companyInfo} />
            </GridItem>

            <GridItem>
              <VStack w="full" spacing="10">
                <Box
                  className="rounded-3xl shadow-2xl relative bg-white"
                  w="250px"
                  h="350px"
                  border="silver"
                  borderRadius="2xl"
                  boxShadow="2xl"
                  borderWidth="2px"
                  rounded="lg"
                  textAlign={"center"}
                  h="44"
                  // mt="10px"
                >
                  <Text
                    fontSize="LG"
                    bg="gray.200"
                    roundedTop="lg"
                    textColor="gray.700"
                    fontFamily="inherit"
                    fontWeight="medium"
                    paddingY="3"
                  >
                    Review
                  </Text>
                  <Divider />
                  <Box>
                    <Text
                      textColor="#F8B916"
                      fontSize="lg"
                      alignItems="baseline"
                      fontWeight="medium"
                      py="5"
                    >
                      rating
                      <Icon textColor="#F8B916">
                        <FaStar size="medium" />
                      </Icon>
                    </Text>

                    <SecondaryButton leftIcon={<FaSync />} name="VIEW ALL" />
                  </Box>
                </Box>
                <PrimaryButton
                  buttonType="button"
                  leftIcon={<FiEdit />}
                  onClick={onOpen}
                  name=" Update Company"
                  width="200px"
                  h="45px"
                  rounded="lg"
                />
              </VStack>
            </GridItem>
          </Grid>
        )}
      </Box>

      {/* company update */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontWeight="medium"
            fontSize="x-large"
            fontFamily="inhirit"
            textColor="#F8B916"
          >
            Update your company info
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500 ">
                  Company Name :
                  <RegularInputControl
                    placeHolder="Enter your company name here"
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
                <label className="w-32 text-left text-gray-500 ">
                  Type :
                  <RegularInputControl
                    placeHolder="Enter type"
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
                <label className="w-32 text-left text-gray-500 ">
                  CR Number :
                  <RegularInputControl
                    placeHolder="Enter CR"
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
                <label className="w-32 text-left text-gray-500 ">
                  VAT Number :
                  <RegularInputControl
                    placeHolder="Enter VAT"
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
                <label className="w-32 text-left text-gray-500 ">
                  Establishment Year :
                  <RegularInputControl
                    placeHolder="Enter establishment year"
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
                <label className="w-32 text-left text-gray-500 ">
                  Total Employees :
                  <RegularInputControl
                    placeHolder="Enter total employees"
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
                <label className="w-32 text-left text-gray-500 ">
                  Bio :
                  <RegularInputControl
                    placeHolder="Enter Bio"
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
                <label className="w-32 text-left text-gray-500 ">
                  Telephone :
                  <RegularInputControl
                    placeHolder="Enter telephone"
                    name="telephone"
                    inputType="text"
                    width="100%"
                    control={control}
                    register={register}
                    errors={err}
                  />
                </label>
              </Box>

              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500 ">
                  Fax :
                  <RegularInputControl
                    placeHolder="Enter fax"
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
                <label className="w-32 text-left text-gray-500 ">
                  E-mail :
                  <RegularInputControl
                    placeHolder="Enter email"
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
                <label className="w-32 text-left text-gray-500 ">
                  Website :
                  <RegularInputControl
                    placeHolder="Enter website"
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
                <label className="w-32 text-left text-gray-500 ">
                  City :
                  <RegularInputControl
                    placeHolder="Enter city"
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
                <label className="w-32 text-left text-gray-500 ">
                  po_box :
                  <RegularInputControl
                    placeHolder="Enter po box"
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
                <label className="w-32 text-left text-gray-500 ">
                  ZIP-code :
                  <RegularInputControl
                    placeHolder="Enter zip code"
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
                <label className="w-32 text-left text-gray-500 ">
                  Address :
                  <RegularInputControl
                    placeHolder="Enter address"
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
                <label className="w-32 text-left text-gray-500 ">
                  Location :
                  <RegularInputControl
                    placeHolder="Enter Location"
                    name="location"
                    inputType="text"
                    width="100%"
                    control={control}
                    register={register}
                    errors={err}
                  />
                </label>
              </Box>
            </form>
          </ModalBody>
          <ModalFooter my="5">
            <PrimaryButton
              name="Update"
              onClick={handleSubmit(onUpdateCompany)}
              loadingButton={isUpdating}
              buttonType="submit"
            />

            <SecondaryButton
              name="Cancel"
              onClick={onCancelHandler}
              buttonType="button"
            />

            <Stack>
              {errors?.message && (
                <Text className="text-center mt-4" color="red">
                  {errors?.message}
                </Text>
              )}
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CompanyHome;
