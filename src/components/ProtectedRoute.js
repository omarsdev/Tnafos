import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  hasCompany,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (hasCompany) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                path: "/dashboard/company/create",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};
