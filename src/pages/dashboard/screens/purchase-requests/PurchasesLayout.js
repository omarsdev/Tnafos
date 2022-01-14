import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import AddPurchase from "./AddPurchase";
import IncomingPurchases from "./IncomingPurchases";
import OutgoingPurchases from "./OutgoingPurchases";
import PurchasesHome from "./PurchasesHome";
import UpdatePurchase from "./UpdatePurchase";

const PurchasesLayout = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={PurchasesHome} />
      <Route path={`${match.path}/addpurchase`} component={AddPurchase} />
      <Route path={`${match.path}/outgoing/:uuid`} component={UpdatePurchase} />
      <Route path={`${match.path}/incoming/:uuid`} component={UpdatePurchase} />
      <Route path={`${match.path}/incoming`} component={IncomingPurchases} />
      <Route path={`${match.path}/outgoing`} component={OutgoingPurchases} />
    </Switch>
  );
};

export default PurchasesLayout;
