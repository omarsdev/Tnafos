import React, { useEffect, useState, useContext } from "react";
import { FiEdit } from "react-icons/fi";
import {
  Box,
  IconButton,
  Center,
  Spinner,
  Text,
  useDisclosure,
  HStack,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { AxiosInstance } from "api/AxiosInstance";
import { RegularInput } from "components";

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
  const { register, handleSubmit, reset } = useForm();

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
  const onUpdateService = async (dataToBeUpdataed) => {
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
        console.log(err.response.data);
        setIsUpdating(false);
        setErrors(err?.response?.data);
        setAlert({
          message: `${err?.response?.data}`,
          type: "error",
        });
      });
  };

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
          h="400px"
        >
          <VStack spacing="20px">
            <Text
              w="full"
              bg="gray.50"
              roundedTop="lg"
              textColor="gray.700"
              textAlign="start"
              fontSize="x-large"
              pl="5%"
            >
              Service
            </Text>

            <Box mr="0" px="5%">
              <Text py="1" fontSize="large" textColor="gray.600">
                {service?.name}
              </Text>
              <Text className="text-blue-400 text-medium">Price:</Text>
              <Text py="1" fontSize="large" textColor="gray.600">
                {service?.price} SAR
              </Text>
              <Text py="1" fontSize="large" textColor="gray.600">
                Description:{service?.description}
              </Text>
              <Text py="1" fontSize="large" textColor="gray.600">
                Category-id: {service?.category.uuid}
              </Text>
              <Text py="1" fontSize="large" textColor="gray.600">
                Type :{service?.type}
              </Text>
            </Box>

            <Box position="absolute" bottom="5">
              <IconButton
                flex={1}
                fontSize={"sm"}
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
            </Box>
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
            <HStack align="flex-end" w="full" alignItems="baseline" mb="14">
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
                  <RegularInput
                    placeHolder="price"
                    inputType="text"
                    width="100%"
                    error={errors?.errors?.price ? true : false}
                    register={register("price")}
                  />
                  {errors && errors?.errors && errors?.errors?.price && (
                    <Text className="text-left" color="red">
                      {errors?.errors?.price}
                    </Text>
                  )}
                </label>
              </Box>
              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500 ">
                  Type :
                  <RegularInput
                    placeHolder="type"
                    inputType="text"
                    width="100%"
                    error={errors?.errors?.type ? true : false}
                    register={register("type")}
                  />
                  {errors && errors?.errors && errors?.errors?.type && (
                    <Text className="text-left" color="red">
                      {errors?.errors?.type}
                    </Text>
                  )}
                </label>
              </Box>

              <HStack mt="5" w="250px">
                <PrimaryButton
                  name="Update"
                  onClick={handleSubmit(onUpdateService)}
                  loadingButton={isUpdating}
                  buttonType="submit"
                />

                <Spacer />

                <SecondaryButton
                  name="Cancel"
                  onClick={onCancelHandler}
                  buttonType="button"
                />
              </HStack>
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
