import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import MyList from "./components/MyList";

import Company from "./screens/Company";
import Service from "./screens/Service";
import Vender from "./screens/Vender";

import Grid from "@mui/material/Grid";

import SuiBox from "components/SuiBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import { SearchDataContextProvider } from "../../context/SearchDataContext";

const Search = () => {
  let match = useRouteMatch({ stickyNavbar });

  return (
    <SearchDataContextProvider>
      <DashboardLayout>
        <Navbar />
        <SuiBox mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
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

            <Grid item xs={12} lg={9}>
              <SuiBox mb={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Switch>
                      <Route exact path={`${match.path}`} component={Service} />
                      <Route
                        path={`${match.path}/:serviceId/:companyId`}
                        component={Company}
                      />
                      <Route
                        path={`${match.path}/:serviceId`}
                        component={Vender}
                      />
                    </Switch>
                  </Grid>
                </Grid>
              </SuiBox>
            </Grid>
          </Grid>
        </SuiBox>
      </DashboardLayout>
    </SearchDataContextProvider>
  );
};

export default Search;
