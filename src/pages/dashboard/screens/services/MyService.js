/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useContext, useEffect, useState } from "react";

import { Switch, Route, useHistory, useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance } from "../../../../api";
import { Route } from "@mui/icons-material";

const UserCard = () => {
  const { alertProviderValue } = useContext(AlertContext);
  //   const { setAlert } = alertProviderValue;
  const [service, setService] = useState(null);

  const history = useHistory();
  const { uuid } = useParams();

  const getMyService = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/service/${uuid}`);
      resetHooksForm(res.data.data);
      setService(res.data.data);
    } catch (err) {
      history.push("/dashboard/service");
    }
  };

  useEffect(() => {
    getMyService();
  }, []);

  return !service ? (
    <Switch>
      <Route>
        <SuiBox py={3}>
          <Card className="overflow-visible">
            <SuiBox p={3}>
              <SuiBox mb={3}>
                <SuiTypography variant="h5" fontWeight="medium">
                  Service details ...
                </SuiTypography>
              </SuiBox>

              <Grid container spacing={3}>
                <Grid item xs={12} lg={6} xl={5}>
                  <SuiBox>
                    <SuiBox
                      component="img"
                      src={"https://bit.ly/sage-adebayo"}
                      alt="Segun Adebayo"
                      boxShadow="lg"
                      borderRadius="lg"
                      width="100%"
                    />
                  </SuiBox>
                </Grid>
                <Grid item xs={12} lg={5} className="mx-auto">
                  <SuiBox component="ul" m={0} pl={4} mb={2}>
                    <SuiBox
                      component="li"
                      color="text"
                      fontSize="1.25rem"
                      lineHeight={1}
                    >
                      <SuiTypography
                        variant="body2"
                        textColor="text"
                        verticalAlign="middle"
                      >
                        {service?.name}
                      </SuiTypography>
                    </SuiBox>

                    <SuiBox mt={1}>
                      <SuiTypography variant="h6" fontWeight="medium">
                        Price
                      </SuiTypography>
                    </SuiBox>
                    <SuiBox mb={1}>
                      <SuiTypography variant="h5" fontWeight="medium">
                        {service?.price}
                      </SuiTypography>
                    </SuiBox>
                    <SuiBadge
                      variant="contained"
                      color="success"
                      badgeContent={service?.type}
                      container
                    />
                    <SuiBox
                      component="li"
                      color="text"
                      fontSize="1.25rem"
                      lineHeight={1}
                    >
                      <SuiTypography
                        variant="body2"
                        textColor="text"
                        verticalAlign="middle"
                      >
                        Description:{service?.description}
                      </SuiTypography>
                    </SuiBox>
                    <SuiBox
                      component="li"
                      color="text"
                      fontSize="1.25rem"
                      lineHeight={1}
                    >
                      <SuiTypography
                        variant="body2"
                        textColor="text"
                        verticalAlign="middle"
                      >
                        Category-id: {service?.category.uuid}
                      </SuiTypography>
                    </SuiBox>
                  </SuiBox>

                  <SuiBox mt={3}>
                    <Grid item xs={12} lg={5} container>
                      <SuiButton
                        variant="gradient"
                        buttonColor="info"
                        fullWidth
                        onClick={`${match.path}/update`}
                      >
                        edit
                      </SuiButton>
                    </Grid>
                  </SuiBox>
                </Grid>
              </Grid>
            </SuiBox>
          </Card>
        </SuiBox>
      </Route>
      <Route path={`${match.path}/:update`} component={EditService} />
    </Switch>
  ) : null;
};

export default UserCard;
