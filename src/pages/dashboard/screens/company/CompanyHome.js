import React, { useEffect, useState, useContext } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import {
  Center,
  Spinner,
  GridItem,
  Box,
  Text,
  Heading,
  VStack,
  Divider,
  Icon,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { FaStar, FaSync } from "react-icons/fa";

import CompanyCard from "./CompanyCard";
import { CustomAddForm, CustomEditForm } from "../../components";
import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance } from "../../../../api";
import { PrimaryButton, SecondaryButton } from "../../../../components";
import CustomModal from "../../components/CustomModal";

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
          fontSize={{
            base: "large",
            sm: "large",
            md: "x-large",
            lg: "xx-large",
          }}
          fontWeight="lg"
          alignItems="baseline"
        >
          Company
        </Heading>

        {!companyInfo ? (
          <Center h="70vh" w="100%">
            <Spinner size={{ base: "md", lg: "xl" }} color="#F8B916" />
          </Center>
        ) : (
          <SimpleGrid
            minChildWidth={"260px"}
            gap={{ base: 8, lg: "none" }}
            mt={{ base: 4, sm: 4, md: 8, lg: 10 }}
            ml="10%"
          >
            <GridItem>
              <CompanyCard Data={companyInfo} />
            </GridItem>

            <GridItem>
              <VStack w="full" spacing="15px">
                <Box
                  w={{ base: 28, sm: 32, md: 52, lg: 52 }}
                  h={{ base: 100, sm: 120, md: 150, lg: 160 }}
                  border="silver"
                  borderRadius="2xl"
                  boxShadow="2xl"
                  borderWidth="2px"
                  rounded="xl"
                  textAlign={"center"}
                  shadow="2xl"
                  position="relative"
                  bg="brand.white"
                >
                  <Text
                    fontSize={{
                      base: "x-small",
                      sm: "small",
                      md: "md",
                      lg: "large",
                    }}
                    bg="#333333"
                    roundedTop="lg"
                    textColor="white"
                    fontWeight="medium"
                    paddingY={{ base: 0.5, sm: 1, md: 2, lg: 2 }}
                  >
                    Review
                  </Text>
                  <Divider />
                  <Box>
                    <Text
                      textColor="#F8B916"
                      fontSize={{
                        base: "x-small",
                        sm: "small",
                        md: "md",
                        lg: "large",
                      }}
                      alignItems="baseline"
                      fontWeight="medium"
                      paddingY={{ base: 1, sm: 2, md: 4, lg: 4 }}
                    >
                      rating
                      <Icon textColor="#F8B916">
                        <FaStar size="medium" />
                      </Icon>
                    </Text>

                    <SecondaryButton
                      leftIcon={<FaSync />}
                      name="VIEW ALL"
                      fontSize={{
                        base: "xx-small",
                        sm: "x-small",
                        md: "sm",
                        lg: "md",
                      }}
                      width={{ base: 20, sm: 24, md: 28, lg: 28 }}
                      height={{ base: 6, md: 8, lg: 8 }}
                    />
                  </Box>
                </Box>
                <PrimaryButton
                  buttonType="button"
                  leftIcon={<FiEdit />}
                  onClick={onOpen}
                  name=" Update Company"
                  rounded="lg"
                  fontSize={{
                    base: "xx-small",
                    sm: "x-small",
                    md: "sm",
                    lg: "md",
                  }}
                  width={{ base: 24, sm: 32, md: 36, lg: 44 }}
                  height={{ base: 6, sm: 8, md: 8, lg: 10 }}
                />
              </VStack>
            </GridItem>
          </SimpleGrid>
        )}
      </Box>

      {/* company update */}
      <CustomModal isOpen={isOpen} onClose={onClose}>
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
                width: "100%",
              },
              {
                head: "Type : ",
                placeHolder: "Enter Type",
                name: "type",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Total Employees : ",
                placeHolder: "Enter Total Employees",
                name: "total_employees",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "VAT Number ",
                placeHolder: "Enter VAT Number ",
                name: "vat",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Confirm Cr Number : ",
                placeHolder: "confirm your Cr Number",
                name: "cr",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Phone Establishment Year : ",
                placeHolder: "enter  Establishment Year",
                name: "establishment_year",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Phone Bio : ",
                placeHolder: "enter Bio",
                name: "bio",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Telephone : ",
                placeHolder: "Enter Telephone",
                name: "telephone",
                err: err,
                inputType: "number",
                width: "100%",
              },
              {
                head: "Fax : ",
                placeHolder: "Enter Fax",
                name: "fax",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "E-mail : ",
                placeHolder: "Enter E-mail",
                name: "email",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Website : ",
                placeHolder: "Enter Website",
                name: "website",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Country-Id  : ",
                placeHolder: "Enter Country-Id ",
                name: "country_id ",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "City  : ",
                placeHolder: "Enter City ",
                name: "city ",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "po-Box  : ",
                placeHolder: "Enter po-Box ",
                name: "po-box ",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "ZIP-Code  : ",
                placeHolder: "Enter ZIP-Code ",
                name: "zip_code ",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Address  : ",
                placeHolder: "Enter Address ",
                name: "address ",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Logo  : ",
                placeHolder: "Enter Logo ",
                name: "logo ",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Location : ",
                placeHolder: "Enter Location",
                name: "location",
                err: err,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Category_id : ",
                placeHolder: "Enter Category_id",
                name: "category_id",
                err: err,
                inputType: "text",
                width: "100%",
              },
            ]}
            control={control}
            register={register}
            width={{ base: "100%" }}
          />
        </CustomEditForm>
      </CustomModal>
    </>
  );
};

export default CompanyHome;
