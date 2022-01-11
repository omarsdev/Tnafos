import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import AddClient from "./AddClient";
import ClientCard from "./ClientCard";
import ClientHome from "./ClientHome";

import ClientContacts from "./ClientContacts";
import ClientMedia from "./ClientMedia";

const ClientLayout = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={ClientHome} />
      <Route path={`${match.path}/addclient`} component={AddClient} />
      <Route path={`${match.path}/:uuid/contacts`} component={ClientContacts} />
      <Route path={`${match.path}/:uuid/media`} component={ClientMedia} />
      <Route path={`${match.path}/:uuid`} component={ClientCard} />
    </Switch>
  );
};

export default ClientLayout;
