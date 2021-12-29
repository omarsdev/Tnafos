import React, { useContext, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { AxiosInstance } from "api";
import { UserDataContext } from "context";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { companyProviderValue } = useContext(UserDataContext);
  const { companyInfo, setCompanyInfo } = companyProviderValue;

  let history = useHistory();

  const showCompany = () => {
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
        set;
      });
  };

  useEffect(() => {
    showCompany();
  }, [companyInfo]);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (companyInfo) {
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
