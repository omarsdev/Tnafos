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

import React from "react";
// @mui material components
import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, functions }) => {
  const { transparent, white } = palette;
  const { pxToRem } = functions;

  return {
    automotiveMonitor_input: {
      backgroundColor: transparent.main,
      borderColor: transparent.main,

      "& .MuiInputBase-root": {
        backgroundColor: transparent.main,
        color: white.main,

        "& input": {
          "&::-webkit-input-placeholder": {
            color: white.main,
            opacity: 0.8,
          },
        },
      },

      "& .material-icons, .material-icons-round": {
        color: white.main,
        fontSize: pxToRem(24),
      },
    },

    automotiveMonitor_button: {
      margin: `0 ${pxToRem(12)}`,

      "& .material-icons": {
        fontSize: pxToRem(32),
      },
    },

    automotiveMonitor_slider: {
      padding: `${pxToRem(10)} 0`,

      "& .MuiSlider-rail": {
        opacity: 1,
      },
    },

    automotiveMonitor_lastGrid: {
      marginLeft: "auto",
    },
  };
});
