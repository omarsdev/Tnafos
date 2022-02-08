import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Box,
  Text,
  useDisclosure,
  HStack,
  Center,
  Spinner,
  Spacer,
  VStack,
  Heading,
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
import CustomDrawer from "../../components/CustomDrawer";

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
      history.push("/dashboard/client");
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
      history.push(`/dashboard/client`);
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
      <Spinner size={{ base: "md", lg: "xl" }} color="#F8B916" />
    </Center>
  ) : (
    <>
      <Center py={{ base: 2, sm: 2, md: 4, lg: 4 }}>
        <Box
          rounded="3xl"
          position="relative"
          bg="brand.white"
          shadow="2xl"
          w={{ base: 260, sm: 350, md: 450, lg: 550 }}
          h={{ base: 430, sm: 530, md: 640, lg: 720 }}
          // borderLeft="brand.primary"
          // borderLeftWidth="20px"
        >
          <Heading
            fontSize={{ base: "small", md: "large", lg: "x-large" }}
            ml="5%"
            mt="5%"
            textColor="brand.primary"
            fontWeight="semibold"
          >
            Client's details:
          </Heading>

          <Box
            w="full"
            mt="15px"
            fontSize={{
              base: "xx-small",
              sm: "small",
              md: "md",
              lg: "large",
            }}
            bg="brand.dark"
            opacity="90%"
            textColor="white"
            px="10%"
            py="5%"
          >
            <Text py="1">Company Name: {card?.company_name}</Text>
            <Text py="1">VAT Number: {card?.vat_number}</Text>
            <Text py="1">Phone: {card?.phone}</Text>
            <Text py="1">Fax: {card?.fax}</Text>
            <Text py="1">Website:{card?.website}</Text>
            <Text py="1">Currency:{card?.currency}</Text>
            <Text py="1">Language:{card?.language}</Text>
            <Text py="1">Country:{card?.country?.name}</Text>
            <Text py="1">Address:{card?.address}</Text>
            <Text py="1">City:{card?.city}</Text>
            <Text py="1">State:{card?.state}</Text>
            <Text py="1">ZIP Code:{card?.zipcode}</Text>
            <Text py="1">Lead:{card?.lead}</Text>
            <Text py="1">Id:{card?.uuid}</Text>
          </Box>

          <HStack w="full" justify="center" mt="10px">
            <Tooltip
              label="Show Contacts"
              bg="white"
              placement="top"
              color="#333333"
            >
              <Button
                justify={"center"}
                size={{
                  base: "x-small",
                  sm: "x-small",
                  md: "md",
                  lg: "large",
                }}
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
                onClick={() => {
                  history.push(`${match.url}/contacts`);
                }}
              >
                <AiOutlineContacts
                  fontSize={{
                    base: "xx-small",
                    sm: "small",
                    md: "md",
                    lg: "large",
                  }}
                />
              </Button>
            </Tooltip>

            <Tooltip
              label="Show Media"
              bg="white"
              placement="top"
              color="#333333"
            >
              <Button
                justify={"center"}
                size={{
                  base: "x-small",
                  sm: "x-small",
                  md: "md",
                  lg: "large",
                }}
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
                onClick={() => {
                  history.push(`${match.url}/media`);
                }}
              >
                <MdOutlinePermMedia
                  fontSize={{
                    base: "xx-small",
                    sm: "small",
                    md: "md",
                    lg: "large",
                  }}
                />
              </Button>
            </Tooltip>

            <Tooltip
              label="Edit info"
              bg="white"
              placement="top"
              color="#333333"
            >
              <Button
                justify={"center"}
                size={{
                  base: "x-small",
                  sm: "x-small",
                  md: "md",
                  lg: "large",
                }}
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
            </Tooltip>
            {/* </VStack> */}
          </HStack>
          {/* </VStack> */}
        </Box>
      </Center>

      {/* updating client card*/}
      <CustomDrawer isOpen={isOpen} onCancelHandler={onCancelHandler}>
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
      </CustomDrawer>
    </>
  );
};

export default ClientCard;
