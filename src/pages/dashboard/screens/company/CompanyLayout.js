import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Create from "./Create";
import Home from "./Home";

const CompanyLayout = () => {
    const match = useRouteMatch();
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Switch>
                <Route path={`${match.path}/create`} component={Create} />
                <Route path={`${match.path}`} component={Home} />
            </Switch>
        </DashboardLayout>
    );
};

export default CompanyLayout;