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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

// Soft UI Dashboard PRO React example components
import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";

function ApplicationsMenu({ routes, open, close, mobileMenu }) {
  const renderApplicationsMenuRoute = (routeName) =>
    routes.map(
      ({ key, collapse }) =>
        key === routeName &&
        collapse.map(({ key: collapseKey, route, name, icon }) => (
          <MenuItem
            key={collapseKey}
            component={Link}
            to={route}
            onClick={mobileMenu ? undefined : close}
          >
            <SuiBox display="flex" alignItems="center" py={0.25}>
              {typeof icon === "string" ? (
                <Icon
                  sx={({ functions: { linearGradient }, palette: { gradients, transparent } }) => ({
                    backgroundImage: `${linearGradient(
                      gradients.info.main,
                      gradients.info.state
                    )} !important`,
                    WebkitBackgroundClip: "text !important",
                    WebkitTextFillColor: `${transparent.main} !important`,
                  })}
                  fontSize="small"
                >
                  {icon}
                </Icon>
              ) : (
                icon
              )}
              <SuiBox color="text" pl={2} lineHeight={0}>
                {name}
              </SuiBox>
            </SuiBox>
          </MenuItem>
        ))
    );

  return mobileMenu ? (
    <SuiBox px={1.5}>{renderApplicationsMenuRoute("applications")}</SuiBox>
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderApplicationsMenuRoute("applications")}
    </DefaultNavbarMenu>
  );
}

// Setting default values for the props of ApplicationsMenu
ApplicationsMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the ApplicationsMenu
ApplicationsMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};
export default ApplicationsMenu;
