import React, { useState, useEffect } from "react";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";
import { AddPayment, EditPayment } from "./";
import { AxiosInstance } from "api";
import { CustomTable } from "pages";

export const PaymentHome = () => {
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
    <Switch>
      <Route exact path={`${match.path}`}>
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
      </Route>
      <Route path={`${match.path}/addpayment`} component={AddPayment} />
      <Route path={`${match.path}/:uuid`} component={EditPayment} />
    </Switch>
  );
};
