import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Homepage,
  NotFound,
  SearchLayout,
  DashboardLayout,
  Login,
  Register,
  E404,
} from "./pages";
import { UserDataContextProvider } from "./context";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { withFocusVisible } from "@v1v2/chakra";

const theme = extendTheme(
  {
    components: {
      Checkbox: {
        baseStyle: {
          control: {
            bg: "white",
            _checked: {
              bg: "#F8B916",
            },
          },
        },
      },
    },
  },
  withFocusVisible()
);

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <UserDataContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={DashboardLayout} />
            <Route path="/:search" component={SearchLayout} />
            <Route path="*" component={E404} />
          </Switch>
        </Router>
      </UserDataContextProvider>
    </ChakraProvider>
  );
};

export default App;
