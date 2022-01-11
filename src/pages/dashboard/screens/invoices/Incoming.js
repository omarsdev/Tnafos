import React, { useState, useEffect } from "react";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

import { CustomTable, NoData } from "../../components";
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
    <Switch>
      <Route>
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
      </Route>
      <Route path={`${match.path}/:uuid`} component={InvoiceCard} />
    </Switch>
  );
};

export default Incoming;
