import React, { useContext, useEffect, useState } from "react";
import {
  IconButton,
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
  Spinner,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";

import { Tooltip } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { MdOutlinePermMedia } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance, media } from "../../../../api";
import { CustomAddForm, CustomEditForm } from "../../components";

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
      history.push("/dashboard/paymenthome");
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
      <Spinner size="xl" color="#F8B916" />
    </Center>
  ) : (
    <>
      <Center py="5">
        <Box
          className="rounded-3xl relative bg-white shadow-2xl"
          w="400px"
          h="300px"
        >
          <VStack spacing="20px" mx="5%" mt="5">
            <Box mr="0">
              <Text py="1" textColor="gray.600">
                Amount: {card?.amount}
              </Text>
              <Text textColor="gray.600">Method: {card?.method}</Text>
              <Text textColor="gray.600">
                Transaction_Number: {card?.transaction_number}
              </Text>
              <Text textColor="gray.600">Date:{card?.date}</Text>
              <Text textColor="gray.600">Notes:{card?.notes}</Text>
              <Text textColor="gray.600">UUID:{card?.uuid}</Text>
            </Box>

            <Flex justify={"center"} w="full" gap="15px">
              <Tooltip
                label="Show Media"
                bg="white"
                placement="top"
                color="#333333"
              >
                <IconButton
                  justify={"center"}
                  fontSize={"lg"}
                  rounded={"full"}
                  bg={"#F8B916"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "orange.400",
                  }}
                  icon={<MdOutlinePermMedia />}
                  onClick={() => {
                    history.push(`${match.url}/media`);
                  }}
                />
              </Tooltip>

              <Tooltip
                label="edit payment"
                bg="white"
                placement="top"
                color="#333333"
              >
                <IconButton
                  justify={"center"}
                  fontSize={"lg"}
                  rounded={"full"}
                  bg={"#F8B916"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "orange.400",
                  }}
                  icon={<FiEdit />}
                  onClick={onOpen}
                />
              </Tooltip>
            </Flex>
          </VStack>
        </Box>
      </Center>

      {/* updating payment card*/}
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PaymentCard;
