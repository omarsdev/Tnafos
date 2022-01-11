import React, { useState, useEffect } from "react";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

import { CustomTable } from "../../components";

import { AxiosInstance } from "../../../../api";

const PaymentHome = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  //* representing certain number of rows based on select option:
  const [rowsNumber, setRowsNumber] = useState("10");

  const match = useRouteMatch();
  const history = useHistory();

  const paymentsList = async () => {
    await AxiosInstance.get("/api/dashboard/payment/")
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchHandler = () => {
    history.push(`/${searchInput}`);
  };

  useEffect(() => {
    paymentsList();
  }, []);

  return (
    <CustomTable
      PageHeadLine="Payments"
      thHeading="List of payments"
      thData={[
        "Transaction-ID",
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
  );
};

export default PaymentHome;
