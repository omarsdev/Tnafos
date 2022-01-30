import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Box,
  Text,
  useDisclosure,
  Center,
  Spinner,
  Flex,
  HStack,
  VStack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { AxiosInstance } from "../../../../api";

import { CustomAddForm, CustomEditForm } from "../../components";

import { useForm } from "react-hook-form";
import { AlertContext } from "../../../../context/AlertContext";
import { FiEdit } from "react-icons/fi";

const UpdatePurchase = () => {
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
      date: data.date,
      details: data.details,
      lines: data.lines,
    });
  };

  const getPurchaseCard = async () => {
    try {
      const res = await AxiosInstance.get(
        `/api/dashboard/purchase-request/${uuid}`
      );
      console.log(res.data.data);
      resetHooksForm(res.data.data);
      setCard(res.data.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/purchase-request");
    }
  };

  const updatePurchase = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/purchase-request/${uuid}/update`,
        data
      );

      console.log(res);
      setIsUpdating(false);
      setAlert({
        message: "Purchase-request has been updated!",
        type: "info",
      });
      history.push(`/dashboard/purchase-request`);
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
    getPurchaseCard();
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
          bg="white"
          shadow="2xl"
          w={{ base: 170, sm: 260, md: 450, lg: 550 }}
          h={{ base: 210, sm: 250, md: 300, lg: 320 }}
        >
          <VStack spacing="20px" mx="5%" mt="5">
            <Box
              mr="0"
              fontSize={{
                base: "xx-small",
                sm: "small",
                md: "md",
                lg: "large",
              }}
            >
              <Text textColor="gray.600">Id: {card?.id}</Text>
              <Text py="1" textColor="gray.600">
                Details: {card?.details}
              </Text>
              <Text textColor="gray.600">Date: {card?.date}</Text>
              <Text textColor="gray.600">
                Services:
                {card.services.map((el, idx) => (
                  <HStack key={idx}>
                    <Text textColor="gray.600">{el?.service?.name}</Text>
                    <Text textColor="gray.600">{el?.service?.description}</Text>
                    <Text textColor="gray.600">{el?.service?.price}</Text>
                    <Text textColor="gray.600">{el?.service?.type}]</Text>
                  </HStack>
                ))}
              </Text>
            </Box>

            <Flex
              justify={"center"}
              w="full"
              spacing={{ base: 1, sm: 2, md: 4, lg: 8 }}
            >
              <Tooltip
                label="edit purchase's info"
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
                  {" "}
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
          </VStack>
        </Box>
      </Center>

      {/* updating purchase-request*/}
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
              onUpdate={handleSubmit(updatePurchase)}
              isUpdating={isUpdating}
              errors={errors}
            >
              <CustomAddForm
                listForm={[
                  {
                    head: "Date : ",
                    placeHolder: "Enter Date",
                    name: "date",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Details : ",
                    placeHolder: "Enter Details",
                    name: "details",
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

export default UpdatePurchase;
