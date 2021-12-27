import { useState } from "react";
import { AxiosInstance } from "api";
import { useHistory } from "react-router-dom";

export const useCompany = () => {
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

  return [companyInfo, showCompany];
};
