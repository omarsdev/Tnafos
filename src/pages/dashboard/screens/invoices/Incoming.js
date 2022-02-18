import React, { useState, useEffect } from "react";
import { Box, HStack, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { CustomTable } from "../../components";
import { AxiosInstance } from "../../../../api";

const Incoming = () => {
  const [list, setList] = useState(null);
  const history = useHistory();

  const getIncomingInvo = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/invoice/incoming");
      setList(res.data.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/invoicehome");
    }
  };

  useEffect(() => {
    getIncomingInvo();
  }, []);

  return (
    <Box w="full" h="screen" padding={{ base: 1, sm: 3, md: 4, lg: 6 }}>
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize={{
            base: "large",
            sm: "large",
            md: "x-large",
            lg: "xx-large",
          }}
          fontWeight="lg"
          alignItems="baseline"
          mb={{ base: 2, lg: 4 }}
        >
          Outgoing Invoices
        </Heading>
      </HStack>
      <CustomTable
        thHeading="List of Invoices - Incoming"
        thData={[
          "Invoices-ID",
          "Amount",
          "Date",
          "Method",
          "Transaction Number",
          "Notes",
          "options",
        ]}
        list={list}
        listData={[
          "uuid",
          "amount",
          "date",
          "method",
          "transaction_number",
          "notes",
        ]}
        component={"invoice"}
      />
    </Box>
  );
};

export default Incoming;
