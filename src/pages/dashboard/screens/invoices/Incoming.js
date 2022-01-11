import React, { useState, useEffect } from "react";
import { Box, Center, Heading, Spinner } from "@chakra-ui/react";

import { CustomTable, NoData } from "../../components";

import { AxiosInstance } from "../../../../api";

const Incoming = () => {
  const [list, setList] = useState(null);

  const invoiceIncomingList = async () => {
    await AxiosInstance.get("/api/dashboard/invoice/incoming")
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    invoiceIncomingList();
  }, []);

  return (
    <Box>
      {!list ? (
        <Center h="70vh" w="100%">
          <Spinner size="xl" color="#F8B916" />
        </Center>
      ) : list.length === 0 ? (
        <NoData />
      ) : (
        <CustomTable
          PageHeadLine="Invoices - Incoming"
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
        />
      )}
    </Box>
  );
};

export default Incoming;
