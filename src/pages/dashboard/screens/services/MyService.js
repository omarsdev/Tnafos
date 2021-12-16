import React, { useEffect, useState, useContext, useCallback } from "react";
import { FiEdit } from "react-icons/fi";
import {
  Box,
  IconButton,
  Center,
  Spinner,
  Text,
  useDisclosure,
  HStack,
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Spacer,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { AxiosInstance } from "api/AxiosInstance";
import { RegularInputControl } from "components";

import { useForm } from "react-hook-form";
import { PrimaryButton } from "components";
import { SecondaryButton } from "components";
import { AlertContext } from "context/AlertContext";
import { media } from "api/media";

export const MyService = () => {
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

  //* represent service card info:
  const getMyService = async () => {
    await AxiosInstance.get(`/api/dashboard/service/${uuid}`)
      .then((res) => {
        // console.log(res.data.data);
        resetHooksForm(res.data.data);
        setService(res.data.data);
        let service = res.data.data;
        console.log(service);
        // delete service.category;
        // delete service.name;
        // delete service.description;
      })
      .catch((err) => {
        history.push("/dashboard/service");
      });
  };

  //* service update function:
  const onUpdateService = useCallback(async (dataToBeUpdataed) => {
    setErrors(null);
    setIsUpdating(true);
    await AxiosInstance.put(
      `/api/dashboard/service/${uuid}/update`,
      dataToBeUpdataed
    )
      .then((res) => {
        setIsUpdating(false);
        setAlert({
          message: "Service Has Been Updated!",
          type: "info",
        });
        history.push(`/dashboard/service`);
      })
      .catch((err) => {
        // console.log(err.response.data);
        setIsUpdating(false);
        setErrors(err?.response?.data.errors);
        setAlert({
          message: `${err?.response?.data}`,
          type: "error",
        });
      });
  }, []);

  const onCancelHandler = () => {
    if (isUpdating) return;
    resetHooksForm(service);
    setErrors(null);
    onClose();
  };

  useEffect(() => {
    getMyService();
  }, []);

  //* media file upload:
  const uploadFile = (photo) => {
    if (!photo) return;
    media(uuid, "service", photo);
  };

  return !service ? (
    <Center h="70vh" w="100%">
      <Spinner size="xl" color="#F8B916" />
    </Center>
  ) : (
    <>
      <Center py="5">
        <Box
          className="rounded-3xl shadow-2xl relative bg-white"
          w="400px"
          h="500px"
        >
          <Image
            src={"https://bit.ly/sage-adebayo"}
            alt="Segun Adebayo"
            objectFit="cover"
            roundedTop="3xl"
            w="100%"
            h="220px"
            layout={"fill"}
          />
          <Stack mr="0" h="270px" mx="5%">
            <Text mt="1" fontSize="x-large" textColor="gray.600">
              {service?.name}
            </Text>
            <Text color="#007BFF">Price: {service?.price} SAR</Text>
            <Text fontSize="large" textColor="gray.600">
              Description:{service?.description}
            </Text>
            <Text fontSize="large" textColor="gray.600">
              Category-id: {service?.category.uuid}
            </Text>
            <Text fontSize="large" textColor="gray.600">
              Type :{service?.type}
            </Text>
            <Flex justify={"center"}>
              <IconButton
                justify={"center"}
                mb={3}
                fontSize={"large"}
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
          </Stack>
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
            <form pt="5">
              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500 ">
                  Price :
                  <RegularInputControl
                    placeHolder="Price"
                    name="price"
                    inputType="text"
                    control={control}
                    register={register}
                    width="100%"
                    errors={errors}
                  />
                </label>
              </Box>
              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500 ">
                  Type :
                  <RegularInputControl
                    placeHolder="Type"
                    name="type"
                    inputType="text"
                    width="100%"
                    control={control}
                    register={register}
                    errors={errors}
                  />
                </label>
              </Box>

              <Flex mt="5" w="full" ml="320px">
                <PrimaryButton
                  name="Update"
                  onClick={handleSubmit(onUpdateService)}
                  loadingButton={isUpdating}
                  buttonType="submit"
                  mx="2"
                />

                <SecondaryButton
                  name="Cancel"
                  onClick={onCancelHandler}
                  buttonType="button"
                />
                {/* </HStack> */}
              </Flex>
              {errors?.message && (
                <Text className="text-center mt-4" color="red">
                  {errors?.message}
                </Text>
              )}
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
