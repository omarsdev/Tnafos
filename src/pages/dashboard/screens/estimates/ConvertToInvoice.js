import React, { useState, useContext, useEffect } from "react";
import {
  IconButton,
  Box,
  Text,
  useDisclosure,
  Spinner,
  Flex,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
} from "@chakra-ui/react";
import { RiExchangeDollarLine } from "react-icons/ri";

import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../../api";
import { AlertContext } from "../../../../context/AlertContext";
import { CustomEditForm, CustomAddForm } from "../../components";

const ConvertToInvoice = () => {
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

  const resetHooksForm = (data) => {
    reset({
      date: data.date,
    });
  };

  const convertToInvoice = async (dataToUpdate) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/estimate/${uuid}/convert-to-invoice`,
        dataToUpdate
      );

      console.log(res);
      setIsUpdating(false);
      setAlert({
        message: "Estimate has been concerted to invoice!",
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
      <Spinner size="xl" color="#F8B916" />
    </Center>
  ) : (
    <>
      <Center py="5">
        <Box
          rounded="3xl"
          position="relative"
          bg="brand.white"
          shadow="2xl"
          w="400px"
          h="200px"
        >
          <VStack spacing="20px" mx="5%" mt="5">
            <Box mr="0">
              <Text fontSize="large">Date: {card?.date}</Text>
            </Box>
            <Flex>
              <IconButton
                justify={"center"}
                fontSize={"x-large"}
                rounded={"full"}
                bg={"#F8B916"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "orange.400",
                }}
                icon={<RiExchangeDollarLine />}
                onClick={onOpen}
              />
            </Flex>
          </VStack>
        </Box>
      </Center>

      {/* conert to invoice */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader
            fontWeight="medium"
            fontSize="x-large"
            fontFamily="inhirit"
            textColor="#F8B916"
          >
            Update your estimate's info
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CustomEditForm
              isOpen={isOpen}
              onCancelHandler={onCancelHandler}
              onUpdate={handleSubmit(convertToInvoice)}
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
                    head: "Due_date : ",
                    placeHolder: "Enter Due_date",
                    name: "due_date",
                    inputType: "text",
                    errors: errors,
                  },
                ]}
                control={control}
                register={register}
              />
            </CustomEditForm>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConvertToInvoice;
