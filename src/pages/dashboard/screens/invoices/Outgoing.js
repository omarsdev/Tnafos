import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Center, Heading, Spinner } from "@chakra-ui/react";
import { AxiosInstance } from "api";
import { CustomTable, NoData } from "pages";

export const Outgoing = () => {
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
    <Box>
      {!list ? (
        <Center h="70vh" w="100%">
          <Spinner size="xl" color="#F8B916" />
        </Center>
      ) : list.length === 0 ? (
        <NoData />
      ) : (
        <CustomTable
          PageHeadLine="Invoices - Outgoing"
          thHeading="List of Invoices - Outgoing"
          thData={[
            "Invoices-ID",
            "Subject",
            "Date",
            "Discount Amount",
            "Vat Amount",
            "Total",
            "options",
          ]}
          list={list}
          listData={[
            "uuid",
            "subject",
            "date",
            "discount_amount",
            "vat_amount",
            "total",
          ]}
        />
      )}
    </Box>
  );
};
