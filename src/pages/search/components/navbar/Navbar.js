import React from "react";

import styles from "examples/Navbars/DashboardNavbar/styles";
import { TnafosSearchLogo } from "../../../../assets/icons/svg/TnafosSearchLogo";

import AppBar from "@mui/material/AppBar";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";

const Navbar = () => {
  const classes = styles({ transparentNavbar, absolute, light, isMini });
  return (
    // <AppBar
    //   position={absolute ? "absolute" : navbarType}
    //   color="inherit"
    //   className={classes.navbar}
    // >
    //   <Toolbar className={classes.navbar_container}>
    //     {isMini ? null : (
    //
    //     )}
    //   </Toolbar>
    // </AppBar>

    <Grid container spacing={3} alignItems="center">
      <Grid item>
        <TnafosSearchLogo />
      </Grid>
      <Grid item>
        {/* <SuiBox height="100%" mt={0.5} lineHeight={1}> */}
        <SuiBox customClass={classes.navbar_row}>
          <SuiBox pr={1}>
            <SuiInput
              placeholder="Type here..."
              withIcon={{ icon: "search", direction: "left" }}
              customClass={classes.navbar_input}
            />
          </SuiBox>
        </SuiBox>
      </Grid>
      <Grid item xs={12} md={6} lg={4} className="ml-auto">
        <AppBar position="static">
          <Tabs
            orientation={tabsOrientation}
            value={tabValue}
            onChange={handleSetTabValue}
            className="bg-transparent"
          >
            <Tab label="App" icon={<Cube />} />
            <Tab label="Message" icon={<Document />} />
            <Tab label="Settings" icon={<Settings />} />
          </Tabs>
        </AppBar>
      </Grid>
    </Grid>
  );
};
export default Navbar;
