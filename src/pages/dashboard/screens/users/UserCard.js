import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Box,
  Text,
  Image,
  useDisclosure,
  Center,
  Spinner,
  Flex,
  VStack,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance, media } from "../../../../api";

import { useForm } from "react-hook-form";

import { CustomAddForm, CustomEditForm } from "../../components";
import { SecondaryButton } from "../../../../components/button/SecondaryButton";
import CustomDrawer from "../../components/CustomDrawer";

const UserCard = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();

  const { uuid } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset, control } = useForm();

  const [card, setCard] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const [photo, setPhoto] = useState(null);

  const resetHooksForm = (data) => {
    reset({
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      email: data.email,
    });
  };

  const getUser = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/user/${uuid}`);
      console.log(res);
      resetHooksForm(res.data.data);
      setCard(res.data.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/user");
    }
  };

  const onUpdateUserInfo = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/user/${uuid}/update`,
        data
      );
      console.log(res);
      setIsUpdating(false);
      setAlert({
        message: "User Has Been Updated!",
        type: "info",
      });
      history.push(`/dashboard/user`);
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
    getUser();
  }, []);

  //* media file upload:
  const uploadFile = (photo) => {
    if (!photo) return;
    media(uuid, "user", photo);
  };

  return !card ? (
    <Center h="70vh" w="100%">
      <Spinner size={{ base: "md", sm: "large", lg: "xl" }} color="#F8B916" />
    </Center>
  ) : (
    <>
      <Center>
        <Box
          my={{ base: 2, lg: 6 }}
          rounded="3xl"
          position="relative"
          bg="brand.white"
          shadow="2xl"
          w={{ base: 180, sm: 260, md: 300, lg: 350 }}
          h={{ base: 330, sm: 330, md: 390, lg: 410 }}
        >
          <Image
            src={"https://bit.ly/sage-adebayo"}
            alt="Segun Adebayo"
            objectFit="cover"
            roundedTop="3xl"
            w="100%"
            h={{ base: 36, md: 40 }}
            objectFit={"cover"}
          />
          <VStack mx="5%" mt={{ base: 1, md: 2 }} textAlign="center">
            <Box>
              <Text
                py={{ base: 1, md: 3 }}
                textColor="gray.400"
                fontSize={{ base: "large", md: "x-large" }}
                fontWeight="2xl"
              >
                {card?.first_name}
                {card?.last_name}
              </Text>

              <HStack
                textColor="gray.600"
                fontSize={{ base: "sm", md: "md" }}
                justifyContent="center"
              >
                <IoIosMail />
                <Text> {card?.email}</Text>
              </HStack>
              <HStack
                fontSize={{ base: "sm", md: "md" }}
                textColor="gray.600"
                justifyContent="center"
              >
                <BsFillTelephoneFill />
                <Text>{card?.phone_number}</Text>
              </HStack>
              <Text textColor="blue.400" fontSize={{ base: "sm", md: "md" }}>
                {card?.uuid}
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} textColor="gray.600">
                {card?.is_admin}
              </Text>
            </Box>

            <Flex>
              <Button
                mt={{ base: 2, md: 4 }}
                justify={"center"}
                size={{ base: "x-small", sm: "x-small", md: "md", lg: "large" }}
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
                <FiEdit
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

      {/* updating user info. */}
      <CustomDrawer isOpen={isOpen} onCancelHandler={onCancelHandler}>
        <CustomEditForm
          onCancelHandler={onCancelHandler}
          onUpdate={handleSubmit(onUpdateUserInfo)}
          isUpdating={isUpdating}
          errors={errors}
        >
          <CustomAddForm
            listForm={[
              {
                head: "First Name : ",
                placeHolder: "Enter First Name",
                name: "first_name",
                errors: errors,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Last Name : ",
                placeHolder: "Enter Last Name",
                name: "last_name",
                errors: errors,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Phone Number : ",
                placeHolder: "Enter Phone Number",
                name: "phone_number",
                errors: errors,
                inputType: "number",
                width: "100%",
              },
              {
                head: "Email : ",
                placeHolder: "Enter Email",
                name: "email",
                errors: errors,
                inputType: "text",
                width: "100%",
              },
              {
                head: "Password : ",
                placeHolder: "Enter Password",
                name: "password",
                errors: errors,
                isPassword: true,
                width: "100%",
              },
              {
                head: "Confirm Password : ",
                placeHolder: "confirm your password",
                name: "password_confirmation",
                errors: errors,
                isPassword: true,
                width: "100%",
              },
            ]}
            control={control}
            register={register}
          />
        </CustomEditForm>
      </CustomDrawer>
    </>
  );
};

export default UserCard;
