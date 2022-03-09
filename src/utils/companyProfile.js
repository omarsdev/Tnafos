export const companyProfile = () => {
  const showCompany = async () => {
    await AxiosInstance.get("/api/dashboard/company")
      .then((res) => {
        setcompanyInfo(res.data.data);
        let company = res.data.data;
        delete company.country;
        delete company.admin;
        delete company.category;
        resetHooksForm(res.data.data);
      })
      .catch((err) => {
        history.push("/dashboard/company");
      });
  };
  return showCompany();
};
