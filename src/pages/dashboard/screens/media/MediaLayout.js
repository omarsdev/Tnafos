import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import MediaHome from "./MediaHome";
import AddMedia from "./AddMedia";
import MyMedia from "./MyMedia";

const MediaLayout = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={MediaHome} />
      <Route path={`${match.path}/addmedia`} component={AddMedia} />
      <Route path={`${match.path}/:uuid`} component={MyMedia} />
    </Switch>
  );
};

export default MediaLayout;
