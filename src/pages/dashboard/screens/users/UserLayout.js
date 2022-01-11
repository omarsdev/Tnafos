import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import UserHome from "./UserHome";
import CreateUser from "./CreateUser";
import MyProfile from "./MyProfile";
import UserCard from "./UserCard";

const UserLayout = () => {
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

export default UserLayout;
