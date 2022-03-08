import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/auth/screens/Login";
import Register from "./pages/auth/screens/register/Register";
import Homepage from "./pages/homepage/Homepage";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
// import E404 from "./pages/common/E404";
import Search from "./pages/search/Search";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { AlertContextProvider } from "./context/AlertContext";
import { UserDataContextProvider } from "./context";
import { ErrorBoundary } from "react-error-boundary";
import { FallBack } from "./components/FallBack";

import { useSoftUIController } from "context/SoftUI";
import theme from "assets/theme";

const App = () => {
  const errorHandler = (error, errorInfo) => {
    console.log("Logging: ", error, errorInfo);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary FallbackComponent={FallBack} onError={errorHandler}>
        {/* <ChakraProvider> */}
        <UserDataContextProvider>
          <AlertContextProvider>
            {/* <SizeContextProvider>x */}
            <Router>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={DashboardLayout} />
                <Route path="/:search" component={Search} />

                {/* <Route path="*" component={E404} />  */}
              </Switch>
            </Router>
            {/* </SizeContextProvider> */}
          </AlertContextProvider>
        </UserDataContextProvider>
        {/* </ChakraProvider> */}
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
