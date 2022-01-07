import React, { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { AxiosInstance } from "api";
import { CustomTable } from "pages";

export const Outgoing = () => {
  const [list, setList] = useState(null);

  const invoiceIncomingList = async () => {
    await AxiosInstance.get("/api/dashboard/invoice/outgoing")
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
    </Box>
  );
};
