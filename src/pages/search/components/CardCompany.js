import React from "react";

import { Link, useRouteMatch } from "react-router-dom";

import Login from "../../../assets/images/login.jpg";

import { BsTelephone } from "react-icons/bs";
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
    <SuiBox py={3}>
      <Card width="100">
        <SuiBox px={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <SuiBox
                component="img"
                src={Login}
                alt="Segun Adebayo"
                objectFit="cover"
                // rounded="3xl"
                boxShadow="lg"
                borderRadius="lg"
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
                    Voluptatum aut minima eaque repellat quia labore officia
                    placeat nobis maiores tempora, reiciendis deserunt cum
                    reprehenderit explicabo itaque, voluptates repellendus
                    expedita obcaecati!
                  </SuiTypography>
                </SuiBox>
              </SuiBox>

              <SuiBox mt={3}>
                <Grid container spacing={0.5} justifyContent="center">
                  <Grid item xs={12} md={2}>
                    <SuiTypography variant="h6" fontWeight="medium">
                      5+
                    </SuiTypography>

                    <SuiTypography variant="h6" fontWeight="medium">
                      Years
                    </SuiTypography>
                  </Grid>
                  <Divider dark />
                  <Grid item xs={12} md={2}>
                    <SuiTypography variant="h6" fontWeight="medium">
                      4.6 <AiFillStar />
                    </SuiTypography>

                    <SuiTypography variant="h6" fontWeight="medium">
                      Review
                    </SuiTypography>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <SuiTypography variant="h6" fontWeight="medium">
                      60+
                    </SuiTypography>
                    <SuiBox mb={1}>
                      <SuiTypography variant="h6" fontWeight="medium">
                        Client
                      </SuiTypography>
                    </SuiBox>
                  </Grid>

                  <Grid item xs={12} md={2}>
                    <SuiTypography variant="h6" fontWeight="medium">
                      97
                    </SuiTypography>
                    <SuiBox mb={1}>
                      <SuiTypography variant="h6" fontWeight="medium">
                        Project
                      </SuiTypography>
                    </SuiBox>
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <Link to={`${match.url}/${data.uuid}`}>
                      <SuiButton variant="gradient" color="info" size="small">
                        VIEW PROFILE
                      </SuiButton>
                    </Link>
                  </Grid>

                  <Grid item xs={12} md={1}>
                    <Link to="#">
                      <SuiBox py={1} lineHeight={0} ml={1}>
                        <BsTelephone />
                      </SuiBox>
                    </Link>
                  </Grid>
                </Grid>
              </SuiBox>
            </Grid>
          </Grid>
        </SuiBox>
      </Card>
    </SuiBox>
  );
};
export default CardCompany;
