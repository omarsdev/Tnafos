import { Box } from "@chakra-ui/layout";
import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import {
  Client,
  Company,
  Estimate,
  Payment,
  Invoice,
  PurchaseRequest,
  Settings,
  User,
  Service,
} from "../../components";

export const DashboardContent = () => {
  let match = useRouteMatch();
  return (
    <>
      <Box>
        {/* {body} */}
        <Switch>
          <Route exact path={match.path} />
          <Route path={`${match.path}/company`} component={Company} />
          <Route path={`${match.path}/user`} component={User} />
          <Route path={`${match.path}/service`} component={Service} />
          <Route
            path={`${match.path}/purchase-requests`}
            component={PurchaseRequest}
          />
          <Route path={`${match.path}/payment`} component={Payment} />
          <Route path={`${match.path}/invoice`} component={Invoice} />
          <Route path={`${match.path}/estimate`} component={Estimate} />
          <Route path={`${match.path}/client`} component={Client} />
          <Route path={`${match.path}/settings`} component={Settings} />
        </Switch>
      </Box>
    </>
  );
};
