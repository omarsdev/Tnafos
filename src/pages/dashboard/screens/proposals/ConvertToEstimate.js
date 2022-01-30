import React, { useState, useContext, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  Button,
} from "@chakra-ui/react";
import { RiExchangeDollarLine } from "react-icons/ri";
import { Tooltip } from "@chakra-ui/react";

import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../../api";
import { AlertContext } from "../../../../context/AlertContext";
import { CustomEditForm, CustomAddForm } from "../../components";

const ConvertToEstimate = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();

  const { uuid } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset, control } = useForm();

  const [card, setCard] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const getProposal = async () => {
    await AxiosInstance.get(`/api/dashboard/proposal/${uuid}`)
      .then((res) => {
        console.log(res.data.data);
        resetHooksForm(res.data.data);
        setCard(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        history.push("/dashboard/proposal");
      });
  };

  const resetHooksForm = (data) => {
    reset({
      date: data.date,
    });
  };

  const ConvertToEstimate = async (dataToUpdate) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/proposal/${uuid}/convert-to-estimate`,
        dataToUpdate
      );
      console.log(res);
      setIsUpdating(false);
      setAlert({
        message: "Proposal has been concerted to invoice!",
        type: "info",
      });
      history.push(`/dashboard/proposalhome`);
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
    getProposal();
  }, []);

  return (
    <>
      <Center>
        <Tooltip
          label="convert to estimate"
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
            }}
            icon={<RiExchangeDollarLine />}
            onClick={onOpen}
          ></Button>
        </Tooltip>
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
              onUpdate={handleSubmit(ConvertToEstimate)}
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
                ]}
                control={control}
                register={register}
              ></CustomAddForm>
            </CustomEditForm>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConvertToEstimate;
