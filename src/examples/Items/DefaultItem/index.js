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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// custom styles for the DefaultItem
import { defaultItemIconBox, defaultItemIcon } from "examples/Items/DefaultItem/styles";

const DefaultItem = forwardRef(({ color, icon, title, description, ...rest }, ref) => (
  <SuiBox {...rest} ref={ref} display="flex" alignItems="center">
    <SuiBox sx={(theme) => defaultItemIconBox(theme, { color })}>
      <Icon fontSize="default" sx={(theme) => defaultItemIcon(theme, { color })}>
        {icon}
      </Icon>
    </SuiBox>
    <SuiBox ml={2} lineHeight={1}>
      <SuiTypography display="block" variant="button" fontWeight="medium">
        {title}
      </SuiTypography>
      <SuiTypography variant="button" fontWeight="regular" color="text">
        {description}
      </SuiTypography>
    </SuiBox>
  </SuiBox>
));

// Setting default values for the props of DefaultItem
DefaultItem.defaultProps = {
  color: "info",
};

// Typechecking props for the DefaultItem
DefaultItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DefaultItem;
