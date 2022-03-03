import React, { useContext, useEffect } from "react";

import CardItem from "../components/CardItem";
import { SearchDataContext } from "../../../context/SearchDataContext";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const Company = () => {
  const { companyListProviderValue } = useContext(SearchDataContext);
  const { companyList, setCompanyList } = companyListProviderValue;

  useEffect(() => {}, []);

  return (
    <Card>
      <SuiBox pt={2} px={2}>
        <SuiBox mb={0.5}>
          <SuiTypography variant="h6" fontWeight="medium">
            Projects
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={3}>
            <CardItem
              title="React Native Mobile App (iOS & Android)"
              srcImg="https://bit.ly/sage-adebayo"
              body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
              isCompany={true}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <CardItem
              title="React Native Mobile App (iOS & Android)"
              srcImg="https://bit.ly/sage-adebayo"
              body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
              isCompany={true}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <CardItem
              title="React Native Mobile App (iOS & Android)"
              srcImg="https://bit.ly/sage-adebayo"
              body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
              isCompany={true}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <CardItem
              title="React Native Mobile App (iOS & Android)"
              srcImg="https://bit.ly/sage-adebayo"
              body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
              isCompany={true}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <CardItem
              title="React Native Mobile App (iOS & Android)"
              srcImg="https://bit.ly/sage-adebayo"
              body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
              isCompany={true}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <CardItem
              title="React Native Mobile App (iOS & Android)"
              srcImg="https://bit.ly/sage-adebayo"
              body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
              isCompany={true}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <CardItem
              title="React Native Mobile App (iOS & Android)"
              srcImg="https://bit.ly/sage-adebayo"
              body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
              isCompany={true}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <CardItem
              title="React Native Mobile App (iOS & Android)"
              srcImg="https://bit.ly/sage-adebayo"
              body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
              isCompany={true}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <CardItem
              title="React Native Mobile App (iOS & Android)"
              srcImg="https://bit.ly/sage-adebayo"
              body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
              isCompany={true}
            />
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
};
export default Company;
