import React, { useState } from "react";

// import styles from "examples/Navbars/DashboardNavbar/styles";
import { TnafosSearchLogo } from "../../../../assets/icons/svg/TnafosSearchLogo";

import PropTypes from "prop-types";

import AppBar from "@mui/material/AppBar";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";

import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import SuiButton from "components/SuiButton";

import styles from "examples/Navbars/DashboardNavbar/styles";

import { Link } from "react-router-dom";
// import { useSoftUIController } from "../../../../context/useSoftUIController";

const Navbar = ({ absolute, light, isMini }) => {
  const classes = styles({ absolute, light, isMini });

  const [navbarType, setNavbarType] = useState();

  return (
    <AppBar position={navbarType} color="inherit" className={classes.navbar}>
      <Toolbar className={classes.navbar_container}>
        <SuiBox
          customClass={classes.navbar_row}
          color="inherit"
          mb={{ xs: 1, md: 0 }}
        >
          <TnafosSearchLogo />
        </SuiBox>

        <SuiBox customClass={classes.navbar_row}>
          <SuiBox pr={1}>
            <SuiInput
              placeholder="Type here..."
              withIcon={{ icon: "search", direction: "left" }}
              customClass={classes.navbar_input}
            />
          </SuiBox>
          <SuiBox
            color={light ? "white" : "inherit"}
            customClass={classes.navbar_section_desktop}
          >
            <Stack spacing={1} direction="row" spacing={1}>
              <Link
                to="/ecommerce/products/new-product"
                className="decoration-none"
              >
                <SuiBox variant="trasperant" buttonColor="info" size="small">
                  Home
                </SuiBox>
              </Link>
              <Link
                to="/ecommerce/products/new-product"
                className="decoration-none"
              >
                <SuiBox variant="transperant" buttonColor="info" size="small">
                  Become aVendor
                </SuiBox>
              </Link>
              <Link
                to="/ecommerce/products/new-product"
                className="decoration-none"
              >
                <SuiBox variant="transperant" buttonColor="info" size="small">
                  Login
                </SuiBox>
              </Link>
            </Stack>
          </SuiBox>
        </SuiBox>
      </Toolbar>
    </AppBar>
    // <SuiBox
    //   display="flex"
    //   justifyContent="space-between"
    //   alignItems="flex-start"
    //   p={3}
    // >
    //   <SuiBox lineHeight={1}>
    //     <SuiBox pr={1}>
    //
    //     </SuiBox>
    //   </SuiBox>
    // {/* <Toolbar className={classes.navbar_container}>
    //   {isMini ? null : (
    //     <SuiBox customClass={classes.navbar_row}>
    //       <SuiBox pr={1}>
    //         <SuiInput
    //           placeholder="Type here..."
    //           withIcon={{ icon: "search", direction: "left" }}
    //           customClass={classes.navbar_input}
    //         />
    //       </SuiBox>
    //     </SuiBox>
    //   )} */}

    // {/* </Toolbar> */}
    // </SuiBox>
    // <AppBar
    //   position={absolute ? "absolute" : navbarType}
    //   color="inherit"
    //   className={classes.navbar}
    // >

    // </AppBar>
  );
};

// Setting default values for the props of DashboardNavbar
Navbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
Navbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};
export default Navbar;
