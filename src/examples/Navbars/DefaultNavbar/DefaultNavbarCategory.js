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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function DefaultNavbarCategory({ color, icon, title }) {
  return (
    <SuiBox width="100%" display="flex" alignItems="center" py={1}>
      <SuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="md"
        color="white"
        bgColor={color}
        variant="gradient"
        mr={1}
      >
        {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
      </SuiBox>
      <SuiTypography variant="button" fontWeight="bold">
        {title}
      </SuiTypography>
    </SuiBox>
  );
}

// Setting default value for the props of DefaultNavbarCategory
DefaultNavbarCategory.defaultProps = {
  color: "info",
};

// Typechecking props for the DefaultNavbarCategory
DefaultNavbarCategory.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default DefaultNavbarCategory;
