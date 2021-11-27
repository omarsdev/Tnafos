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
import { AlertContextProvider } from "context/AlertContext";

const theme = extendTheme(
  {
    colors: {
      brand: {
        primary: "#F8B916",
        primaryVariant: "#A37705",
        secondary: "#D0DAE7",
        secondaryVariant: "#48678E",
        white: "#FFFFFF",
        black: "#000000",
        dark: "#333333",
        grey: "#AEAEAE",
        paper: "#F4F3EE",
        background: "#FFFFFF",
        surface: "#F8F9FC",
        error: "#B00020",
        warning: "",
        info: "#007BFF",
      },
      primary: {
        900: "#402F02",
        800: "#725303",
        700: "#A37705",
        600: "#D59B06",
        500: "#F8B916",
        400: "#F9C848",
        300: "#FBD779",
        200: "#FCE6AB",
        100: "#FEF4DC",
        50: "#FFFCF5",
      },
      secondary: {
        900: "#26364B",
        800: "#374E6D",
        700: "#48678E",
        600: "#5C80AD",
        500: "#7E9ABE",
        400: "#99AFCC",
        300: "#B4C5D9",
        200: "#D0DAE7",
        100: "#EBEFF5",
        50: "#F8FAFC",
      },
    },
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
        <AlertContextProvider>
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
        </AlertContextProvider>
      </UserDataContextProvider>
    </ChakraProvider>
  );
};

export default App;
