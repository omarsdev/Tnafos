import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Box,
  Text,
  useDisclosure,
  Spinner,
  Flex,
  Heading,
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
      history.push("/dashboard/estimate");
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
      <Center py="5">
        <Box
          my={{ base: 2, lg: 6 }}
          rounded="3xl"
          position="relative"
          bg="brand.white"
          shadow="2xl"
          w={{ base: 170, sm: 260, md: 300, lg: 350 }}
          h={{ base: 130, sm: 160, md: 180, lg: 200 }}
        >
          <Heading
            fontSize={{ base: "small", md: "large", lg: "x-large" }}
            ml="5%"
            mt="5%"
            textColor="brand.primary"
            fontWeight="semibold"
          >
            Convert to invoice:
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
            <Text py="1">Date: {card?.date}</Text>
          </Box>
          <Flex mt="10px" justify="center" w="full">
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
              <RiExchangeDollarLine
                fontSize={{
                  base: "xx-small",
                  sm: "small",
                  md: "md",
                  lg: "large",
                }}
              />
            </Button>
          </Flex>
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
