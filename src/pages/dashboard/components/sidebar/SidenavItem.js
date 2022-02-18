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
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

// Custom styles for the SidenavItem
import styles from "examples/Sidenav/styles/sidenavItem";

// Soft UI Dashboard PRO React contexts
import { useSoftUIController } from "context";

function SidenavItem({ name, active, nested, children, open, ...rest }) {
  const [controller] = useSoftUIController();
  const { miniSidenav } = controller;
  const classes = styles({ active, open, nested, miniSidenav, name });

  return (
    <>
      <ListItem {...rest} component="li" className={classes.item}>
        <SuiBox customClass={classes.item_content}>
          <ListItemText primary={name} />
          {children && (
            <Icon component="i" className={classes.item_arrow}>
              expand_less
            </Icon>
          )}
        </SuiBox>
      </ListItem>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of SidenavItem
SidenavItem.defaultProps = {
  active: false,
  nested: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavItem
SidenavItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  nested: PropTypes.bool,
  children: PropTypes.node,
  open: PropTypes.bool,
};

export default SidenavItem;
