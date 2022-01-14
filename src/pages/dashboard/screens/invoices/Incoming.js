import React, { useState, useEffect } from "react";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

import { CustomTable } from "../../components";
import { AxiosInstance } from "../../../../api";

import InvoiceCard from "./InvoiceCard";

const Incoming = () => {
  const [list, setList] = useState(null);
  const match = useRouteMatch();
  const history = useHistory();

  const getIncomingInvo = async () => {
    await AxiosInstance.get("/api/dashboard/invoice/incoming")
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        history.push("/dashboard/invoicehome");
      });
  };

  useEffect(() => {
    getIncomingInvo();
  }, []);

  return (
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
  );
};

export default Incoming;
