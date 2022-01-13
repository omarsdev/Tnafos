import React, { useState } from "react";
import { Box, Heading, Center, HStack, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { CustomAddForm } from "../../components";

import { SecondaryButton, PrimaryButton } from "../../../../components";
import { AxiosInstance } from "../../../../api";

const AddInvoice = () => {
  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const createInvoice = async (data) => {
    // e.preventDefault();
    await AxiosInstance.post("/api/dashboard/invoice/create", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    history.push("/dashboard/invoicehome");
  };

  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        <Box overflowY="scroll" w="full">
          <Box
            px="20"
            mt="6"
            boxShadow="2xl"
            rounded="3xl"
            w="750px"
            ml="40"
            bg="white"
          >
            <Heading
              color="#F8B916"
              fontSize="3xl"
              fontWeight="lg"
              alignItems="baseline"
              pt="4"
              mb="12"
            >
              Fill in this form to add payment.
            </Heading>

            <form>
              <CustomAddForm
                listForm={[
                  {
                    head: "Subject",
                    placeHolder: "Enter Subject ",
                    name: "subject",
                    err: err,
                  },
                  {
                    head: " Status",
                    placeHolder: "Enter status ",
                    name: "status",
                    err: err,
                  },
                  {
                    head: "Enter Date  ",
                    placeHolder: "Enter date ",
                    name: "date",
                    err: err,
                  },
                  {
                    head: "Due - date ",
                    placeHolder: "Enter due_date",
                    name: "due_date",
                    err: err,
                  },
                  {
                    head: "Currency ",
                    placeHolder: "Enter currency",
                    name: "currency",
                    err: err,
                  },
                  {
                    head: "Customer_id ",
                    placeHolder: "Enter customer_id",
                    name: "customer_id",
                    err: err,
                  },
                  {
                    head: "Assigned_to ",
                    placeHolder: "assigned_to",
                    name: "assigned_to",
                    err: err,
                  },
                  {
                    head: " Discount_type ",
                    placeHolder: "Enter discount_type",
                    name: "discount_type",
                    err: err,
                  },
                  {
                    head: "Discount_amount ",
                    placeHolder: "discount_amount",
                    name: "discount_amount",
                    err: err,
                  },
                  {
                    head: "Subtotal ",
                    placeHolder: "Enter subtotal",
                    name: "subtotal",
                    err: err,
                  },
                  {
                    head: "Total ",
                    placeHolder: "total",
                    name: "total",
                    err: err,
                  },
                  {
                    head: "Vat-Id ",
                    placeHolder: "Enetr vat_id",
                    name: "vat_id",
                    err: err,
                  },
                  {
                    head: "Lines ",
                    placeHolder: "Enter lines",
                    name: "lines",
                    err: err,
                  },
                ]}
                control={control}
                register={register}
              />

              <HStack spacing="10px" py="10" ml="40">
                <PrimaryButton
                  name="SAVE"
                  onClick={handleSubmit(createPayment)}
                  loadingButton={isUpdating}
                />

                <SecondaryButton onClick={handleCancel} name="CANCEL" />
              </HStack>
            </form>
          </Box>
        </Box>
      </Route>
    </Switch>
  );
};

export default AddInvoice;
