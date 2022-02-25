import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import UserHome from "./UserHome";
import CreateUser from "./CreateUser";
import MyProfile from "./MyProfile";
import UserCard from "./UserCard";
import EditUser from "./EditUser";

const UserLayout = () => {
  const match = useRouteMatch();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Switch>
        <Route exact path={`${match.path}`} component={UserHome} />
        <Route path={`${match.path}/createuser`} component={CreateUser} />
        <Route path={`${match.path}/profile`} component={MyProfile} />
        <Route path={`${match.path}/:uuid/edituser`} component={EditUser} />
        <Route path={`${match.path}/:uuid`} component={UserCard} />
      </Switch>
    </DashboardLayout>
  );
};

export default UserLayout;
