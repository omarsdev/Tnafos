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

// @mui material components
import { styled } from "@mui/material/styles";

export default styled("div")(({ theme }) => {
  const { palette, borders, typography } = theme;

  const { borderRadius } = borders;
  const { size } = typography;
  const { text } = palette;

  return {
    "& .ql-toolbar": {
      borderRadius: `${borderRadius.md} ${borderRadius.md} 0 0`,
    },

    "& .ql-container": {
      borderRadius: `0 0 ${borderRadius.md} ${borderRadius.md}`,
    },

    "& .ql-editor": {
      "& p": {
        fontSize: size.md,
        color: text.main,
      },

      "& ul li": {
        color: text.main,
      },
    },
  };
});
