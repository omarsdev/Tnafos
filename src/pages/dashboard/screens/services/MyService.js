import React, { useEffect, useState, useContext } from "react";
import { FiEdit } from "react-icons/fi";
import {
  Box,
  IconButton,
  Center,
  Spinner,
  Text,
  useDisclosure,
  VStack,
  Flex,
  Image,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";
import { CustomEditForm, CustomAddForm } from "../../components";

import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance, media } from "../../../../api";
import { SecondaryButton } from "../../../../components/button/SecondaryButton";

const MyService = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;
  const [service, setService] = useState(null);

  const history = useHistory();
  const { uuid } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset, control } = useForm();

  const [errors, setErrors] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [photo, setPhoto] = useState(null);

  const resetHooksForm = (data) => {
    reset({
      price: data.price,
      type: data.type,
    });
  };

  const getMyService = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/service/${uuid}`);
      resetHooksForm(res.data.data);
      setService(res.data.data);
    } catch (err) {
      history.push("/dashboard/servicehome");
    }
  };

  const onUpdateService = async (dataToBeUpdataed) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/service/${uuid}/update`,
        dataToBeUpdataed
      );

      setIsUpdating(false);
      setAlert({
        message: "Service Has Been Updated!",
        type: "info",
      });
      history.push(`/dashboard/service`);
    } catch (err) {
      setIsUpdating(false);
      setErrors(err.response.data.errors);
      setAlert({
        message: `${err.response.data.message}`,
        type: "error",
      });
    }
  };

  const onCancelHandler = () => {
    if (isUpdating) return;
    resetHooksForm(service);
    setErrors(null);
    onClose();
  };

  //* media file upload:
  const uploadFile = (photo) => {
    if (!photo) return;
    media(uuid, "service", photo);
  };

  useEffect(() => {
    getMyService();
  }, []);

  return !service ? (
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
          bg="white"
          shadow="2xl"
          w={{ base: 160, sm: 200, md: 300, lg: 350 }}
          h={{ base: 300, sm: 320, md: 380, lg: 400 }}
        >
          <Image
            src={"https://bit.ly/sage-adebayo"}
            alt="Segun Adebayo"
            objectFit="cover"
            roundedTop="3xl"
            w="100%"
            h={{ base: 36, md: 40 }}
            layout={"cover"}
          />
          <VStack>
            <Box
              mr="0"
              mx="5%"
              mt={{ base: 1, md: 2 }}
              fontSize={{ base: "x-small", sm: "small", md: "md", lg: "large" }}
            >
              <Text mt="1" textColor="gray.600">
                {service?.name}
              </Text>
              <Text color="#007BFF">Price: {service?.price} SAR</Text>
              <Text textColor="gray.600">
                Description:{service?.description}
              </Text>
              <Text textColor="gray.600">
                Category-id: {service?.category.uuid}
              </Text>
              <Text textColor="gray.600">Type :{service?.type}</Text>
            </Box>
            <Flex justify={"center"} pb="8px">
              <IconButton
                justify={"center"}
                mb="5px"
                fontSize={{ base: "small", sm: "sm", md: "md", lg: "large" }}
                rounded={"full"}
                bg={"#F8B916"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "orange.400",
                }}
                _focus={{
                  bg: "orange.400",
                }}
                icon={<FiEdit />}
                onClick={onOpen}
              />
            </Flex>
          </VStack>
        </Box>
      </Center>

      {/* updating service. */}
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
            <HStack
              align="flex-end"
              w="full"
              alignItems="baseline"
              mb="14"
              mt="5"
            >
              <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
                name="choose file"
              />
              <Spacer />
              <SecondaryButton name="Upload File" onClick={uploadFile} />
            </HStack>
            <CustomEditForm
              isOpen={isOpen}
              onCancelHandler={onCancelHandler}
              onUpdate={handleSubmit(onUpdateService)}
              isUpdating={isUpdating}
              errors={errors}
            >
              <CustomAddForm
                listForm={[
                  {
                    head: "Price : ",
                    placeHolder: "Enter Price : ",
                    name: "price",
                    inputType: "number",
                    err: errors,
                  },
                  {
                    head: "Type : ",
                    placeHolder: "Enter Type : ",
                    name: "type",
                    inputType: "text",
                    err: errors,
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

export default MyService;
