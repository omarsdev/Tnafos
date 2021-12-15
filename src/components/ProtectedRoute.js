import React, { useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { AxiosInstance } from "api";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [companyInfo, setCompanyInfo] = useState(null);
  let history = useHistory();

  const showCompany = async () => {
    await AxiosInstance.get("/api/dashboard/company")
      .then((res) => {
        setCompanyInfo(res.data.data);
        let company = res.data.data;
        console.log(company);
        delete company.country;
        delete company.admin;
        delete company.category;
      })
      .catch((err) => {
        history.push("/dashboard/company");
      });
  };
  return (
    <Route
      {...rest}
      render={(props) => {
        if (showCompany) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/dashboard/company/create",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};
