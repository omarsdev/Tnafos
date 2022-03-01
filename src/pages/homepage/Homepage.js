import React, { useContext, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Custom styles for the BaiseLayout
import styles from "layouts/authentication/components/styles";

// Soft UI Dashboard PRO React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";
import { Navbar } from "./components";

import { AxiosInstance } from "../../api";
import { UserDataContext } from "../../context";
import { getToken } from "../../utils";
import { TnafosHomeLogo } from "../../assets/icons";

const Homepage = ({ image }) => {
  const classes = styles({ image });
  // const classes = styles({ transparentNavbar, absolute, light, isMini });
  const { tokenProviderValue, dataProviderValue } = useContext(UserDataContext);
  const { userToken } = tokenProviderValue;
  const { setUserData } = dataProviderValue;

  const history = useHistory();

  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };
  const searchHandler = () => {
    history.push(`/${searchInput}`);
  };

  const fetchTokenMe = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/user/my-profile");
      setUserData(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (getToken()) {
      fetchTokenMe();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <h1>Spinner </h1>;

  return (
    <PageLayout background="white">
      <Navbar />

      <SuiBox p={3} mb={1} textAlign="center">
        <TnafosHomeLogo />
      </SuiBox>
      <SuiBox p={3} mb={1} textAlign="center">
        <SuiBox pr={1}>
          <SuiInput
            placeholder="Type here..."
            withIcon={{ icon: "search", direction: "left" }}
            customClass={classes.navbar_input}
            onKeyPress={handleKeypress}
          />
          <Icon className={"text-dark"} onClick={searchHandler} />
        </SuiBox>

        <SuiBox
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          mb={3}
          mt={1}
        >
          <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
            <SuiTypography
              component="a"
              href="#"
              variant="body2"
              textColor="secondary"
            >
              Products
            </SuiTypography>
          </SuiBox>
          <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
            <SuiTypography
              component="a"
              href="#"
              variant="body2"
              textColor="secondary"
            >
              Services
            </SuiTypography>
          </SuiBox>
          <SuiBox mr={{ xs: 0, lg: 3, xl: 6 }}>
            <SuiTypography
              component="a"
              href="#"
              variant="body2"
              textColor="secondary"
            >
              Categories
            </SuiTypography>
          </SuiBox>
          <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
            <SuiTypography
              component="a"
              href="#"
              variant="body2"
              textColor="secondary"
            >
              Blog
            </SuiTypography>
          </SuiBox>
          <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
            <SuiTypography
              component="a"
              href="#"
              variant="body2"
              textColor="secondary"
            >
              GitHub
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <SuiBox p={3} mb={1} textAlign="center"></SuiBox>
    </PageLayout>
  );
};

export default Homepage;
