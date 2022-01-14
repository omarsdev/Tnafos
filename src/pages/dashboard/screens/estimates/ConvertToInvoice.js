import React, { useState, useContext, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { RiExchangeDollarLine, RiRefreshLine } from "react-icons/ri";

import {
  useHistory,
  useParams,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../../api";
import { AlertContext } from "../../../../context/AlertContext";
import { CustomEditForm, CustomAddForm } from "../../components";

const ConvertToInvoice = () => {
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

  const estOutgoingList = async () => {
    await AxiosInstance.get("/api/dashboard/estimate/outgoing")
      .then((res) => {
        console.log(res.data.data);
        resetHooksForm(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetHooksForm = (data) => {
    reset({
      //   subject: data.subject,
      //   status: data.status,
      date: data.date,
      //   valid_till: data.valid_till,
      //   currency: data.currency,
      //   customer_id: data.customer_id,
      //   assigned_to: data.assigned_to,
      //   discount_type: data.discount_type,
      //   discount_amount: data.discount_amount,
      //   subtotal: data.subtotal,
      //   total: data.total,
      //   lines: data.lines,

      due_date: data.due_date,
    });
  };

  const converttoinvoice = async (dataToUpdate) => {
    setErrors(null);
    setIsUpdating(true);
    await AxiosInstance.put(
      `/api/dashboard/estimate/${uuid}/convert-to-invoice`,
      dataToUpdate
    )
      .then((res) => {
        console.log(res);
        setIsUpdating(false);
        setAlert({
          message: "Estimate has been concerted to invoice!",
          type: "info",
        });
        history.push(`/dashboard/estimatehome`);
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
    estOutgoingList();
  }, []);

  return (
    <>
      <Center>
        <IconButton
          justify={"center"}
          fontSize={"x-large"}
          rounded={"full"}
          bg={"#F8B916"}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "orange.400",
          }}
          icon={<RiExchangeDollarLine />}
          onClick={onOpen}
        />
      </Center>
      {/* conert to invoice */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader
            fontWeight="medium"
            fontSize="x-large"
            fontFamily="inhirit"
            textColor="#F8B916"
          >
            Update your estimate's info
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CustomEditForm
              isOpen={isOpen}
              onCancelHandler={onCancelHandler}
              onUpdate={handleSubmit(converttoinvoice)}
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
                    head: "Due_date : ",
                    placeHolder: "Enter Due_date",
                    name: "due_date",
                    inputType: "text",
                    errors: errors,
                  },
                ]}
              ></CustomAddForm>
            </CustomEditForm>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConvertToInvoice;
