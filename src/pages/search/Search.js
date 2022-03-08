import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import DashboardNavbar from "./components/navbar/DashboardNavbar";
import MyList from "./components/MyList";
import MainCompany from "./components/MainCompany";
import CardItem from "./components/CardItem";

import Company from "./screens/Company";
import Service from "./screens/Service";
import Vender from "./screens/Vender";

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import SuiBox from "components/SuiBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { SearchDataContextProvider } from "../../context/SearchDataContext";

const Search = () => {
  let match = useRouteMatch();

  return (
    <SearchDataContextProvider>
      {/* <DashboardLayout> */}
      <DashboardNavbar />
      <SuiBox px={4} my={4}>
        <Grid container spacing={3} mt={15}>
          {/*page side's content */}
          <Grid item xs={12} sm={4} lg={3}>
            <Switch>
              <Route exact path={`${match.path}`}>
                <MyList />
              </Route>
              <Route path={`${match.path}/:serviceId/:companyId`}>
                <MainCompany />
              </Route>
              <Route path={`${match.path}/:serviceId`}>
                <SuiBox mb={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <CardItem isSelected={true} />
                    </Grid>
                    <Grid item xs={12}>
                      <MyList />
                    </Grid>
                  </Grid>
                </SuiBox>
              </Route>
            </Switch>
          </Grid>

          <Divider />

          {/* page content */}
          <Grid item xs={12} sm={8} lg={9}>
            <Switch>
              <Route exact path={`${match.path}`} component={Service} />
              <Route
                path={`${match.path}/:serviceId/:companyId`}
                component={Company}
              />
              <Route path={`${match.path}/:serviceId`} component={Vender} />
            </Switch>
          </Grid>
        </Grid>
      </SuiBox>
      {/* </DashboardLayout> */}
    </SearchDataContextProvider>
  );
};

export default Search;