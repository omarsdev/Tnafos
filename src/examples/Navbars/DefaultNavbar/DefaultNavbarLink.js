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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function DefaultNavbarLink({
  name,
  openHandler,
  closeHandler,
  children,
  collapseStatus,
  light,
  ...rest
}) {
  return (
    <>
      <SuiBox
        {...rest}
        mx={1}
        p={1}
        onMouseEnter={children ? undefined : openHandler}
        onMouseLeave={children ? undefined : closeHandler}
        display="flex"
        alignItems="baseline"
        color={light ? "white" : "dark"}
        sx={{ cursor: "pointer", userSelect: "none" }}
      >
        <SuiTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color="inherit"
          sx={{ fontWeight: "100%" }}
        >
          {name}
        </SuiTypography>
        <SuiTypography variant="body2" color={light ? "white" : "dark"}>
          <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>keyboard_arrow_down</Icon>
        </SuiTypography>
      </SuiBox>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of DefaultNavbarLink
DefaultNavbarLink.defaultProps = {
  openHandler: false,
  closeHandler: false,
  children: false,
  collapseStatus: false,
  light: false,
};

// Typechecking props for the DefaultNavbarLink
DefaultNavbarLink.propTypes = {
  name: PropTypes.string.isRequired,
  openHandler: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  closeHandler: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
};

export default DefaultNavbarLink;
