import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { PaymentHome, AddPayment } from "./";

export const Payment = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`} component={PaymentHome} />
      <Route path={`${match.path}/create`} component={AddPayment} />
    </Switch>
  );
};
