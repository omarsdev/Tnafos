import React, { useState, useEffect } from "react";
import { Box, HStack, Heading, Spinner } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { CustomTable, NoData } from "../../components";

import { AxiosInstance } from "../../../../api";

const Outgoing = () => {
  const [list, setList] = useState(null);
  const history = useHistory();

  const invoiceIncomingList = async () => {
    await AxiosInstance.get("/api/dashboard/invoice/outgoing")
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        history.push("/dashboard/invoicehome");
      });
  };

  useEffect(() => {
    invoiceIncomingList();
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
          Outgoing Invoices
        </Heading>
      </HStack>
      <CustomTable
        PageHeadLine="Invoices - Outgoing"
        thHeading="List of Invoices - Outgoing"
        thData={[
          "Invoices-ID",
          "Subject",
          "Date",
          "Discount Amount",
          "Total",
          "options",
        ]}
        list={list}
        listData={["uuid", "subject", "date", "discount_amount", "total"]}
      />
    </Box>
  );
};

export default Outgoing;
