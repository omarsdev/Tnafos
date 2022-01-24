import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import PaymentHome from "./PaymentHome";
import PaymentCard from "./PaymentCard";
import AddPayment from "./AddPayment";
import PaymentMedia from "./PaymentMedia";

const PaymentLayout = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={PaymentHome} />
      <Route path={`${match.path}/addpayment`} component={AddPayment} />
      <Route path={`${match.path}/:uuid/media`} component={PaymentMedia} />
      <Route path={`${match.path}/:uuid`} component={PaymentCard} />
    </Switch>
  );
};

export default PaymentLayout;
