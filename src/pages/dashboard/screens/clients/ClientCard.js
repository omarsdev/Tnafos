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
import {
  useHistory,
  useParams,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { AxiosInstance } from "api";

import { MdOutlinePermMedia } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import {
  RegularInputControl,
  SecondaryButton,
  PrimaryButton,
} from "components";

import { ClientContacts, ClientMedia } from "./";

import { useForm } from "react-hook-form";
import { AlertContext } from "context/AlertContext";
import { media } from "api/media";

export const ClientCard = () => {
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
    await AxiosInstance.get(`/api/dashboard/customer/${uuid}`)
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
    await AxiosInstance.put(`/api/dashboard/customer/${uuid}/update`, data)
      .then((res) => {
        console.log(res);
        setIsUpdating(false);
        setAlert({
          message: "Customer's info has been updated!",
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

  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        {!card ? (
          <Center h="70vh" w="100%">
            <Spinner size="xl" color="#F8B916" />
          </Center>
        ) : (
          <>
            <Center py="5">
              <Box
                className="rounded-3xl relative bg-white shadow-2xl"
                w="550px"
                h="750px"
              >
                <VStack spacing="20px" mx="5%" mt="5">
                  <Image
                    src={"https://bit.ly/sage-adebayo"}
                    alt="Segun Adebayo"
                    objectFit="cover"
                    rounded="2xl"
                    w="100%"
                    h="300px"
                    layout={"fill"}
                  />
                  {/* <Box mr="0"> */}
                  <HStack w="full">
                    <Box ml="14">
                      <Text py="1" textColor="gray.600">
                        Company Name: {card?.company_name}
                      </Text>
                      <Text py="1" textColor="gray.600">
                        VAT Number: {card?.vat_number}
                      </Text>
                      <Text textColor="gray.600">Phone: {card?.phone}</Text>
                      <Text textColor="gray.600">Fax: {card?.fax}</Text>
                      <Text textColor="gray.600">Website:{card?.website}</Text>
                      <Text textColor="gray.600">
                        Currency:{card?.currency}
                      </Text>
                      <Text textColor="gray.600">
                        Language:{card?.language}
                      </Text>
                      <Text textColor="gray.600">
                        Country:{card?.country?.name}
                      </Text>
                      <Text textColor="gray.600">Address:{card?.address}</Text>
                      <Text textColor="gray.600">City:{card?.city}</Text>
                      <Text textColor="gray.600">State:{card?.state}</Text>
                      <Text textColor="gray.600">ZIP Code:{card?.zipcode}</Text>
                      <Text textColor="gray.600">Lead:{card?.lead}</Text>
                      <Text textColor="gray.600">UUID:{card?.uuid}</Text>
                    </Box>
                    <Spacer />

                    {/* <Flex justify={"center"} mt={-12}> */}
                    <VStack spacing="30px">
                      <IconButton
                        justify={"center"}
                        fontSize={"lg"}
                        rounded={"full"}
                        bg={"#F8B916"}
                        color={"white"}
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          bg: "orange.400",
                        }}
                        icon={<AiOutlineContacts />}
                        onClick={() => {
                          history.push(`${match.url}/contacts`);
                        }}
                      />
                      <IconButton
                        justify={"center"}
                        fontSize={"lg"}
                        rounded={"full"}
                        bg={"#F8B916"}
                        color={"white"}
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          bg: "orange.400",
                        }}
                        icon={<MdOutlinePermMedia />}
                        onClick={() => {
                          history.push(`${match.url}/media`);
                        }}
                      />

                      <IconButton
                        justify={"center"}
                        fontSize={"lg"}
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
                    </VStack>
                  </HStack>
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
                        Company Name :
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
        )}
      </Route>
      <Route path={`${match.path}/contacts`} component={ClientContacts} />
      <Route path={`${match.path}/media`} component={ClientMedia} />
    </Switch>
  );
};
