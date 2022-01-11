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
  useDisclosure,
  Center,
  Spinner,
  Flex,
  Stack,
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

import { CustomAddForm, CustomEditForm } from "../../components";

import { useForm } from "react-hook-form";
import { AlertContext } from "context/AlertContext";
import { media } from "api/media";
import { FiEdit } from "react-icons/fi";

export const UpdatePurchase = () => {
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
      date: data.date,
      details: data.details,
      lines: data.lines,
    });
  };

  const getPurchaseCard = async () => {
    await AxiosInstance.get(`/api/dashboard/purchase-request/${uuid}`)
      .then((res) => {
        console.log(res.data.data);
        resetHooksForm(res.data.data);
        setCard(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        history.push("/dashboard/purchase-request");
      });
  };

  const updatePurchase = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    await AxiosInstance.put(`/api/dashboard/payment/${uuid}/update`, data)
      .then((res) => {
        console.log(res);
        setIsUpdating(false);
        setAlert({
          message: "Payment's info has been updated!",
          type: "info",
        });
        history.push(`/dashboard/payment`);
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
    getPurchaseCard();
  }, []);

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
                w="400px"
                h="500px"
              >
                <VStack spacing="20px" mx="5%" mt="5">
                  <Box mr="0">
                    <Text textColor="gray.600">Id: {card?.id}</Text>
                    <Text py="1" textColor="gray.600">
                      Details: {card?.details}
                    </Text>
                    <Text textColor="gray.600">Date: {card?.date}</Text>
                    <Text textColor="gray.600">
                      Services:
                      {card.services.map((el, idx) => (
                        <Stack key={idx}>
                          <Text textColor="gray.600">
                            [ {el?.service?.name}
                          </Text>
                          <Text textColor="gray.600">
                            {el?.service?.description}
                          </Text>
                          <Text textColor="gray.600">{el?.service?.price}</Text>
                          <Text textColor="gray.600">{el?.service?.type}]</Text>
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
                      icon={<FiEdit />}
                      onClick={onOpen}
                    />
                  </Flex>
                </VStack>
              </Box>
            </Center>

            {/* updating purchase-request*/}
            <CustomEditForm
              isOpen={isOpen}
              onCancelHandler={onCancelHandler}
              onUpdate={handleSubmit(updatePurchase)}
              isUpdating={isUpdating}
              errors={errors}
            >
              <CustomAddForm
                listForm={[
                  {
                    head: "Date : ",
                    placeHolder: "Enter Date",
                    name: "date",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Details : ",
                    placeHolder: "Enter Details",
                    name: "details",
                    inputType: "text",
                    errors: errors,
                  },
                  {
                    head: "Lines : ",
                    placeHolder: "Enter Lines",
                    name: "lines",
                    inputType: "text",
                    errors: errors,
                  },
                ]}
                control={control}
                register={register}
              />
            </CustomEditForm>
          </>
        )}
      </Route>
    </Switch>
  );
};
