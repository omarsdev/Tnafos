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

// @mui material components
import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, typography, transitions, functions }) => {
  const { dark, gradients } = palette;
  const { size, fontWeightMedium, fontWeightRegular } = typography;
  const { pxToRem, rgba } = functions;

  return {
    item: {
      width: "100%",
      padding: 0,
      cursor: "pointer",
    },

    item_content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: `${pxToRem(7.2)} ${pxToRem(16)}`,
      margin: `0 ${pxToRem(16)} 0 ${pxToRem(21.6)}`,
      userSelect: "none",
      position: "relative",

      "& span": {
        color: ({ active }) =>
          active ? dark.main : rgba(gradients.dark.state, 0.7),
        fontWeight: ({ active }) =>
          active ? fontWeightMedium : fontWeightRegular,
        fontSize: size.sm,
        opacity: ({ miniSidenav }) => (miniSidenav ? 0 : 1),
        transition: transitions.create(["opacity", "color"], {
          easing: transitions.easing.easeInOut,
          duration: transitions.duration.standard,
        }),
      },

      "&::before": {
        content: ({ nested, miniSidenav, name }) => {
          if (nested) {
            return nested && miniSidenav ? `"${name[0]}"` : "";
          }

          return miniSidenav ? `"${name[0]}"` : '""';
        },
        width: ({ active, miniSidenav }) => {
          if (!miniSidenav) {
            return active ? pxToRem(8) : pxToRem(5);
          }

          return 0;
        },
        height: ({ active, miniSidenav }) => {
          if (!miniSidenav) {
            return active ? pxToRem(8) : pxToRem(5);
          }

          return 0;
        },
        backgroundColor: ({ active }) =>
          active ? dark.main : rgba(gradients.dark.state, 0.5),
        color: ({ active }) =>
          active ? dark.main : rgba(gradients.dark.state, 0.5),
        fontWeight: ({ active }) =>
          active ? fontWeightMedium : fontWeightRegular,
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: pxToRem(-18),
        opacity: 1,
        borderRadius: "50%",
        fontSize: size.sm,
      },
    },

    item_arrow: {
      fontSize: `${size.regular} !important`,
      fontWeight: 700,
      marginRight: pxToRem(-2.5),
      transform: ({ open, miniSidenav }) => {
        if (open) {
          return miniSidenav
            ? `translateX(${pxToRem(-24)}) rotate(0)`
            : "rotate(0)";
        }

        return miniSidenav
          ? `translateX(${pxToRem(-24)}) rotate(-180deg)`
          : "rotate(-180deg)";
      },
      color: ({ open }) => (open ? dark.main : rgba(gradients.dark.state, 0.4)),
      transition: transitions.create(["color", "transform"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),
    },
  };
});
