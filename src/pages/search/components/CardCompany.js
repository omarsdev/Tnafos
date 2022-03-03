import React from "react";

import { Link, useRouteMatch } from "react-router-dom";

import Login from "../../../assets/images/login.jpg";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

const CardCompany = ({ data }) => {
  const match = useRouteMatch();
  return (
    <SuiBox py={3}>
      <Card className="overflow-visible" outlined>
        <SuiBox p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} xl={5}>
              <SuiBox
                component="img"
                src={Login}
                alt="Segun Adebayo"
                // objectFit="cover"
                // rounded="3xl"
                boxShadow="lg"
                borderRadius="lg"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} lg={5} className="mx-auto">
              <SuiBox>
                <SuiBox mb={1}>
                  <SuiTypography variant="h3" fontWeight="bold">
                    {data.companyName}
                  </SuiTypography>
                </SuiBox>

                <SuiBox mt={3} mb={1} ml={0.5}>
                  <SuiTypography variant="caption" fontWeight="bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum aut minima eaque repellat quia labore officia
                    placeat nobis maiores tempora, reiciendis deserunt cum
                    reprehenderit explicabo itaque, voluptates repellendus
                    expedita obcaecati!
                  </SuiTypography>
                </SuiBox>
              </SuiBox>

              <SuiBox mt={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={2}>
                    <SuiBox
                      mb={1}
                      ml={0.5}
                      lineHeight={0}
                      display="inline-block"
                    >
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
                    </SuiBox>
                  </Grid>
                  <Grid item xs={12} lg={2}>
                    <SuiBox
                      mb={1}
                      ml={0.5}
                      lineHeight={0}
                      display="inline-block"
                    >
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
                    </SuiBox>
                  </Grid>
                  <Grid item xs={12} lg={2}>
                    <SuiBox
                      mb={1}
                      ml={0.5}
                      lineHeight={0}
                      display="inline-block"
                    >
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
                    </SuiBox>
                  </Grid>

                  <Grid item xs={12} lg={2}>
                    <SuiBox
                      mb={1}
                      ml={0.5}
                      lineHeight={0}
                      display="inline-block"
                    >
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
                    </SuiBox>
                  </Grid>

                  <Grid item xs={12} lg={5} container>
                    <Link to={`${match.url}/${data.uuid}`}>
                      <SuiButton
                        variant="gradient"
                        buttonColor="info"
                        fullWidth
                      >
                        VIEW PROFILE
                      </SuiButton>
                    </Link>
                  </Grid>

                  <Grid item xs={12} lg={2}>
                    <SuiBox
                      mb={1}
                      ml={0.5}
                      lineHeight={0}
                      display="inline-block"
                    >
                      <SuiBox mt={1}>
                        <Icon className="">star</Icon>
                      </SuiBox>
                    </SuiBox>
                  </Grid>

                  {/* <PhoneCall w="5" h="5" /> */}
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
