import React, { useContext, useEffect, useState } from "react";
import {
  Button,
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
import { useHistory, useParams } from "react-router-dom";
import { AxiosInstance } from "../../../../api";

import { CustomEditForm, CustomAddForm } from "../../components";

import { useForm } from "react-hook-form";
import { AlertContext } from "../../../../context/AlertContext";

import { RiRefreshLine } from "react-icons/ri";

const UpdateStatus = () => {
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
      status: data.status,
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
      history.push("/dashboard/estimatehome");
    }
  };

  const statusUpdate = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/estimate/${uuid}/update-status`,
        data
      );
      console.log(res);
      setIsUpdating(false);
      setAlert({
        message: "Estimate's status has been updated!",
        type: "info",
      });
      history.push(`/dashboard/estimatehome`);
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
      <Center py="5">
        <Box
          my={{ base: 2, lg: 6 }}
          rounded="3xl"
          position="relative"
          bg="brand.white"
          shadow="2xl"
          w={{ base: 170, sm: 260, md: 300, lg: 350 }}
          h={{ base: 110, sm: 130, md: 160, lg: 200 }}
        >
          <VStack spacing="20px" mx="5%" mt="5">
            <Box
              mr="0"
              fontSize={{ base: "x-small", sm: "sm", md: "md", lg: "large" }}
            >
              <Text>Status: {card?.status}</Text>
            </Box>
            <Flex>
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
                <RiRefreshLine
                  fontSize={{
                    base: "xx-small",
                    sm: "small",
                    md: "md",
                    lg: "large",
                  }}
                />
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Center>

      {/* updating estimate's status*/}
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
              onUpdate={handleSubmit(statusUpdate)}
              isUpdating={isUpdating}
              errors={errors}
            >
              <CustomAddForm
                listForm={[
                  {
                    head: "Status : ",
                    placeHolder: "Enter Status",
                    name: "status",
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

export default UpdateStatus;
