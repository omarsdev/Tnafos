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
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { FaStar, FaSync } from "react-icons/fa";

import CompanyCard from "./CompanyCard";
import { CustomAddForm, CustomEditForm } from "../../components";
import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance } from "../../../../api";
import { PrimaryButton, SecondaryButton } from "../../../../components";

const CompanyHome = () => {
  const [companyInfo, setcompanyInfo] = useState(null);

  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();

  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const history = useHistory();

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

  const showCompany = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/company");
      setcompanyInfo(res.data.data);
      let company = res.data.data;
      delete company.country;
      delete company.admin;
      delete company.category;
      resetHooksForm(res.data.data);
    } catch (err) {
      history.push("/dashboard/company");
    }
  };

  const onCancelHandler = () => {
    if (isUpdating) return;
    resetHooksForm(companyInfo);
    setErr(null);
    onClose();
  };

  const onUpdateCompany = async (dataToBeUpdated) => {
    setErr(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        "/api/dashboard/company/update",
        dataToBeUpdated
      );

      setIsUpdating(false);
      setAlert({
        message: "Company info has been updated successfully!",
        type: "success",
      });
      history.push(`/dashboard/company`);
    } catch (err) {
      setIsUpdating(false);
      setErr(err.response.data.errors);
      setAlert({
        message: `${err.response.data.message}`,
        type: "error",
      });
    }
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
                  position="relative"
                  bg="brand.white"
                  shadow="2xl"
                  w="250px"
                  // h="350px"
                  border="silver"
                  borderRadius="2xl"
                  boxShadow="2xl"
                  borderWidth="2px"
                  rounded="lg"
                  textAlign={"center"}
                  h="44"
                >
                  <Text
                    fontSize="LG"
                    bg="#333333"
                    roundedTop="lg"
                    textColor="white"
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
            <HStack
              align="flex-end"
              w="full"
              alignItems="baseline"
              mb="14"
              mt="5"
            >
              <input
                type="file"
                //   onChange={(e) => setPhoto(e.target.files[0])}
                name="choose file"
              />
              <Spacer />
              <SecondaryButton
                name="Upload File"
                // onClick={uploadFile}
              />
            </HStack>

            <CustomEditForm
              isOpen={isOpen}
              onCancelHandler={onCancelHandler}
              onUpdate={handleSubmit(onUpdateCompany)}
              isUpdating={isUpdating}
              errors={errors}
            >
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
            </CustomEditForm>
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
                <Text textAlign="center" mt="1rem" color="red">
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
