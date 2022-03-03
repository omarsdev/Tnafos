import React from "react";

// import { Linkedin, Twitter, Link, Mail, Phone } from "react-feather";

import Login from "../../../assets/images/login.jpg";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

const MainCompany = () => {
  return (
    <SuiBox mb={3}>
      <Card>
        <SuiBox p={3}>
          <SuiBox
            component="img"
            src={Login}
            boxShadow="lg"
            borderRadius="xl"
            width="100%"
          />

          <SuiBox p={3}>
            <SuiTypography variant="h5" fontWeight="bold">
              Company Name
            </SuiTypography>
            <SuiBox mb={3}>
              <SuiTypography variant="body2" textColor="text">
                Personal profiles are the perfect way for you to grab their
                attention and persuade recruiters to continue reading your CV
                because you’re telling them from the off exactly why they should
                hire you.
              </SuiTypography>
            </SuiBox>
          </SuiBox>

          <Divider />

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SuiBox mt={1}>
                <SuiTypography variant="h6" fontWeight="medium">
                  5+
                </SuiTypography>
              </SuiBox>
              <SuiBox mb={1}>
                <SuiTypography variant="h5" fontWeight="medium">
                  Years
                </SuiTypography>
              </SuiBox>
            </Grid>

            <Grid item xs={12} md={6}>
              <SuiBox mt={1}>
                <SuiTypography variant="h6" fontWeight="medium">
                  4.6 <Icon className="">star</Icon>
                </SuiTypography>
              </SuiBox>
              <SuiBox mb={1}>
                <SuiTypography variant="h5" fontWeight="medium">
                  Review
                </SuiTypography>
              </SuiBox>
            </Grid>

            <Grid item xs={12} md={6}>
              <SuiBox mt={1}>
                <SuiTypography variant="h6" fontWeight="medium">
                  60+
                </SuiTypography>
              </SuiBox>
              <SuiBox mb={1}>
                <SuiTypography variant="h5" fontWeight="medium">
                  Client
                </SuiTypography>
              </SuiBox>
            </Grid>

            <Grid item xs={12} md={6}>
              <SuiBox mt={1}>
                <SuiTypography variant="h6" fontWeight="medium">
                  97
                </SuiTypography>
              </SuiBox>
              <SuiBox mb={1}>
                <SuiTypography variant="h5" fontWeight="medium">
                  Project
                </SuiTypography>
              </SuiBox>
            </Grid>
          </Grid>

          <SuiTypography variant="h4" textColor="text">
            <Icon className="">
              linkedin
              {/* <Linkedin /> */}
            </Icon>
            <Icon className="">
              twitter
              {/* <TwitterIcon /> */}
            </Icon>
            <Icon className="">
              mail
              {/* <Mail /> */}
            </Icon>
            <Icon className="">
              link
              {/* <Link /> */}
            </Icon>
          </SuiTypography>

          <SuiButton variant="gradient" buttonColor="info">
            <Icon>phone</Icon> call us
          </SuiButton>
        </SuiBox>
      </Card>
    </SuiBox>
  );
};
export default MainCompany;
