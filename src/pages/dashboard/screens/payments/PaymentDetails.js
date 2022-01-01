import React, { useContext, useEffect, useState, useCallback } from "react";
import {
  IconButton,
  Box,
  Text,
  HStack,
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
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { AxiosInstance } from "api";

import {
  RegularInputControl,
  SecondaryButton,
  PrimaryButton,
} from "components";

import { useForm } from "react-hook-form";

import { AlertContext } from "context/AlertContext";
import { media } from "api/media";

export const PaymentDetails = () => {
  const [card, setCard] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset, control } = useForm();

  const history = useHistory();
  const { uuid } = useParams();

  const resetHooksForm = (data) => {
    reset({
      amount: data.amount,
      date: data.date,
      method: data.method,
      transaction_number: data.transaction_number,
      notes: data.notes,
      uuid: data.uuid,
    });
  };

  const getPayment = async () => {
    await AxiosInstance.get(`/api/dashboard/user/${uuid}`)
      .then((res) => {
        console.log(res.data.data);
        setCard(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        history.push("/dashboard/payment");
      });
  };

  const onUpdatePayment = useCallback(async (data) => {
    setErrors(null);
    setIsUpdating(true);
    await AxiosInstance.put(`/api/dashboard/user/${uuid}/update`, data)
      .then((res) => {
        console.log(res);
        resetHooksForm(res.data.data);
        setIsUpdating(false);
        setAlert({
          message: "User Has Been Updated!",
          type: "info",
        });
        history.push(`/dashboard/user`);
      })
      .catch((err) => {
        console.log(err);
        setIsUpdating(false);
        setErrors(err.response.data);
        console.log(err.response.data);
        setAlert({
          message: `${err.response.data}`,
          type: "error",
        });
      });
  }, []);

  const onCancelHandler = () => {
    if (isUpdating) return;
    resetHooksForm(card);
    setErrors(null);
    onClose();
  };

  //* media file upload:
  const uploadFile = (photo) => {
    if (!photo) return;
    media(uuid, "user", photo);
  };

  useEffect(() => {
    getPayment();
  }, []);

  return !card ? (
    <Center h="70vh" w="100%">
      <Spinner size="xl" color="#F8B916" />
    </Center>
  ) : (
    <>
      <Center py="5">
        <Box
          className="rounded-3xl relative bg-white shadow-2xl"
          w="350px"
          h="430px"
        >
          <Box>media</Box>
          {/* <Image
            src={"https://bit.ly/sage-adebayo"}
            alt="Segun Adebayo"
            objectFit="cover"
            roundedTop="3xl"
            w="100%"
            h="220px"
            layout={"fill"}
          /> */}
          <VStack spacing="20px" mx="5%" mt="5">
            <Box mr="0">
              <Text py="1" textColor="gray.600">
                Name: {card?.first_name}
                {card?.last_name}
              </Text>
              <Text textColor="gray.600">E-mail: {card?.email}</Text>
              <Text textColor="gray.600">Telephone: {card?.phone_number}</Text>
              <Text textColor="gray.600">Id :{card?.uuid}</Text>
            </Box>

            <Flex justify={"center"} mt={-12}>
              <IconButton
                justify={"center"}
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
                icon={<FiEdit />}
                onClick={onOpen}
              />
            </Flex>
          </VStack>
        </Box>
      </Center>

      {/* updating user info. */}
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
            <form>
              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500 ">
                  Amount :
                  <RegularInputControl
                    placeHolder="First Name"
                    name="first_name"
                    control={control}
                    register={register}
                    width="100%"
                    error={errors}
                  />
                </label>
              </Box>

              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500 ">
                  Date :
                  <RegularInputControl
                    placeHolder="Last Name"
                    name="last_name"
                    control={control}
                    register={register}
                    width="100%"
                    error={errors}
                  />
                </label>
              </Box>

              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500 ">
                  Method:
                  <RegularInputControl
                    placeHolder="Phone Number"
                    name="phone_number"
                    control={control}
                    register={register}
                    width="100%"
                    error={errors}
                  />
                </label>
              </Box>

              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500">
                  Transaction - number:
                  <RegularInputControl
                    placeHolder="Email"
                    name="email"
                    control={control}
                    register={register}
                    width="100%"
                    error={errors}
                  />
                </label>
              </Box>

              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500">
                  Notes:
                  <RegularInputControl
                    placeHolder="Email"
                    name="email"
                    control={control}
                    register={register}
                    width="100%"
                    error={errors}
                  />
                </label>
              </Box>

              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500">
                  UUID:
                  <RegularInputControl
                    placeHolder="Email"
                    name="email"
                    control={control}
                    register={register}
                    width="100%"
                    error={errors}
                  />
                </label>
              </Box>

              <Flex mt="5" w="full" ml="320px">
                <PrimaryButton
                  name="Update"
                  onClick={handleSubmit(onUpdatePayment)}
                  loadingButton={isUpdating}
                  buttonType="submit"
                  mx="2"
                />

                <SecondaryButton
                  name="Cancel"
                  onClick={onCancelHandler}
                  buttonType="button"
                />
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
