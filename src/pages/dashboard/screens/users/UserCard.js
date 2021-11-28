import {
  IconButton,
  Box,
  Text,
  Image,
  VStack,
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
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AxiosInstance } from "../../../../api";

import { RegularInput } from "components";

import { useForm } from "react-hook-form";
import { PrimaryButton } from "components";
import { SecondaryButton } from "components";
import { AlertContext } from "context/AlertContext";

export const UserCard = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const setAlert = alertProviderValue;

  const history = useHistory();

  const { uuid } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, watch, reset } = useForm();

  const [card, setCard] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const resetHooksForm = (data) => {
    reset({
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      email: data.email,
    });
  };

  const getUser = async () => {
    await AxiosInstance.get(`/api/dashboard/user/${uuid}`)
      .then((res) => {
        if (res.data.data) {
          resetHooksForm(res.data.data);
          setCard(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
        history.push("/dashboard/user");
      });
  };

  const onUpdateUserInfo = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    await AxiosInstance.put(`/api/dashboard/user/${uuid}/update`, data)
      .then((res) => {
        setIsUpdating(false);
        setAlert({
          message: "User Has Been Updated!",
          type: "info",
        });
        history.push(`/dashboard/user`);
      })
      .catch((err) => {
        setIsUpdating(false);
        setErrors(err.response.data);
        setAlert({
          message: `${err.response.data}`,
          type: "error",
        });
      });
  };

  const onCancelHandler = () => {
    if (isUpdating) return;
    resetHooksForm(card);
    setErrors(null);
    onClose();
  };

  useEffect(() => {
    getUser();
  }, []);

  return !card ? (
    <Center h="70vh" w="100%">
      <Spinner size="xl" color="#F8B916" />
    </Center>
  ) : (
    <>
      <Center py="5">
        <Box
          className="rounded-3xl shadow-2xl relative bg-white"
          w="350px"
          h="400px"
        >
          <VStack spacing="20px" mx="5%">
            <Image
              src={"https://bit.ly/sage-adebayo"}
              alt="Segun Adebayo"
              objectFit="cover"
              rounded="3xl"
              w="100%"
              h="160px"
              marginTop={"20px"}
            />
            <Box mr="0">
              <Text py="1">
                Name: {card?.first_name}
                {card?.last_name}
              </Text>
              <Text py="1">E-mail: {card?.email}</Text>
              <Text py="1">Telephone: {card?.phone_number}</Text>
              <Text py="1">Id :{card?.uuid}</Text>
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
            <form>
              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500 ">
                  First Name :
                  <RegularInput
                    placeHolder="First name"
                    inputType="text"
                    name="first_name"
                    register={register}
                    width="100%"
                    error={errors?.errors?.first_name ? true : false}
                  />
                  {errors?.errors?.first_name &&
                    errors?.errors?.first_name.map((e) => (
                      <Text className="text-left" color="red">
                        {e}
                      </Text>
                    ))}
                </label>
              </Box>

              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500 ">
                  Last Name :
                  <RegularInput
                    placeHolder="Last name"
                    inputType="text"
                    width="180px"
                    name="last_name"
                    register={register}
                    width="100%"
                    error={errors?.errors?.last_name ? true : false}
                  />
                  {errors?.errors?.last_name &&
                    errors?.errors?.last_name.map((e) => (
                      <Text className="text-left" color="red">
                        {e}
                      </Text>
                    ))}
                </label>
              </Box>

              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500 ">
                  Phone Number:
                  <RegularInput
                    placeHolder="Phone Number"
                    inputType="text"
                    width="180px"
                    name="phone_number"
                    register={register}
                    width="100%"
                    error={errors?.errors?.phone_number ? true : false}
                  />
                  {errors?.errors?.phone_number &&
                    errors?.errors?.phone_number.map((e) => (
                      <Text className="text-left" color="red">
                        {e}
                      </Text>
                    ))}
                </label>
              </Box>

              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500">
                  Email:
                  <RegularInput
                    placeHolder="Email"
                    inputType="text"
                    width="180px"
                    name="email"
                    register={register}
                    width="100%"
                    error={errors?.errors?.email ? true : false}
                  />
                  {errors?.errors?.email &&
                    errors?.errors?.email.map((e) => (
                      <Text className="text-left" color="red">
                        {e}
                      </Text>
                    ))}
                </label>
              </Box>

              <Flex mt="5">
                <PrimaryButton
                  name="Update"
                  onClick={handleSubmit(onUpdateUserInfo)}
                  loadingButton={isUpdating}
                  buttonType="submit"
                />

                <Spacer />

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
