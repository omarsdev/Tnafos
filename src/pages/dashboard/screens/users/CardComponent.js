import React from "react";
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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Custom styles for the CardComponent
import styles from "examples/Cards/ProjectCards/styles";

const CardComponent = ({ action, userData }) => {
  const classes = styles();

  return (
    <Card className={classes.projectCard}>
      <SuiBox customClass={classes.projectCard_imageContainer}>
        <CardMedia
          src={"https://bit.ly/sage-adebayo"}
          component="img"
          // title={title}
          className={classes.projectCard_image}
        />
      </SuiBox>
      <SuiBox pt={3} px={0.5}>
        <SuiBox mb={1}>
          {action.type === "internal" ? (
            <SuiTypography
              component={Link}
              to={action.route}
              variant="h5"
              textTransform="capitalize"
            >
              {userData?.first_name} {userData?.last_name}
            </SuiTypography>
          ) : (
            <SuiTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {userData?.first_name} {userData?.last_name}
            </SuiTypography>
          )}
        </SuiBox>
        <SuiBox mb={3} lineHeight={0}>
          <SuiBox mb={1}>
            <SuiTypography
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
              textGradient
            >
              {userData?.email}
            </SuiTypography>
          </SuiBox>
          <SuiBox mb={1}>
            <SuiTypography
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
              textGradient
            >
              {userData.phone_number}
            </SuiTypography>
          </SuiBox>
          {/* <SuiTypography variant="button" fontWeight="regular" textColor="text">
            {description}
          </SuiTypography> */}
        </SuiBox>
        <SuiBox
          display="flex"
          //   justifyContent="space-between"
          alignItems="center"
        >
          {action.type === "internal" ? (
            <SuiButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              buttonColor={action.color}
            >
              {action.label}
            </SuiButton>
          ) : (
            <SuiButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              buttonColor={action.color}
            >
              {action.label}
            </SuiButton>
          )}
          {/* <SuiBox display="flex">{renderAuthors}</SuiBox> */}
        </SuiBox>
      </SuiBox>
    </Card>
  );
};

// Setting default values for the props of CardComponent
CardComponent.defaultProps = {
  authors: [],
};

// Typechecking props for the CardComponent
CardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
};

export default CardComponent;
