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

import { Fragment } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

// Soft UI Dashboard PRO React example components
import DefaultNavbarCategory from "examples/Navbars/DefaultNavbar/DefaultNavbarCategory";
import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";

function EcommerceMenu({ routes, open, close, mobileMenu }) {
  const renderEcommerceMenuRoute = (routeName) =>
    routes.map(
      ({ key, name, icon, collapse }) =>
        key === routeName && (
          <Fragment key={key}>
            <DefaultNavbarCategory icon={icon} title={name} />
            {collapse.map(({ key: collapseKey, route, name: collapseName }) => (
              <MenuItem
                key={collapseKey}
                component={Link}
                to={route}
                onClick={mobileMenu ? undefined : close}
              >
                <SuiBox color="text" pl={2}>
                  {collapseName}
                </SuiBox>
              </MenuItem>
            ))}
          </Fragment>
        )
    );

  const renderMenuContent = (
    <SuiBox py={1} px={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={5}>
          {renderEcommerceMenuRoute("orders")}
          <SuiBox mt={2}>{renderEcommerceMenuRoute("general")}</SuiBox>
        </Grid>
        <Grid item xs={12} lg={7} sx={{ display: "flex" }}>
          <SuiBox display={{ xs: "none", lg: "block" }}>
            <Divider orientation="vertical" />
          </SuiBox>
          <SuiBox width="100%">{renderEcommerceMenuRoute("products")}</SuiBox>
        </Grid>
      </Grid>
    </SuiBox>
  );

  return mobileMenu ? (
    renderMenuContent
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderMenuContent}
    </DefaultNavbarMenu>
  );
}

// Setting default values for the props of EcommerceMenu
EcommerceMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the EcommerceMenu
EcommerceMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};
export default EcommerceMenu;
