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

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";

function DocsMenu({ routes, open, close, mobileMenu }) {
  const renderDocsMenuRoute = (routeName) =>
    routes.map(
      ({ key, collapse }) =>
        key === routeName &&
        collapse.map(({ key: collapseKey, href, name, icon, description }) => (
          <MenuItem
            key={collapseKey}
            component={Link}
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={mobileMenu ? undefined : close}
          >
            <SuiBox display="flex" py={0.25}>
              {typeof icon === "string" ? <Icon>{icon}</Icon> : <SuiBox mt={0.5}>{icon}</SuiBox>}
              <SuiBox pl={2} lineHeight={0}>
                <SuiTypography variant="h6" fontWeight="bold">
                  {name}
                </SuiTypography>
                <SuiTypography variant="button" fontWeight="regular" color="text">
                  {description}
                </SuiTypography>
              </SuiBox>
            </SuiBox>
          </MenuItem>
        ))
    );

  return mobileMenu ? (
    renderDocsMenuRoute("docs")
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderDocsMenuRoute("docs")}
    </DefaultNavbarMenu>
  );
}

// Setting default values for the props of DocsMenu
DocsMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the DocsMenu
DocsMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default DocsMenu;
