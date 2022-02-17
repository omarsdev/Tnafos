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

// Soft UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";
import boxShadows from "assets/theme/base/boxShadows";

// // Soft UI Dashboard PRO React helper functions
import linearGradient from "assets/theme/functions/linearGradient";
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;
const { fontWeightMedium, fontWeightBold, size } = typography;
const { gradients, transparent, white } = colors;
const { buttonBoxShadow } = boxShadows;

export default {
  ".swal2-container": {
    zIndex: `${9999} !important`,
  },

  ".swal2-popup": {
    borderRadius: `${borderRadius.xl} !important`,

    "& .button, & .swal2-confirm": {
      fontSize: `${size.xs} !important`,
      fontWeight: fontWeightBold,
      borderRadius: `${borderRadius.md} !important`,
      padding: `${pxToRem(12)} ${pxToRem(24)}`,
      margin: pxToRem(3.75),
      textAlign: "center",
      textTransform: "uppercase",
      userSelect: "none",
      backgroundSize: "150% !important",
      backgroundPositionX: "25% !important",
      transition: `all 150ms ease-in`,
      backgroundImage: `${linearGradient(gradients.info.main, gradients.info.state)} !important`,
      backgroundColor: transparent.main,
      color: white.main,
      height: pxToRem(40),
      boxShadow: `${buttonBoxShadow.main} !important`,
      border: "none",
      cursor: "pointer",

      "&:hover, &:focus, &:active": {
        backgroundImage: `${linearGradient(gradients.info.main, gradients.info.state)} !important`,
        boxShadow: `${buttonBoxShadow.stateOf} !important`,
      },

      "& .material-icons-round": {
        fontSize: size.sm,
        marginRight: pxToRem(4),
        verticalAlign: "middle",
      },
    },

    "& .button.button-success": {
      backgroundImage: `${linearGradient(
        gradients.success.main,
        gradients.success.state
      )} !important`,

      "&:hover, &:focus, &:active": {
        backgroundImage: `${linearGradient(
          gradients.success.main,
          gradients.success.state
        )} !important`,
      },
    },

    "& .button.button-error": {
      backgroundImage: `${linearGradient(gradients.error.main, gradients.error.state)} !important`,

      "&:hover, &:focus, &:active": {
        backgroundImage: `${linearGradient(
          gradients.error.main,
          gradients.error.state
        )} !important`,
      },
    },

    "& .button-flex": {
      display: "inline-flex !important",
      alignItems: "center",
    },

    "& a, a:visited": {
      color: "#545454",
      textDecoration: "none",
    },

    "& .swal2-image": {
      borderRadius: borderRadius.xl,
      marginBottom: 0,
    },

    "& .swal2-title": {
      fontWeight: fontWeightMedium,
    },
  },
};
