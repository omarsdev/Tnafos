import React, { useContext, useEffect, useState } from "react";
import {
  IconButton,
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
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance, media } from "../../../../api";

import { useForm } from "react-hook-form";

import { CustomAddForm, CustomEditForm } from "../../components";
import { SecondaryButton } from "../../../../components/button/SecondaryButton";

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

      console.log(res.data.data);
      resetHooksForm(res.data.data);
      setCard(res.data.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/userhome");
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
      <Spinner size={{ base: "md", lg: "xl" }} color="#F8B916" />
    </Center>
  ) : (
    <>
      <Center>
        <Box
          my={{ base: 2, lg: 6 }}
          rounded="3xl"
          position="relative"
          bg="white"
          shadow="2xl"
          w={{ base: 200, sm: 260, md: 300, lg: 350 }}
          h={{ base: 350, sm: 360, md: 380, lg: 380 }}
        >
          <Image
            src={"https://bit.ly/sage-adebayo"}
            alt="Segun Adebayo"
            objectFit="cover"
            roundedTop="3xl"
            w="100%"
            h={{ base: 36, md: 40 }}
            layout={"fill"}
          />
          <VStack spacing="20px" mx="5%" mt={{ base: 1, md: 2 }}>
            <Box mr="0" fontSize={{ base: "sm", md: "md" }}>
              <Text py={{ base: 0.5, md: 1 }} textColor="gray.600">
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
        size={["xs", "sm", "sm", "sm"]}
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
                width={{ base: 20, sm: 20, md: 32, lg: 36 }}
                height={{ base: 8, md: 12 }}
                fontSize={{
                  base: "xx-small",
                  sm: "xx-small",
                  md: "sm",
                  lg: "md",
                }}
              />
              <Spacer />
              <SecondaryButton
                name="Upload File"
                onClick={uploadFile}
                width={{ base: 20, sm: 20, md: 32, lg: 36 }}
                height={{ base: 8, md: 12 }}
                fontSize={{
                  base: "xx-small",
                  sm: "xx-small",
                  md: "sm",
                  lg: "md",
                }}
              />
            </HStack>

            <CustomEditForm
              isOpen={isOpen}
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
                  },
                  {
                    head: "Last Name : ",
                    placeHolder: "Enter Last Name",
                    name: "last_name",
                    errors: errors,
                    inputType: "text",
                  },
                  {
                    head: "Phone Number : ",
                    placeHolder: "Enter Phone Number",
                    name: "phone_number",
                    errors: errors,
                    inputType: "number",
                  },
                  {
                    head: "Email : ",
                    placeHolder: "Enter Email",
                    name: "email",
                    errors: errors,
                    inputType: "text",
                  },
                  {
                    head: "Password : ",
                    placeHolder: "Enter Password",
                    name: "password",
                    errors: errors,
                    isPassword: true,
                  },
                  {
                    head: "Confirm Password : ",
                    placeHolder: "confirm your password",
                    name: "password_confirmation",
                    errors: errors,
                    isPassword: true,
                  },
                  // {
                  //   head: "Country Code : ",
                  //   placeHolder: "Select Country Code : ex SA",
                  //   name: "country_code",
                  //   errors: errors,
                  //   isSelect: true,
                  //   optionList: countryList,
                  //   value: "short_name",
                  //   key: "uuid",
                  //   displayValue: "short_name",
                  // },
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

export default UserCard;
