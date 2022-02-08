import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Box,
  Text,
  Stack,
  Heading,
  useDisclosure,
  Center,
  Spinner,
  Flex,
} from "@chakra-ui/react";

import { Tooltip } from "@chakra-ui/react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import { AxiosInstance } from "../../../../api";

import { CustomEditForm, CustomAddForm } from "../../components";

import { useForm } from "react-hook-form";
import { AlertContext } from "../../../../context/AlertContext";
import { RiExchangeDollarLine, RiRefreshLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import CustomDrawer from "../../components/CustomDrawer";

const InvoiceCard = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();

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
      discount_type: data.discount_type,
      discount_amount: data.discount_amount,
      subtotal: data.subtotal,
      total: data.total,
      assigned_to: data.assigned_to,
      customer: data.customer,
      lines: data.lines,
      company: data.company,
      payments: data.payments,
      vat_value: data.vat_value,
      vat_amount: data.vat_amount,
      uuid: data.uuid,
    });
  };

  const getInvoice = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/invoice/${uuid}`);
      console.log(res.data.data);
      resetHooksForm(res.data.data);
      setCard(res.data.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/invoice");
    }
  };

  const updateInvoice = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/invoice/${uuid}/update`,
        data
      );
      console.log(res);
      setIsUpdating(false);
      setAlert({
        message: "Invoice's info has been updated!",
        type: "info",
      });
      history.push(`/dashboard/invoice`);
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
    getInvoice();
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
          w={{ base: 200, sm: 350, md: 450, lg: 550 }}
          h={{ base: 1850, sm: 2500, md: 3040, lg: 3400 }}
        >
          <Heading
            fontSize={{ base: "small", md: "large", lg: "x-large" }}
            ml="5%"
            mt="5%"
            textColor="brand.primary"
            fontWeight="semibold"
          >
            Invoice's details:
          </Heading>

          <Box
            w="full"
            mt="15px"
            fontSize={{
              base: "xx-small",
              sm: "small",
              md: "md",
              lg: "large",
            }}
            bg="brand.dark"
            opacity="90%"
            textColor="white"
            px="10%"
            py="5%"
          >
            <Text fontWeight="bold" pt="3">
              Invoice's details:{" "}
            </Text>
            <Text>Subject: {card?.subject}</Text>
            <Text>Status: {card?.status}</Text>
            <Text>Date:{card?.date}</Text>
            <Text>Valid-till:{card?.valid_till}</Text>
            <Text>Currency:{card?.currency}</Text>
            <Text>Type of discount:{card?.discount_type}</Text>
            <Text>Amount of discount:{card?.discount_amount}</Text>
            <Text>Sub-total:{card?.subtotal}</Text>
            <Text>Total:{card?.total}</Text>
            <Text>Total:{card?.payments}</Text>
            <Text>Total:{card?.vat_value}</Text>
            <Text>Total:{card?.vat_amount}</Text>
            <Text>Total:{card?.uuid}</Text>

            <Box my="4">
              <Text fontWeight="bold">Assigned - to :</Text>

              <Text>
                {card?.assigned_to?.first_name} {card?.assigned_to?.last_name}
              </Text>
              <Text>{card?.assigned_to?.email}</Text>
              <Text>{card?.assigned_to?.phone_number}</Text>
              <Text>{card?.assigned_to?.uuid}</Text>
              <Text>{card?.assigned_to?.is_admin}</Text>
            </Box>
            <Box my="4">
              {" "}
              <Text fontWeight="bold">Customer's Info:</Text>
              <Text> {card?.customer?.company_name}</Text>
              <Text>{card?.customer?.vat_number}</Text>
              <Text>{card?.customer?.phone}</Text>
              <Text>{card?.customer?.fax}</Text>
              <Text>{card?.customer?.website}</Text>
              <Text>{card?.customer?.currency}</Text>
              <Text>{card?.customer?.language}</Text>
              <Text>{card?.customer?.address}</Text>
              <Text>{card?.customer?.city}</Text>
              <Text>{card?.customer?.state}</Text>
              <Text>{card?.customer?.zipcode}</Text>
              <Text>{card?.customer?.uuid}</Text>
            </Box>

            <Box my="4">
              <Text fontWeight="bold">Customer's Info / country:</Text>

              <Text>{card?.customer?.country?.name}</Text>
              <Text>{card?.customer?.country?.country_code}</Text>
              <Text>{card?.customer?.country?.short_name}</Text>
              <Text>{card?.customer?.country?.currency}</Text>
              <Text>{card?.customer?.country?.uuid}</Text>
            </Box>

            <Box my="4">
              <Text fontWeight="bold">
                Customer's Info / primary - contact:
              </Text>

              <Text>{card?.customer?.primary_contact?.first_name}</Text>
              <Text>{card?.customer?.primary_contact?.last_name}</Text>
              <Text>{card?.customer?.primary_contact?.position}</Text>
              <Text>{card?.customer?.primary_contact?.email}</Text>
              <Text>{card?.customer?.primary_contact?.phone_number}</Text>
              <Text>{card?.customer?.primary_contact?.uuid}</Text>
            </Box>

            <Box my="4">
              <Text fontWeight="bold"> Customer's Info / lead:</Text>

              <Text>{card?.customer?.lead?.first_name}</Text>
              <Text>{card?.customer?.lead?.last_name}</Text>
              <Text>{card?.customer?.lead?.position}</Text>
              <Text>{card?.customer?.lead?.email}</Text>
              <Text>{card?.customer?.lead?.phone_number}</Text>
              <Text>{card?.customer?.lead?.company_name}</Text>
              <Text>{card?.customer?.lead?.fax}</Text>
              <Text>{card?.customer?.lead?.website}</Text>
              <Text>{card?.customer?.lead?.currency}</Text>
              <Text>{card?.customer?.lead?.language}</Text>
              <Text>{card?.customer?.lead?.address}</Text>
              <Text>{card?.customer?.lead?.city}</Text>
              <Text>{card?.customer?.lead?.state}</Text>
              <Text>{card?.customer?.lead?.zipcode}</Text>
              <Text>{card?.customer?.lead?.status}</Text>
              <Text>{card?.customer?.lead?.uuid}</Text>
              <Text>{card?.customer?.lead?.media}</Text>
            </Box>

            <Box my="4">
              <Text fontWeight="bold">lead/ country details:</Text>

              <Text>{card?.customer?.lead?.country?.name}</Text>
              <Text>{card?.customer?.lead?.country?.country_code}</Text>
              <Text>{card?.customer?.lead?.country?.short_name}</Text>
              <Text>{card?.customer?.lead?.country?.currency}</Text>
              <Text>{card?.customer?.lead?.country?.uuid}</Text>
            </Box>

            <Box my="4">
              <Text fontWeight="bold">lead/ assigned_to details:</Text>

              <Text>{card?.customer?.lead?.assigned_to?.first_name}</Text>
              <Text>{card?.customer?.lead?.assigned_to?.last_name}</Text>
              <Text>{card?.customer?.lead?.assigned_to?.email}</Text>
              <Text>{card?.customer?.lead?.assigned_to?.phone_number}</Text>
              <Text>{card?.customer?.lead?.assigned_to?.uuid}</Text>
              <Text>{card?.customer?.lead?.assigned_to?.is_admin}</Text>
            </Box>

            <Box my="4">
              <Text fontWeight="bold">lead/ source details:</Text>
              <Text>{card?.customer?.lead?.source?.name}</Text>
              <Text>{card?.customer?.lead?.source?.uuid}</Text>
            </Box>

            <Box my="4">
              <Text fontWeight="bold">Company info:</Text>
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
            </Box>

            <Box my="4">
              <Text fontWeight="bold">Company info / country :</Text>
              <Text>{card?.company?.country?.name}</Text>
              <Text>{card?.company?.country?.country_code}</Text>
              <Text>{card?.company?.country?.short_name}</Text>
              <Text>{card?.company?.country?.currency}</Text>
              <Text>{card?.company?.country?.uuid}</Text>
            </Box>

            <Box my="4">
              <Text fontWeight="bold">Company info / category :</Text>
              <Text>{card?.company?.category?.name}</Text>
              <Text>{card?.company?.category?.description}</Text>
              <Text>{card?.company?.category?.parent_id}</Text>
              <Text>{card?.company?.category?.uuid}</Text>
            </Box>

            <Box my="4">
              <Text fontWeight="bold">Company info / admin :</Text>
              <Text>{card?.company?.admin?.first_name}</Text>
              <Text>{card?.company?.admin?.last_name}</Text>
              <Text>{card?.company?.admin?.email}</Text>
              <Text>{card?.company?.admin?.phone_number}</Text>
              <Text>{card?.company?.admin?.uuid}</Text>
              <Text>{card?.company?.admin?.is_admin}</Text>
            </Box>
          </Box>
          <Flex justify={"center"} w="full" mt="10px">
            <Tooltip
              label="edit invoice"
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
                  transform: "scale(1.2)",
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
          </Flex>
        </Box>
      </Center>

      {/* updating invoice */}
      <CustomDrawer isOpen={isOpen} onCancelHandler={onCancelHandler}>
        <CustomEditForm
          isOpen={isOpen}
          onCancelHandler={onCancelHandler}
          onUpdate={handleSubmit(updateInvoice)}
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
                head: "Assigned - to : ",
                placeHolder: "Enter the uuid here",
                name: "assigned_to",
                inputType: "text",
                errors: errors,
              },
              {
                head: "Customer  : ",
                placeHolder: "Enter customer",
                name: "customer",
                inputType: "text",
                errors: errors,
              },
              {
                head: "Company  : ",
                placeHolder: "Enter company",
                name: "company",
                inputType: "text",
                errors: errors,
              },
            ]}
            control={control}
            register={register}
          />
        </CustomEditForm>
      </CustomDrawer>
    </>
  );
};

export default InvoiceCard;
