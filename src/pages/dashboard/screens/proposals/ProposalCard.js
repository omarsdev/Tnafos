import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Box,
  Text,
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import { AxiosInstance } from "../../../../api";
import { Tooltip } from "@chakra-ui/react";

import { CustomEditForm, CustomAddForm } from "../../components";

import { useForm } from "react-hook-form";
import { AlertContext } from "../../../../context/AlertContext";

import { RiExchangeDollarLine, RiRefreshLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const ProposalCard = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();
  const match = useRouteMatch();

  const { uuid } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset, control } = useForm();

  const [card, setCard] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const resetHooksForm = (data) => {
    reset({
      subject: data.subject,
      status: data.status,
      date: data.date,
      valid_till: data.valid_till,
      currency: data.currency,
      customer_id: data.customer_id,
      assigned_to: data.assigned_to,
      discount_type: data.discount_type,
      discount_amount: data.discount_amount,
      subtotal: data.subtotal,
      total: data.total,
    });
  };

  const getProposal = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/proposal/${uuid}`);
      console.log(res.data.data);
      resetHooksForm(res.data.data);
      setCard(res.data.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/proposal");
    }
  };

  const updateProposal = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/proposal/${uuid}/update`,
        data
      );
      console.log(res);
      setIsUpdating(false);
      setAlert({
        message: "Proposal's info has been updated!",
        type: "info",
      });
      history.push(`/dashboard/proposal`);
    } catch (err) {
      setIsUpdating(false);
      setErrors(err.response.data);
      setAlert({
        message: `${err.response.data.message}`,
        type: "error",
      });
    }
  };

  const onCancelHandler = () => {
    if (isUpdating) return;
    resetHooksForm(card);
    setErrors(null);
    onClose();
  };

  useEffect(() => {
    getProposal();
  }, []);

  return !card ? (
    <Center h="70vh" w="100%">
      <Spinner size={{ base: "md", lg: "xl" }} color="#F8B916" />
    </Center>
  ) : (
    <>
      <Center py={{ base: 2, sm: 2, md: 4, lg: 4 }}>
        <Box
          rounded="3xl"
          position="relative"
          bg="brand.white"
          shadow="2xl"
          w={{ base: 260, sm: 350, md: 450, lg: 550 }}
          h={{ base: 260, sm: 360, md: 460, lg: 536 }}
        >
          <VStack spacing="20px" mx="5%" mt="5">
            <Box
              ml="14"
              fontSize={{
                base: "xx-small",
                sm: "small",
                md: "md",
                lg: "large",
              }}
            >
              <Text fontWeight="bold">Proposals details: </Text>
              <Text py="1" textColor="gray.600">
                UUID: {card?.uuid}
              </Text>
              <Text py="1" textColor="gray.600">
                Subject: {card?.subject}
              </Text>
              <Text textColor="gray.600">Status: {card?.status}</Text>
              <Text textColor="gray.600">Date:{card?.date}</Text>
              <Text textColor="gray.600">Valid-till:{card?.valid_till}</Text>
              <Text textColor="gray.600">Currency:{card?.currency}</Text>
              <Text textColor="gray.600">
                Type of discount:{card?.discount_type}
              </Text>
              <Text textColor="gray.600">
                Amount of discount:{card?.discount_amount}
              </Text>
              <Text textColor="gray.600">Sub-total:{card?.subtotal}</Text>
              <Text textColor="gray.600">Total:{card?.total}</Text>

              <Box textColor="gray.600" my="3">
                <Text fontWeight="bold">Company:</Text>
                <Stack>
                  <Text>{card?.company?.name}</Text>
                  <Text>{card?.company?.type}</Text>
                  <Text>{card?.company?.cr}</Text>
                  <Text>{card?.company?.vat}</Text>
                  <Text>{card?.company?.establishment_year}</Text>
                  <Text>{card?.company?.total_employees}</Text>
                  <Text>{card?.company?.bio}</Text>
                  <Text>{card?.company?.telephone}</Text>
                  <Text>{card?.company?.fax}</Text>
                  <Text>{card?.company?.email}</Text>
                  <Text>{card?.company?.website}</Text>
                  <Text>{card?.company?.city}</Text>
                  <Text>{card?.company?.po_box}</Text>
                  <Text>{card?.company?.zip_code}</Text>
                  <Text>{card?.company?.address}</Text>
                  <Text>{card?.company?.location}</Text>
                  <Text>{card?.company?.uuid}</Text>
                  <Text>{card?.company?.logo}</Text>
                </Stack>

                <Text fontWeight="bold">Company's country Info:</Text>
                <Stack>
                  <Text>{card?.company?.country?.name}</Text>
                  <Text>{card?.company?.country?.country_code}</Text>
                  <Text>{card?.company?.country?.short_name}</Text>
                  <Text>{card?.company?.country?.currency}</Text>
                  <Text>{card?.company?.country?.uuid}</Text>
                </Stack>

                <Text fontWeight="bold">Company's category Info:</Text>
                <Stack>
                  <Text>{card?.company?.category?.name}</Text>
                  <Text>{card?.company?.category?.description}</Text>
                  <Text>{card?.company?.category?.parent_id}</Text>
                  <Text>{card?.company?.category?.uuid}</Text>
                </Stack>

                <Text fontWeight="bold">Company's Admin Info:</Text>
                <Stack>
                  <Text>{card?.company?.admin?.first_name}</Text>
                  <Text>{card?.company?.admin?.last_name}</Text>
                  <Text>{card?.company?.admin?.email}</Text>
                  <Text>{card?.company?.admin?.phone_number}</Text>
                  <Text>{card?.company?.admin?.uuid}</Text>
                  <Text>{card?.company?.admin?.is_admin}</Text>
                </Stack>
              </Box>

              <Box textColor="gray.600" my="3">
                <Text fontWeight="bold">Assigned - to :</Text>
                <Stack>
                  <Text>
                    {card?.assigned_to?.first_name}{" "}
                    {card?.assigned_to?.last_name}
                  </Text>
                  <Text>{card?.assigned_to?.email}</Text>
                  <Text>{card?.assigned_to?.phone_number}</Text>
                  <Text>{card?.assigned_to?.uuid}</Text>
                  <Text>{card?.assigned_to?.is_admin}</Text>
                </Stack>
              </Box>

              <Box textColor="gray.600" my="3">
                {" "}
                <Text fontWeight="bold">Lead Info:</Text>
                <Stack>
                  <Text> {card?.lead?.first_name}</Text>
                  <Text>{card?.lead?.last_name}</Text>
                  <Text>{card?.lead?.position}</Text>
                  <Text>{card?.lead?.email}</Text>
                  <Text>{card?.lead?.phone_number}</Text>
                  <Text>{card?.lead?.company_name}</Text>
                  <Text>{card?.lead?.uuid}</Text>
                  <Text>{card?.lead?.fax}</Text>
                  <Text>{card?.lead?.website}</Text>
                  <Text>{card?.lead?.currency}</Text>
                  <Text>{card?.lead?.language}</Text>
                  <Text>{card?.lead?.address}</Text>
                  <Text>{card?.lead?.city}</Text>
                  <Text>{card?.lead?.state}</Text>
                  <Text>{card?.lead?.zipcode}</Text>
                </Stack>
                <Text fontWeight="bold">Lead's country Info:</Text>
                <Stack>
                  <Text>{card?.lead?.country?.name}</Text>
                  <Text>{card?.lead?.country?.country_code}</Text>
                  <Text>{card?.lead?.country?.short_name}</Text>
                  <Text>{card?.lead?.country?.currency}</Text>
                  <Text>{card?.lead?.country?.uuid}</Text>
                </Stack>
                <Text fontWeight="bold">Lead's Assigned_to:</Text>
                <Stack>
                  <Text>{card?.lead?.assigned_to?.first_name}</Text>
                  <Text>{card?.lead?.assigned_to?.last_name}</Text>
                  <Text>{card?.lead?.assigned_to?.email}</Text>
                  <Text>{card?.lead?.assigned_to?.phone_number}</Text>
                  <Text>{card?.lead?.assigned_to?.uuid}</Text>
                  <Text>{card?.lead?.assigned_to?.is_admin}</Text>
                </Stack>
                <Text fontWeight="bold">Lead's source info:</Text>
                <Stack>
                  <Text>{card?.lead?.source?.name}</Text>
                  <Text>{card?.lead?.source?.uuid}</Text>
                </Stack>
              </Box>

              <Box textColor="gray.600" my="3">
                {" "}
                <Text fontWeight="bold">Country:</Text>
                <Stack>
                  <Text> {card?.customer?.country?.name}</Text>
                  <Text>{card?.customer?.country?.short_name}</Text>
                  <Text>{card?.customer?.country?.country_code}</Text>
                  <Text>{card?.customer?.country?.currency}</Text>
                  <Text>{card?.customer?.country?.uuid}</Text>
                </Stack>
              </Box>

              <Box textColor="gray.600" my="3">
                {" "}
                <Text fontWeight="bold">Contact personal-info:</Text>
                <Stack>
                  <Text>
                    {" "}
                    {card?.customer?.primary_contact?.first_name}{" "}
                    {card?.customer?.primary_contact?.last_name}
                  </Text>
                  <Text>{card?.customer?.primary_contact?.position}</Text>
                  <Text>{card?.customer?.primary_contact?.email}</Text>
                  <Text>{card?.customer?.primary_contact?.phone_number}</Text>
                  <Text>{card?.customer?.primary_contact?.uuid}</Text>
                </Stack>
              </Box>
            </Box>

            <VStack spacing={{ base: 1, sm: 2, md: 4, lg: 8 }}>
              <Tooltip
                label="convert to estimate"
                bg="white"
                placement="top"
                color="#333333"
              >
                <Button
                  justify={"center"}
                  size={{
                    base: "x-small",
                    sm: "x-small",
                    md: "md",
                    lg: "large",
                  }}
                  rounded="full"
                  h={{ base: 6, sm: 8, md: 10, lg: 12 }}
                  w={{ base: 6, sm: 8, md: 10, lg: 12 }}
                  bg={"#F8B916"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "orange.400",
                  }}
                  onClick={() => {
                    history.push(`${match.url}/convert-to-estimate`);
                  }}
                >
                  <RiExchangeDollarLine
                    fontSize={{
                      base: "xx-small",
                      sm: "small",
                      md: "md",
                      lg: "large",
                    }}
                  />
                </Button>
              </Tooltip>

              <Tooltip
                label="update status"
                bg="white"
                placement="top"
                color="#333333"
              >
                <Button
                  justify={"center"}
                  size={{
                    base: "x-small",
                    sm: "x-small",
                    md: "md",
                    lg: "large",
                  }}
                  rounded="full"
                  h={{ base: 6, sm: 8, md: 10, lg: 12 }}
                  w={{ base: 6, sm: 8, md: 10, lg: 12 }}
                  bg={"#F8B916"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "orange.400",
                  }}
                  onClick={() => {
                    history.push(`${match.url}/update-status`);
                  }}
                >
                  <RiRefreshLine
                    fontSize={{
                      base: "xx-small",
                      sm: "small",
                      md: "md",
                      lg: "large",
                    }}
                  />
                </Button>
              </Tooltip>

              <Tooltip
                label="edit proposal"
                bg="white"
                placement="top"
                color="#333333"
              >
                <Button
                  justify={"center"}
                  size={{
                    base: "x-small",
                    sm: "x-small",
                    md: "md",
                    lg: "large",
                  }}
                  rounded="full"
                  h={{ base: 6, sm: 8, md: 10, lg: 12 }}
                  w={{ base: 6, sm: 8, md: 10, lg: 12 }}
                  bg={"#F8B916"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "orange.400",
                  }}
                  onClick={onOpen}
                >
                  <FiEdit
                    fontSize={{
                      base: "xx-small",
                      sm: "small",
                      md: "md",
                      lg: "large",
                    }}
                  />
                </Button>
              </Tooltip>
            </VStack>
          </VStack>
        </Box>
      </Center>

      {/* updating proposal info */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onCancelHandler}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" color="#F8B916">
            Edit your Info by filling up this form
          </DrawerHeader>

          <DrawerBody>
            <CustomEditForm
              isOpen={isOpen}
              onCancelHandler={onCancelHandler}
              onUpdate={handleSubmit(updateProposal)}
              isUpdating={isUpdating}
              errors={errors}
            >
              <CustomAddForm
                listForm={[
                  {
                    head: "Subject : ",
                    placeHolder: "Enter Subject",
                    name: "subject",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Status : ",
                    placeHolder: "Enter Status",
                    name: "status",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Date : ",
                    placeHolder: "Enter Date",
                    name: "date",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Valid - till : ",
                    placeHolder: "valid - till",
                    name: "valid_till",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Currency : ",
                    placeHolder: "Enter Currency",
                    name: "currency",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Discount- type : ",
                    placeHolder: "Enter discount_type",
                    name: "discount_type",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Discount - amount : ",
                    placeHolder: "Enter discount_amount",
                    name: "discount_amount",
                    inputType: "number",
                    errors: errors,
                  },
                  {
                    head: "Sub-total : ",
                    placeHolder: "Enter sub-total",
                    name: "subtotal",
                    inputType: "number",
                    errors: errors,
                  },
                  {
                    head: "Total : ",
                    placeHolder: "Enter Total",
                    name: "total",
                    inputType: "number",
                    errors: errors,
                  },
                  {
                    head: "Customer Id : ",
                    placeHolder: "Enter customer_id",
                    name: "customer_id",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Assigned - to : ",
                    placeHolder: "Enter the uuid here",
                    name: "assigned_to",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Lead : ",
                    placeHolder: "Enter lead info",
                    name: "lead",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    /* the upcoming ones related to the lead:  */
                  },
                  //   {
                  //     head: "Country : ",
                  //     placeHolder: "Enter Country info",
                  //     name: "country",
                  //     inputType: "text",
                  //     errors: errors,
                  //   },
                  //   {
                  //     head: "Address : ",
                  //     placeHolder: "Enter Address info",
                  //     name: "address",
                  //     inputType: "text",
                  //     errors: errors,
                  //   },
                  //   {
                  //     head: "City : ",
                  //     placeHolder: "Enter City info",
                  //     name: "city",
                  //     inputType: "text",
                  //     errors: errors,
                  //   },
                  //   {
                  //     head: "State : ",
                  //     placeHolder: "Enter State info",
                  //     name: "state",
                  //     inputType: "text",
                  //     errors: errors,
                  //   },
                  //   {
                  //     head: "Zip-Code : ",
                  //     placeHolder: "Enter Zip-Code info",
                  //     name: "zipcode",
                  //     inputType: "text",
                  //     errors: errors,
                  //   },
                  //   {
                  //     head: "Status : ",
                  //     placeHolder: "Enter Status info",
                  //     name: "status",
                  //     inputType: "text",
                  //     errors: errors,
                  //   },
                  //   {
                  //     head: "Assigned-to : ",
                  //     placeHolder: "Enter Assigned-to info",
                  //     name: "assigned_to",
                  //     inputType: "text",
                  //     errors: errors,
                  //   },
                  //   {
                  //     head: "Source : ",
                  //     placeHolder: "Enter Source info",
                  //     name: "source",
                  //     inputType: "text",
                  //     errors: errors,
                  //   },
                  //   {
                  //     head: "UUID : ",
                  //     placeHolder: "Enter UUID info",
                  //     name: "uuid",
                  //     inputType: "text",
                  //     errors: errors,
                  //   },
                  {
                    head: "Company : ",
                    placeHolder: "Enter Company info",
                    name: "company",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Lines : ",
                    placeHolder: "Enter Lines",
                    name: "lines",
                    inputType: "text",
                    errors: errors,
                  },
                ]}
                control={control}
                register={register}
              />
            </CustomEditForm>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProposalCard;
