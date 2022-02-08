import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Box,
  Text,
  Heading,
  useDisclosure,
  Center,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";

import { Tooltip } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { MdOutlinePermMedia } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance, media } from "../../../../api";
import { CustomAddForm, CustomEditForm } from "../../components";
import CustomDrawer from "../../components/CustomDrawer";

const PaymentCard = () => {
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
      amount: data.amount,
      method: data.method,
      transaction_number: data.transaction_number,
      date: data.date,
      notes: data.notes,
      uuid: data.uuid,
    });
  };

  const getPayment = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/payment/${uuid}`);

      console.log(res.data.data);
      resetHooksForm(res.data.data);
      setCard(res.data.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/payment");
    }
  };

  const updatePayment = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/payment/${uuid}/update`,
        data
      );

      console.log(res);
      setIsUpdating(false);
      setAlert({
        message: "Payment's info has been updated!",
        type: "info",
      });
      history.push(`/dashboard/payment`);
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
    getPayment();
  }, []);

  const uploadFile = (photo) => {
    if (!photo) return;
    media(uuid, "payment", photo);
  };

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
          w={{ base: 200, sm: 300, md: 450, lg: 550 }}
          h={{ base: 260, sm: 330, md: 360, lg: 420 }}
        >
          <Heading
            fontSize={{ base: "small", md: "large", lg: "x-large" }}
            ml="5%"
            textColor="brand.primary"
            fontWeight="semibold"
          >
            Payment's details:
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
            <Text py="1">Amount: {card?.amount}</Text>
            <Text py="1">Method: {card?.method}</Text>
            <Text py="1">Transaction_Number: {card?.transaction_number}</Text>
            <Text py="1">Date:{card?.date}</Text>
            <Text py="1">Notes:{card?.notes}</Text>
            <Text py="1">UUID:{card?.uuid}</Text>
          </Box>

          <HStack justify={"center"} w="full" mt="10px">
            <Tooltip
              label="Show Media"
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
                  history.push(`${match.url}/media`);
                }}
              >
                {" "}
                <MdOutlinePermMedia
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
              label="edit payment"
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

      {/* updating payment card*/}
      <CustomDrawer isOpen={isOpen} onCancelHandler={onCancelHandler}>
        <CustomEditForm
          isOpen={isOpen}
          onCancelHandler={onCancelHandler}
          onUpdate={handleSubmit(updatePayment)}
          isUpdating={isUpdating}
          errors={errors}
        >
          <CustomAddForm
            listForm={[
              {
                head: "Amount : ",
                placeHolder: "Enter amount",
                name: "amount",
                inputType: "text",
                errors: errors,
              },
              {
                head: "Method : ",
                placeHolder: "Enter Method",
                name: "method",
                inputType: "text",
                errors: errors,
              },
              {
                head: "Transaction -number : ",
                placeHolder: "Enter transaction-number",
                name: "transaction_number",
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
                head: "Notes : ",
                placeHolder: "Enter notes",
                name: "notes",
                inputType: "text",
                errors: errors,
              },
              {
                head: "UUID : ",
                placeHolder: "Enter UUID",
                name: "uuid",
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

export default PaymentCard;
