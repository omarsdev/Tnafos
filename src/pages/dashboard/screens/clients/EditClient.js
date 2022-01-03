import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import {
  IconButton,
  Box,
  Text,
  Image,
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
import { useHistory, useParams } from "react-router-dom";
import { AxiosInstance } from "api";

import {
  RegularInputControl,
  SecondaryButton,
  PrimaryButton,
} from "components";

import { useForm } from "react-hook-form";
import { AlertContext } from "context/AlertContext";
import { media } from "api/media";

export const EditClient = () => {
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
  // let inputRef = useRef(null);

  const resetHooksForm = (data) => {
    reset({
      first_name: data.first_name,
      last_name: data.last_name,
      position: data.position,
      email: data.email,
      phone_number: data.notes,
      country_code: data.country_code,
    });
  };

  const getContact = async () => {
    await AxiosInstance.get(`/api/dashboard/contact/${uuid}`)
      .then((res) => {
        console.log(res.data.data);
        resetHooksForm(res.data.data);
        setCard(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        history.push("/dashboard/clientsHome");
      });
  };

  const updateClient = useCallback(async (data) => {
    setErrors(null);
    setIsUpdating(true);
    await AxiosInstance.put(`/api/dashboard/contact/${uuid}/update`, data)
      .then((res) => {
        console.log(res);
        setIsUpdating(false);
        setAlert({
          message: "Contact's info has been updated!",
          type: "info",
        });
        history.push(`/dashboard/clientsHome`);
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

  useEffect(() => {
    getContact();
  }, []);

  //* media file upload:
  const uploadFile = (photo) => {
    if (!photo) return;
    media(uuid, "payment", photo);
  };

  return !card ? (
    <Center h="70vh" w="100%">
      <Spinner size="xl" color="#F8B916" />
    </Center>
  ) : (
    <>
      <Center py="5">
        <Box
          className="rounded-3xl relative bg-white shadow-2xl"
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
          <VStack spacing="20px" mx="5%" mt="5">
            <Box mr="0">
              <Text py="1" textColor="gray.600">
                First name: {card?.first_name}
              </Text>
              <Text py="1" textColor="gray.600">
                Last name: {card?.last_name}
              </Text>
              <Text textColor="gray.600">Position: {card?.position}</Text>
              <Text textColor="gray.600">Email: {card?.email}</Text>
              <Text textColor="gray.600">
                Phone number:{card?.phone_number}
              </Text>
              <Text textColor="gray.600">
                Country code:{card?.country_code}
              </Text>
            </Box>

            <Flex justify={"center"} mt={-12}>
              <SecondaryButton
                justify={"center"}
                fontSize={"md"}
                rounded={"full"}
                // bg={"#F8B916"}
                // color={"white"}
                // boxShadow={
                //   "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                // }
                // _hover={{
                //   bg: "orange.400",
                // }}
                // icon={<FiEdit />}
                onClick={onOpen}
                name="Click here to edit"
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
            Editing Info by filling up this form
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
                  First Nmae :
                  <RegularInputControl
                    placeHolder="first name"
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
                  Last Name:
                  <RegularInputControl
                    placeHolder="last_name"
                    name="last_name"
                    control={control}
                    register={register}
                    width="100%"
                    error={errors}
                  />
                </label>
              </Box>

              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500">
                  Position :
                  <RegularInputControl
                    placeHolder="position"
                    name="position"
                    control={control}
                    register={register}
                    width="100%"
                    error={errors}
                  />
                </label>
              </Box>

              <Box className="mt-4">
                <label className="w-32 text-left text-gray-500">
                  Email:
                  <RegularInputControl
                    placeHolder="email"
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
                  Phone Number:
                  <RegularInputControl
                    placeHolder="phone_number"
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
                  Country code:
                  <RegularInputControl
                    placeHolder="country code"
                    name="country_code"
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
                  onClick={handleSubmit(updateClient)}
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
