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
  Stack,
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
import { AxiosInstance } from "../../../../api";

import { CustomEditForm, CustomAddForm } from "../../components";

import { useForm } from "react-hook-form";
import { AlertContext } from "../../../../context/AlertContext";
import UpdateStatus from "./UpdateStatus";
import ConvertToInvoice from "./ConvertToInvoice";

import { MdOutlinePermMedia } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const EstimateCard = () => {
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
      subject: data.subject,
      status: data.status,
      date: data.date,
      valid_till: data.valid_till,
      currency: data.currency,
      customer_id: data.customer_id,
      assigned_to: data.assigned_to,
      discount_type: data.discount_type,
      discount_amount: data.discount_amount,
      subtotal: data.subtotal,
      total: data.total,
      //   lines: data.lines,
    });
  };

  const getEstimate = async () => {
    await AxiosInstance.get(`/api/dashboard/estimate/${uuid}`)
      .then((res) => {
        console.log(res.data.data);
        resetHooksForm(res.data.data);
        setCard(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        history.push("/dashboard/estimate");
      });
  };

  const updateEstimate = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    await AxiosInstance.put(`/api/dashboard/estimate/${uuid}/update`, data)
      .then((res) => {
        console.log(res);
        setIsUpdating(false);
        setAlert({
          message: "Estimate's info has been updated!",
          type: "info",
        });
        history.push(`/dashboard/estimate`);
      })
      .catch((err) => {
        setIsUpdating(false);
        setErrors(err.response.data);
        setAlert({
          message: `${err.response.data.message}`,
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
    getEstimate();
  }, []);

  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        {/* {!card ? (
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
                <VStack spacing="20px" mx="5%" mt="5">
                  <Box mr="0">
                    <Text py="1" textColor="gray.600">
                      Subject: {card?.subject}
                    </Text>
                    <Text textColor="gray.600">Status: {card?.status}</Text>
                    <Text textColor="gray.600">Date:{card?.date}</Text>
                    <Text textColor="gray.600">
                      Valid-till:{card?.valid_till}
                    </Text>
                    <Text textColor="gray.600">Currency:{card?.currency}</Text>
                    <Text textColor="gray.600">
                      Type of discount:{card?.discount_type}
                    </Text>
                    <Text textColor="gray.600">
                      Amount of discount:{card?.discount_amount}
                    </Text>
                    <Text textColor="gray.600">Sub-total:{card?.subtotal}</Text>
                    <Text textColor="gray.600">Total:{card?.total}</Text>
                    <Text textColor="gray.600">
                      Contact personal-info:
                      <Stack>
                        <Text>{card?.assigned_to?.first_name}</Text>
                        <Text>{card?.assigned_to?.last_name}</Text>
                        <Text>{card?.assigned_to?.email}</Text>
                        <Text>{card?.assigned_to?.phone_number}</Text>
                        <Text>{card?.assigned_to?.uuid}</Text>
                        <Text>{card?.assigned_to?.is_admin}</Text>
                      </Stack>
                    </Text>
                    <Text textColor="gray.600">
                      Company Info:{" "}
                      {card.customer.map((element, idxx) => (
                        <Stack key={idxx}>
                          <Text>
                            {element?.primary_contact.map((item, index) => (
                              <Stack>
                                <Text>{item?.first_name}</Text>
                                <Text>{item?.last_name}</Text>
                                <Text>{item?.position}</Text>
                                <Text>{item?.email}</Text>
                                <Text>{item?.phone_number}</Text>
                                <Text>{item?.uuid}</Text>
                              </Stack>
                            ))}
                          </Text>
                          <Text>{element?.company_name}</Text>
                          <Text>{element?.vat_number}</Text>
                          <Text>{element?.phone}</Text>
                          <Text>{element?.fax}</Text>
                          <Text>{element?.website}</Text>
                          <Text>{element?.currency}</Text>
                          <Text>{element?.state}</Text>
                          <Text>{element?.city}</Text>
                          <Text>{element?.zipcode}</Text>
                          <Text>{element?.address}</Text>
                          <Text>
                            {element.country.map((e, id) => (
                              <Stack key={id}>
                                <Text>{e?.name}</Text>
                                <Text>{e?.short_name}</Text>
                                <Text>{e?.country_code}</Text>
                                <Text>{e?.currency}</Text>
                                <Text>{e?.uuid}</Text>
                              </Stack>
                            ))}
                          </Text>
                        </Stack>
                      ))}
                    </Text>
                  </Box>

                  <Flex justify={"center"} w="full" gap="15px">
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
                  </Flex>
                </VStack>
              </Box>
            </Center>

            <CustomEditForm
              isOpen={isOpen}
              onCancelHandler={onCancelHandler}
              onUpdate={handleSubmit(updateEstimate)}
              isUpdating={isUpdating}
              errors={errors}
            >
              <CustomAddForm
                listForm={[
                  {
                    head: "Subject : ",
                    placeHolder: "Enter Subject",
                    name: "subject",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Status : ",
                    placeHolder: "Enter Status",
                    name: "status",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Date : ",
                    placeHolder: "Enter Date",
                    name: "date",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Valid - till : ",
                    placeHolder: "valid - till",
                    name: "valid_till",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Currency : ",
                    placeHolder: "Enter Currency",
                    name: "currency",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Customer Id : ",
                    placeHolder: "Enter customer_id",
                    name: "customer_id",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Assigned - to : ",
                    placeHolder: "Enter the uuid here",
                    name: "assigned_to",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Discount- type : ",
                    placeHolder: "Enter discount_type",
                    name: "discount_type",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Discount - amount : ",
                    placeHolder: "Enter discount_amount",
                    name: "discount_amount",
                    inputType: "number",
                    errors: errors,
                  },
                  {
                    head: "Sub-total : ",
                    placeHolder: "Enter sub-total",
                    name: "subtotal",
                    inputType: "number",
                    errors: errors,
                  },
                  {
                    head: "Total : ",
                    placeHolder: "Enter Total",
                    name: "total",
                    inputType: "number",
                    errors: errors,
                  },
                  //   {
                  //     head: "Lines : ",
                  //     placeHolder: "Enter Lines",
                  //     name: "lines",
                  //     inputType: "text",
                  //     errors: errors,
                  //   },
                ]}
                control={control}
                register={register}
              />
            </CustomEditForm>
          </>
        )} */}
        <h1>HEllo WOrld</h1>
      </Route>
      <Route path={`${match.path}/updatestatus`} component={UpdateStatus} />
      <Route
        path={`${match.path}/converttoinvoice`}
        component={ConvertToInvoice}
      />
    </Switch>
  );
};

export default EstimateCard;
