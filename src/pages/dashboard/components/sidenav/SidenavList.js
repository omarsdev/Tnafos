/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";

// Custom styles for the SidenavList
import styles from "examples/Sidenav/styles/sidenavList";

function SidenavList({ children }) {
  const classes = styles();

  return <List className={classes.list}>{children}</List>;
}

// Typechecking props for the SidenavItem
SidenavList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidenavList;
