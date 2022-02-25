import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import Add from "./Add";
import Incoming from "./Incoming"
import Outgoing from "./Outgoing"


const PurchaseRequestsLayout = () => {
    const match = useRouteMatch();

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Switch>
                <Route path={`${match.path}/add`} component={Add} />
                <Route path={`${match.path}/incoming`} component={Incoming} />
                <Route path={`${match.path}/outgoing`} component={Outgoing} />
                <Route path={`${match.path}`} component={Add} />
                {/*  */}
                {/* <Route path={`${match.path}/outgoing/:uuid`} component={UpdatePurchase} />
                <Route path={`${match.path}/incoming/:uuid`} component={UpdatePurchase} />*/}
            </Switch>
        </DashboardLayout>
    );
}

export default PurchaseRequestsLayout