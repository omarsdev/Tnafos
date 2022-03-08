import React from "react";

import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { BsLink45Deg, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import Login from "../../../assets/images/login.jpg";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiBadge from "components/SuiBadge";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import Divider from "@mui/material/Divider";
// import SuiBadge from "components/SuiBadge";

const MainCompany = () => {
  return (
    <SuiBox>
      <Card
        backgroundColor="dark"
        borderRadius="xl"
        position="relative"
        backgroundGradient
      >
        <SuiBox p={3}>
          <SuiBox
            component="img"
            src={Login}
            boxShadow="lg"
            borderRadius="xl"
            width="100%"
          />

          <SuiBox p={2} textAlign="center">
            <SuiTypography variant="h5" fontWeight="bold" mb={1}>
              Company Name
            </SuiTypography>
            <SuiBox mb={2} textAlign="center">
              <SuiTypography variant="body2" textColor="text">
                Personal profiles are the perfect way for you to grab their
                attention and persuade recruiters to continue reading your CV
                because you’re telling them from the off exactly why they should
                hire you.
              </SuiTypography>
            </SuiBox>
          </SuiBox>

          <Divider />

          <Grid container spacing={3} textAlign="center">
            <Grid item xs={12} md={6} textAlign="center">
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

            <Grid item xs={12} md={6} textAlign="center">
              <SuiBox mt={1}>
                <SuiTypography variant="h6" fontWeight="medium">
                  4.6 <AiFillStar />
                </SuiTypography>
              </SuiBox>
              <SuiBox mb={1}>
                <SuiTypography variant="h5" fontWeight="medium">
                  Review
                </SuiTypography>
              </SuiBox>
            </Grid>

            <Grid item xs={12} md={6} textAlign="center">
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

            <Grid item xs={12} md={6} textAlign="center">
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

          <SuiBox
            display="flex"
            alignItems="center"
            justifyContent="center"
            py={2}
          >
            <SuiBox size="md" circular color="info" mx={2}>
              <FiLinkedin />
            </SuiBox>
            <SuiBox size="md" circular color="info" mx={2}>
              <FiTwitter />
            </SuiBox>
            <SuiBox size="md" circular color="info" mx={2}>
              <FiMail />
            </SuiBox>
            <SuiBox size="md" circular color="info" mx={2}>
              <BsLink45Deg />
            </SuiBox>
          </SuiBox>

          <SuiButton variant="gradient" color="info" fullWidth>
            call us{" "}
            <SuiBox ml={2} color="white">
              <BsFillTelephoneFill />
            </SuiBox>
          </SuiButton>
        </SuiBox>
      </Card>
    </SuiBox>
  );
};
export default MainCompany;
