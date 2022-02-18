import React, { useState, useEffect } from "react";
import { Box, Heading, HStack, Button } from "@chakra-ui/react";
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
    <Box w="full" padding={{ base: 4, md: 4, lg: 6 }}>
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize={{ base: "large", md: "x-large", lg: "xx-large" }}
          fontWeight="lg"
          alignItems="baseline"
          mb={{ base: 2, lg: 4 }}
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
            <Button
              colorScheme="yellow"
              size={{ base: "x-small", sm: "x-small", md: "md", lg: "large" }}
              rounded="full"
              h={{ base: 6, sm: 8, md: 10, lg: 12 }}
              w={{ base: 6, sm: 8, md: 10, lg: 12 }}
            >
              <AiOutlinePlus
                fontSize={{
                  base: "xx-small",
                  sm: "small",
                  md: "md",
                  lg: "large",
                }}
              />
            </Button>
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
