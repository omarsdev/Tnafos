import { AxiosInstance } from "../api";
import { useHistory } from "react-router-dom";

export const CompanyProfile = () => {
  const [companyInfo, setcompanyInfo] = useState({});
  const history = useHistory();
  const showCompany = async () => {
    await AxiosInstance.get("/api/dashboard/company")
      .then((res) => {
        setcompanyInfo(res.data.data);
        let company = res.data.data;
        console.log(company);
        delete company.country;
        delete company.admin;
        delete company.category;
        resetHooksForm(res.data.data);
      })
      .catch((err) => {
        history.push("/dashboard/company");
      });
  };
};
