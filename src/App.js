import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomepageLayout, NotFound, Search, DashboardLayout } from "./pages";
import { UserDataContextProvider } from "./context";

import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <UserDataContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={HomepageLayout} />
            {/* <Route path="/register" component={Register} />
            <Route path="/login" component={Login} /> */}
            <Route path="/dashboard" component={DashboardLayout} />
            <Route path="/:search" component={Search} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </UserDataContextProvider>
    </ChakraProvider>
  );
};

export default App;
