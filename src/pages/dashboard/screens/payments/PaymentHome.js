import React, { useState, useEffect } from "react";
import { Box, Heading, HStack, IconButton, Button } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

import { useRouteMatch, useHistory, Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import { CustomTable } from "../../components";

import { AxiosInstance } from "../../../../api";
const PaymentHome = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const match = useRouteMatch();
  const history = useHistory();

  const paymentsList = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/payment/");

      setList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const searchHandler = () => {
    history.push(`/${searchInput}`);
  };

  useEffect(() => {
    paymentsList();
  }, []);

  return (
    <Box w="full" overflowY="scroll" padding="10">
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize="xx-large"
          fontWeight="lg"
          alignItems="baseline"
        >
          Payments
        </Heading>
        <Link to={`${match.url}/addpayment`}>
          <Tooltip
            label="add new payment"
            bg="white"
            placement="top"
            color="#333333"
          >
            <IconButton
              as={Button}
              colorScheme="yellow"
              size="lg"
              icon={<AiOutlinePlus />}
              rounded="full"
            ></IconButton>
          </Tooltip>
        </Link>
      </HStack>
      <CustomTable
        thHeading="List of payments"
        thData={[
          "Transaction-ID",
          "Amount",
          "Date",
          "Transaction Number",
          "Notes",
          "options",
        ]}
        list={list}
        listData={["uuid", "amount", "date", "transaction_number", "notes"]}
        component={"payment"}
      />
    </Box>
  );
};

export default PaymentHome;
