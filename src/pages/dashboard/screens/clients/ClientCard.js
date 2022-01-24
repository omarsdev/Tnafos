import React, { useContext, useEffect, useState } from "react";
import {
  IconButton,
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  HStack,
  Center,
  Spinner,
  Spacer,
  VStack,
} from "@chakra-ui/react";

import { Tooltip } from "@chakra-ui/react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";

import { MdOutlinePermMedia } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useForm } from "react-hook-form";

import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance, media } from "../../../../api";
import { CustomEditForm, CustomAddForm } from "../../components";

const ClientCard = () => {
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
    try {
      const res = await AxiosInstance.get(`/api/dashboard/customer/${uuid}`);
      console.log(res.data.data);
      resetHooksForm(res.data.data);
      setCard(res.data.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/clientsHome");
    }
  };

  const updateClient = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/customer/${uuid}/update`,
        data
      );
      console.log(res);
      setIsUpdating(false);
      setAlert({
        message: "Customer's info has been updated!",
        type: "info",
      });
      history.push(`/dashboard/clientsHome`);
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
      <Center py="10">
        <Box
          rounded="3xl"
          position="relative"
          bg="brand.white"
          shadow="2xl"
          w="550px"
          h="450px"
        >
          <VStack spacing="20px" mx="5%" mt="5">
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
                <Text textColor="gray.600">Currency:{card?.currency}</Text>
                <Text textColor="gray.600">Language:{card?.language}</Text>
                <Text textColor="gray.600">Country:{card?.country?.name}</Text>
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
                <Tooltip
                  label="Show Contacts"
                  bg="white"
                  placement="top"
                  color="#333333"
                >
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
                </Tooltip>

                <Tooltip
                  label="Show Media"
                  bg="white"
                  placement="top"
                  color="#333333"
                >
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
                </Tooltip>

                <Tooltip
                  label="Edit info"
                  bg="white"
                  placement="top"
                  color="#333333"
                >
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
                </Tooltip>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Center>

      {/* updating client card*/}
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
            <CustomEditForm
              isOpen={isOpen}
              onCancelHandler={onCancelHandler}
              onUpdate={handleSubmit(updateClient)}
              isUpdating={isUpdating}
              errors={errors}
            >
              <CustomAddForm
                listForm={[
                  {
                    head: "Company Name : ",
                    placeHolder: "Enter Company Name : ",
                    name: "company_name",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "First Name : ",
                    placeHolder: "Enter First Name : ",
                    name: "first_name",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Last Name : ",
                    placeHolder: "Enter Last Name : ",
                    name: "last_name",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Position : ",
                    placeHolder: "Enter Position : ",
                    name: "position",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Email : ",
                    placeHolder: "Enter Email : ",
                    name: "email",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Phone Number : ",
                    placeHolder: "Enter Phone Number : ",
                    name: "phone_number",
                    inputType: "number",
                    errors: errors,
                  },
                  {
                    head: "Country code : ",
                    placeHolder: "Enter Country code : ",
                    name: "country_code",
                    inputType: "text",
                    errors: errors,
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

export default ClientCard;
