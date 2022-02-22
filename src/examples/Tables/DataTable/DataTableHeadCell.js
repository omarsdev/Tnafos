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

import React from 'react'

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

function DataTableHeadCell({ width, children, sorted, align, ...rest }) {
  const { light } = colors;
  const { size, fontWeightBold } = typography;
  const { borderWidth } = borders;

  return (
    <SuiBox
      component="th"
      width={width}
      borderBottom={`${borderWidth[1]} solid ${light.main}`}
      py={1.5}
      px={3}
    >
      <SuiBox
        {...rest}
        position="relative"
        textAlign={align}
        fontSize={size.xxs}
        fontWeight={fontWeightBold}
        color="secondary"
        opacity={0.7}
        className={`text-uppercase ${sorted && "cursor-pointer user-select-none"}`}
      >
        {children}
        {sorted && (
          <SuiBox
            fontSize={size.lg}
            position="absolute"
            top={0}
            right={align !== "right" ? "16px" : 0}
            left={align === "right" ? "-5px" : "unset"}
          >
            <SuiBox
              position="absolute"
              top={-6}
              color={sorted === "asce" ? "text" : "secondary"}
              opacity={sorted === "asce" ? 1 : 0.5}
            >
              <Icon>arrow_drop_up</Icon>
            </SuiBox>
            <SuiBox
              position="absolute"
              top={0}
              color={sorted === "desc" ? "text" : "secondary"}
              opacity={sorted === "desc" ? 1 : 0.5}
            >
              <Icon>arrow_drop_down</Icon>
            </SuiBox>
          </SuiBox>
        )}
      </SuiBox>
    </SuiBox>
  );
}

// Setting default values for the props of DataTableHeadCell
DataTableHeadCell.defaultProps = {
  width: "auto",
  sorted: "none",
  align: "left",
};

// Typechecking props for the DataTableHeadCell
DataTableHeadCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  sorted: PropTypes.oneOf([false, "none", "asce", "desc"]),
  align: PropTypes.oneOf(["left", "right", "center"]),
};

export default DataTableHeadCell;
