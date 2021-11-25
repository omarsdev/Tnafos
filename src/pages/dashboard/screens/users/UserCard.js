import {
  IconButton,
  Box,
  Text,
  Button,
  HStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Center,
  Avatar,
  Heading,
  useColorModeValue,
  Spinner,
  DrawerFooter,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import React, { useContext, useEffect, useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
  Link,
} from "react-router-dom";
import { AxiosInstance } from "../../../../api";
import { borderColor } from "tailwindcss/defaultTheme";
import { RegularInput } from "components";

import { useForm } from "react-hook-form";
import { PrimaryButton } from "components";
import { SecondaryButton } from "components";
import { AlertContext } from "context/AlertContext";

export const UserCard = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const setAlert = alertProviderValue;

  const history = useHistory();
  const match = useRouteMatch();
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
          message: "User Has Been Updated",
        });
        history.push(`/dashboard/user`);
      })
      .catch((err) => {
        setIsUpdating(false);
        setErrors(err.response.data);
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
      <Center>
        <Box
          mt="30px"
          maxW={"320px"}
          w={"full"}
          // bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"2xl"}
            src={
              "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            }
            alt="user-img"
            mb={4}
            pos={"relative"}
          />

          <Heading fontSize={"2xl"} py="4">
            {card?.first_name}
            {card?.last_name}
          </Heading>
          <Text className="py-2 text-gray-600 font-semibold">
            Telephone: {card?.phone_number}
          </Text>
          <Text className="py-2 text-gray-600 font-semibold">
            E-mail: {card?.email}
          </Text>
          <Text className="py-2 text-gray-600 font-semibold">
            Id :{card?.uuid}
          </Text>
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

          {/* <Button onClick={onOpen}>Click me</Button> */}
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
