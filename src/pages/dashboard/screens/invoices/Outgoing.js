import React, { useState, useEffect } from "react";
import { Box, HStack, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { CustomTable } from "../../components";

import { AxiosInstance } from "../../../../api";

const Outgoing = () => {
  const [list, setList] = useState(null);
  const history = useHistory();

  const getOutgoingInvoi = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/invoice/outgoing");
      setList(res.data.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/invoicehome");
    }
  };

  useEffect(() => {
    getOutgoingInvoi();
  }, []);

  return (
    <Box w="full" overflowY="scroll" padding={{ base: 4, sm: 4, md: 4, lg: 6 }}>
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
        component="invoice"
      />
    </Box>
  );
};

export default Outgoing;
