import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Box,
  Text,
  Stack,
  HStack,
  Heading,
  useDisclosure,
  Center,
  Spinner,
  Flex,
  VStack,
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

const EstimateCard = () => {
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
      //   lines: data.lines,
    });
  };

  const getEstimate = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/estimate/${uuid}`);
      console.log(res.data.data);
      resetHooksForm(res.data.data);
      setCard(res.data.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/estimate");
    }
  };

  const updateEstimate = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/estimate/${uuid}/update`,
        data
      );
      console.log(res);
      setIsUpdating(false);
      setAlert({
        message: "Estimate's info has been updated!",
        type: "info",
      });
      history.push(`/dashboard/estimate`);
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
    getEstimate();
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
          w={{ base: 250, sm: 330, md: 450, lg: 550 }}
          h={{ base: 950, sm: 1200, md: 1390, lg: 1530 }}
        >
          <Heading
            fontSize={{ base: "small", md: "large", lg: "x-large" }}
            ml="5%"
            mt="5%"
            textColor="brand.primary"
            fontWeight="semibold"
          >
            Estimate's details:
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
            <Text>Subject: {card?.subject}</Text>
            <Text>Status: {card?.status}</Text>
            <Text>Date:{card?.date}</Text>
            <Text>Valid-till:{card?.valid_till}</Text>
            <Text>Currency:{card?.currency}</Text>
            <Text>Type of discount:{card?.discount_type}</Text>
            <Text>Amount of discount:{card?.discount_amount}</Text>
            <Text>Sub-total:{card?.subtotal}</Text>
            <Text>Total:{card?.total}</Text>
            <Box my="3">
              <Text fontWeight="bold">Assigned - to :</Text>

              <Text>
                {card?.assigned_to?.first_name} {card?.assigned_to?.last_name}
              </Text>
              <Text>{card?.assigned_to?.email}</Text>
              <Text>{card?.assigned_to?.phone_number}</Text>
              <Text>{card?.assigned_to?.uuid}</Text>
              <Text>{card?.assigned_to?.is_admin}</Text>
            </Box>
            <Box my="3">
              {" "}
              <Text fontWeight="bold">Company Info:</Text>
              <Text> {card?.customer?.company_name}</Text>
              <Text>{card?.customer?.vat_number}</Text>
              <Text>{card?.customer?.phone}</Text>
              <Text>{card?.customer?.fax}</Text>
              <Text>{card?.customer?.website}</Text>
              <Text>{card?.customer?.currency}</Text>
              <Text>{card?.customer?.state}</Text>
              <Text>{card?.customer?.city}</Text>
              <Text>{card?.customer?.zipcode}</Text>
              <Text>{card?.customer?.address}</Text>
            </Box>

            <Box my="3">
              {" "}
              <Text fontWeight="bold">Country:</Text>
              <Text> {card?.customer?.country?.name}</Text>
              <Text>{card?.customer?.country?.short_name}</Text>
              <Text>{card?.customer?.country?.country_code}</Text>
              <Text>{card?.customer?.country?.currency}</Text>
              <Text>{card?.customer?.country?.uuid}</Text>
            </Box>

            <Box my="3">
              {" "}
              <Text fontWeight="bold">Contact personal-info:</Text>
              <Text>
                {" "}
                {card?.customer?.primary_contact?.first_name}{" "}
                {card?.customer?.primary_contact?.last_name}
              </Text>
              <Text>{card?.customer?.primary_contact?.position}</Text>
              <Text>{card?.customer?.primary_contact?.email}</Text>
              <Text>{card?.customer?.primary_contact?.phone_number}</Text>
              <Text>{card?.customer?.primary_contact?.uuid}</Text>
            </Box>
          </Box>

          <HStack justify={"center"} w="full" mt="10px">
            <Tooltip
              label="convert to invoice"
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
                onClick={() => {
                  history.push(`${match.url}/convert-to-invoice`);
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
                  transform: "scale(1.2)",
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
              label="edit info"
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
          </HStack>
        </Box>
      </Center>

      {/* updating estimate */}
      <CustomDrawer isOpen={isOpen} onCancelHandler={onCancelHandler}>
        <CustomEditForm
          isOpen={isOpen}
          onCancelHandler={onCancelHandler}
          onUpdate={handleSubmit(updateEstimate)}
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
            ]}
            control={control}
            register={register}
          />
        </CustomEditForm>
      </CustomDrawer>
    </>
  );
};

export default EstimateCard;
