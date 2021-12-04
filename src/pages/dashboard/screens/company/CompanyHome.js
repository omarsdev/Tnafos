import React, { useEffect, useState, useContext } from "react";
import { useRouteMatch, useHistory, Switch, Route } from "react-router-dom";
import { CompanyCard, CreateCompany } from "./";
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
import { FiEdit } from "react-icons/fi";
import { FaStar, FaSync } from "react-icons/fa";
import { AxiosInstance } from "api/AxiosInstance";
import { PrimaryButton, SecondaryButton } from "components";
import { RegularInput } from "components";

import { useForm } from "react-hook-form";

import { AlertContext } from "context/AlertContext";

export const CompanyHome = () => {
  const [companyInfo, setcompanyInfo] = useState({});

  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState(null);
  const history = useHistory();
  const match = useRouteMatch();

  const { register, handleSubmit, reset } = useForm();

  const [errors, setErrors] = useState(null);
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
        console.log(company);
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
    setErrors(null);
    onClose();
  };

  //* update company info:
  const onUpdateCompany = async (dataToBeUpdated) => {
    setErrors(null);
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
        setErrors(err.response.data);
        setAlert({
          message: ` ${err.response.data}`,
          type: "error",
        });
      });
  };

  useEffect(() => {
    showCompany();
  }, []);

  return (
    <>
      <Switch>
        {/* Company Home Content */}
        <Route exact path={`${match.path}`}>
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
              <Grid templateColumns="repeat(3, 1fr)" gap={5} pt="5">
                <GridItem colSpan={2}>
                  <CompanyCard Data={companyInfo} />
                </GridItem>

                <GridItem>
                  <VStack w="full" spacing="5" mt="5">
                    <PrimaryButton
                      buttonType="button"
                      leftIcon={<FiEdit />}
                      onClick={onOpen}
                      name=" Update Company"
                      w="170px"
                      h="45px"
                      rounded="lg"
                    />

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
                      h="36"
                      mt="10px"
                    >
                      <Text
                        fontSize="LG"
                        bg="gray.100"
                        roundedTop="lg"
                        textColor="gray.700"
                        fontFamily="inherit"
                        fontWeight="medium"
                        paddingY="1"
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
                          py="3"
                        >
                          rating
                          <Icon textColor="#F8B916">
                            <FaStar size="medium" />
                          </Icon>
                        </Text>

                        <SecondaryButton
                          leftIcon={<FaSync />}
                          name="VIEW ALL"
                        />
                      </Box>
                    </Box>
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
                      <RegularInput
                        placeHolder="Enter your company name here"
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.name ? true : false}
                        register={register("name")}
                      />
                      {errors?.errors?.name &&
                        errors?.errors?.name.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      Type :
                      <RegularInput
                        placeHolder="enter type"
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.type ? true : false}
                        register={register("type")}
                      />
                      {errors?.errors?.type &&
                        errors?.errors?.type.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      CR Number :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.cr ? true : false}
                        register={register("cr")}
                      />
                      {errors?.errors?.cr &&
                        errors?.errors?.cr.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>
                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      VAT Number :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.vat ? true : false}
                        register={register("vat")}
                      />
                      {errors?.errors?.vat &&
                        errors?.errors?.vat.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      Establishment Year :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={
                          errors?.errors?.establishment_year ? true : false
                        }
                        register={register("establishment_year")}
                      />
                      {errors?.errors?.establishment_year &&
                        errors?.errors?.establishment_year.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      Total Employees :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.total_employees ? true : false}
                        register={register("total_employees")}
                      />
                      {errors?.errors?.total_employees &&
                        errors?.errors?.total_employees.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      Bio :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.bio ? true : false}
                        register={register("bio")}
                      />
                      {errors?.errors?.bio &&
                        errors?.errors?.bio.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      Telephone :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.telephone ? true : false}
                        register={register("telephone")}
                      />
                      {errors?.errors?.telephone &&
                        errors?.errors?.telephone.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      Fax :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.fax ? true : false}
                        register={register("fax")}
                      />
                      {errors?.errors?.fax &&
                        errors?.errors?.fax.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      E-mail :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.email ? true : false}
                        register={register("email")}
                      />
                      {errors?.errors?.email &&
                        errors?.errors?.email.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      Website :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.website ? true : false}
                        register={register("website")}
                      />
                      {errors?.errors?.website &&
                        errors?.errors?.website.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      City :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.city ? true : false}
                        register={register("city")}
                      />
                      {errors?.errors?.city &&
                        errors?.errors?.city.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      po_box :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.po_box ? true : false}
                        register={register("po_box")}
                      />
                      {errors?.errors?.po_box &&
                        errors?.errors?.po_box.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      ZIP-code :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.zip_code ? true : false}
                        register={register("zip_code")}
                      />
                      {errors?.errors?.zip_code &&
                        errors?.errors?.zip_code.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      Address :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.address ? true : false}
                        register={register("address")}
                      />
                      {errors?.errors?.address &&
                        errors?.errors?.address.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
                    </label>
                  </Box>

                  <Box className="mt-4">
                    <label className="w-32 text-left text-gray-500 ">
                      Location :
                      <RegularInput
                        inputType="text"
                        width="100%"
                        error={errors?.errors?.location ? true : false}
                        register={register("location")}
                      />
                      {errors?.errors?.location &&
                        errors?.errors?.location.map((e) => (
                          <Text className="text-left" color="red">
                            {e}
                          </Text>
                        ))}
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
        </Route>
        <Route path={`${match.path}/create`} component={CreateCompany} />
      </Switch>
    </>
  );
};
