import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import InvoiceHome from "./InvoiceHome";
import AddInvoice from "./AddInvoice";
import Incoming from "./Incoming";
import InvoiceCard from "./InvoiceCard";
import Outgoing from "./Outgoing";

const InvoiceLayout = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={InvoiceHome} />
      <Route path={`${match.path}/addinvoice`} component={AddInvoice} />
      <Route path={`${match.path}/incoming/:uuid`} component={InvoiceCard} />
      <Route path={`${match.path}/outgoing/:uuid`} component={InvoiceCard} />
      <Route path={`${match.path}/incoming`} component={Incoming} />
      <Route path={`${match.path}/outgoing`} component={Outgoing} />
      <Route path={`${match.path}/invoicecard`} component={InvoiceCard} />
    </Switch>
  );
};

export default InvoiceLayout;
