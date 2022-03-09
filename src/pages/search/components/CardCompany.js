import React from "react";

import { Link, useRouteMatch } from "react-router-dom";

import Login from "../../../assets/images/login.jpg";

import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

const CardCompany = ({ data }) => {
  const match = useRouteMatch();
  return (
    <SuiBox p={3} bgColor="warning" variant="gradient" borderRadius="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          <SuiBox
            component="img"
            src={Login}
            alt="Segun Adebayo"
            objectFit="cover"
            //   rounded="3xl"
            boxShadow="lg"
            borderRadius="xl"
            width="100%"
            hight="50%"
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          <SuiBox>
            <SuiBox mb={1}>
              <SuiTypography variant="h5" fontWeight="bold">
                {data.name}
              </SuiTypography>
            </SuiBox>

            <SuiBox mt={2} mb={1} ml={0.5}>
              <SuiTypography variant="caption" fontWeight="normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum aut minima eaque repellat quia labore officia placeat
                nobis maiores tempora, reiciendis deserunt cum reprehenderit
                explicabo itaque, voluptates repellendus expedita obcaecati!
              </SuiTypography>
            </SuiBox>
          </SuiBox>

          <SuiBox mt={3}>
            <Grid container spacing={0.5}>
              <Grid item xs={12} md={2} textAlign="center" py={1}>
                <SuiTypography variant="h6" fontWeight="bold" color="white">
                  5+
                </SuiTypography>

                <SuiTypography variant="h6" fontWeight="bold" color="white">
                  Years
                </SuiTypography>
              </Grid>
              {/* <Divider orientation="vertical" /> */}
              <Grid item xs={12} md={2} textAlign="center" py={1}>
                <SuiTypography variant="h6" fontWeight="bold" color="white">
                  4.6 <AiFillStar />
                </SuiTypography>

                <SuiTypography variant="h6" fontWeight="bold" color="white">
                  Review
                </SuiTypography>
              </Grid>
              {/* <Divider orientation="vertical" /> */}
              <Grid item xs={12} md={2} textAlign="center" py={1}>
                <SuiTypography variant="h6" fontWeight="bold" color="white">
                  60+
                </SuiTypography>
                <SuiBox mb={1}>
                  <SuiTypography variant="h6" fontWeight="bold" color="white">
                    Client
                  </SuiTypography>
                </SuiBox>
              </Grid>
              {/* <Divider orientation="vertical" /> */}
              <Grid item xs={12} md={2} textAlign="center" py={1}>
                <SuiTypography variant="h6" fontWeight="bold" color="white">
                  97
                </SuiTypography>
                <SuiBox mb={1}>
                  <SuiTypography variant="h6" fontWeight="bold" color="white">
                    Project
                  </SuiTypography>
                </SuiBox>
              </Grid>

              <Grid item xs={12} md={3} textAlign="center" py={1}>
                <Link to={`${match.url}/${data.uuid}`}>
                  <SuiButton
                    variant="gradient"
                    color="dark"
                    size="small"
                    py={1}
                  >
                    VIEW PROFILE
                  </SuiButton>
                </Link>
              </Grid>

              <Grid item xs={12} md={1} textAlign="center" py={1}>
                <Link to="#">
                  <SuiBox py={1.5} lineHeight={0} ml={1} color="white">
                    <BsFillTelephoneFill />
                  </SuiBox>
                </Link>
              </Grid>
            </Grid>
          </SuiBox>
        </Grid>
      </Grid>
    </SuiBox>
  );
};
export default CardCompany;
