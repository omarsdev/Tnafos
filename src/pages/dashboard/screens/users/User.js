import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { UserHome, CreateUser, MyProfile, UserCard } from "./";

export const User = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={UserHome} />
      <Route path={`${match.path}/createuser`} component={CreateUser} />
      <Route path={`${match.path}/profile`} component={MyProfile} />
      <Route path={`${match.path}/:uuid`} component={UserCard} />
    </Switch>
  );
};
