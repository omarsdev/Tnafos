/**
=========================================================
* Soft UI Dashboard PRO React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";

// Images
import burceMars from "assets/images/bruce-mars.jpg";

function Header() {
  const [visible, setVisible] = useState(true);

  const handleSetVisible = () => setVisible(!visible);

  return (
    <Card id="profile">
      <SuiBox p={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <SuiAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <SuiBox height="100%" mt={0.5} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                Alex Thompson
              </SuiTypography>
              <SuiTypography variant="button" color="text" fontWeight="medium">
                CEO / Co-Founder
              </SuiTypography>
            </SuiBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{ ml: "auto" }}>
            <SuiBox
              display="flex"
              justifyContent={{ md: "flex-end" }}
              alignItems="center"
              lineHeight={1}
            >
              <SuiTypography variant="caption" fontWeight="regular">
                Switch to {visible ? "invisible" : "visible"}
              </SuiTypography>
              <SuiBox mx={1}>
                <Switch checked={visible} onChange={handleSetVisible} />
              </SuiBox>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

export default Header;
