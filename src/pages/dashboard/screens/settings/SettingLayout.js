import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import SettingHome from "./SettingHome";

const SettingLayout = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={SettingHome} />
    </Switch>
  );
};

export default SettingLayout;
