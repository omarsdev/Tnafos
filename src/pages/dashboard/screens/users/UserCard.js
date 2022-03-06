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

import {
  Switch,
  Route,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { FiEdit } from "react-icons/fi";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

import { AxiosInstance } from "../../../../api";
import EditUser from "./EditUser";

const UserCard = () => {
  const history = useHistory();
  const { uuid } = useParams();
  const match = useRouteMatch();

  const [card, setCard] = useState(null);

  const getUser = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/user/${uuid}`);

      // resetHooksForm(res.data.data);
      setCard(res.data.data);
    } catch (err) {

      history.push("/dashboard/user");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    !card ? null : (
      <SuiBox py={3}>
        <Card className="overflow-visible">
          <SuiBox p={3}>
            <SuiBox mb={3}>
              <SuiTypography variant="h5" fontWeight="medium">
                <strong>User Card's details ...</strong>
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

              <Grid item xs={12} lg={5} className="mx-auto" mt={6}>
                <SuiBox m={0} pl={4} mb={2}>
                  <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
                    <SuiTypography variant="body2" textColor="text">
                      {" "}
                      <strong> Full Name:</strong>
                      {card?.first_name}
                      {card?.last_name}
                    </SuiTypography>
                  </SuiBox>
                  <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
                    <SuiTypography variant="body2" textColor="text">
                      <strong> Email:</strong>
                      {card?.email}
                    </SuiTypography>
                  </SuiBox>
                  <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
                    <SuiTypography variant="body2" textColor="text">
                      <strong> Phone number:</strong>
                      {card?.phone_number}
                    </SuiTypography>
                  </SuiBox>
                  <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
                    <SuiTypography variant="body2" textColor="text">
                      <strong> ID: </strong>
                      {card?.uuid}
                    </SuiTypography>
                  </SuiBox>
                  <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
                    <SuiTypography variant="body2" textColor="text">
                      <strong>is admin:</strong> {card?.is_admin}
                    </SuiTypography>
                  </SuiBox>
                </SuiBox>

                <SuiBox
                  display="flex"
                  width="100%"
                  // m={0}
                  pl={4}
                  mb={2}
                  mt={8}
                  justifyContent="start"
                  alignItems="start"
                >
                  <Grid item xs={12} lg={5} container>
                    <SuiButton
                      variant="gradient"
                      buttonColor="info"
                      fullWidth
                      onClick={() => {
                        history.push(`${match.path}/edituser`);
                      }}
                    >
                      ASDASDASD
                    </SuiButton>
                  </Grid>
                </SuiBox>
              </Grid>
            </Grid>
          </SuiBox>
        </Card>
      </SuiBox>
    )
  );
};

export default UserCard;
