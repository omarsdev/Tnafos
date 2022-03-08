import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import { TnafosSearchLogo } from "../../../../assets/icons/svg/TnafosSearchLogo";

// import styles from "pages/search/components/navbar/styles";

import AppBar from "@mui/material/AppBar";
import SuiBox from "components/SuiBox";
import SuiInput from "components/SuiInput";
import SuiTypography from "components/SuiTypography";
import Grid from "@mui/material/Grid";

import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";

const DashboardNavbar = () => {
  //   const classes = styles();
  let { search } = useParams();

  const history = useHistory();

  const [searchInput, setSearchInput] = useState(search);

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    history.push(`/${searchInput}`);
  };

  return (
    <AppBar color="dark">
      {/* //   <Toolbar>
    // <SuiBox
    //   color="dark"
    //   //   borderRadius="xl"
    //   position="relative"
    //   backgroundGradient
    //   //   color="inherit"
    // > */}
      <SuiBox p={1}>
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <SuiBox pr={1} py={1}>
              <TnafosSearchLogo />
            </SuiBox>
          </Grid>

          <Grid item xs={12} md={6} lg={6} my="auto" ml="auto">
            <SuiBox
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <SuiBox lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <SuiInput
                  size="small"
                  withIcon={{ icon: "search", direction: "left" }}
                  placeholder="Search anything..."
                  //   customClass={classes.automotiveMonitor_input}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeypress}
                />
              </SuiBox>

              <SuiBox color="white" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Link to="#" className="decoration-none">
                  <SuiTypography
                    variant="button"
                    fontWeight="medium"
                    color="white"
                  >
                    Home
                  </SuiTypography>
                </Link>
              </SuiBox>
              <SuiBox color="white" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Link to="#" className="decoration-none">
                  <SuiTypography
                    variant="button"
                    fontWeight="medium"
                    color="white"
                  >
                    Become a Vender
                  </SuiTypography>
                </Link>
              </SuiBox>

              <SuiBox color="white" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Link to="#" className="decoration-none">
                  <SuiTypography
                    variant="button"
                    fontWeight="medium"
                    color="white"
                  >
                    login
                  </SuiTypography>
                </Link>
              </SuiBox>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
      {/* </SuiBox> */}
      {/* //   </Toolbar> */}
    </AppBar>
  );
};

export default DashboardNavbar;
