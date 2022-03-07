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

import React, { useEffect, useState } from "react";

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-select components
import Select from "react-select";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";

// Custom styles for SuiSelect
import styles from "components/SuiSelect/styles";
import { ErrorMessage, useField } from 'formik';
import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';

const SuiSelect = forwardRef(({ name, size, error, success, label, options, ...rest }, ref) => {
  const [field, meta, helpers] = useField(name)
  const { light } = colors;

  return (
    // <Select
    //   {...rest}
    //   ref={ref}
    //   styles={styles(size, error, success)}
    //   theme={(theme) => ({
    //     ...theme,
    //     colors: {
    //       ...theme.colors,
    //       primary25: light.main,
    //       primary: light.main,
    //     },
    //   })}
    // />
    <SuiBox>
      <SuiBox ml={0.5} lineHeight={0} display="inline-block">
        <SuiTypography
          component="label"
          variant="caption"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {label}
        </SuiTypography>
      </SuiBox>
      <Select
        {...rest}
        name={name}
        value={field.value}
        // value={field.value.value}
        onChange={(value) => {
          helpers.setValue(value);
          // helpers.setValue(value.value);
        }}
        options={options}
        onBlur={() => helpers.setTouched(true)}
        ref={ref}
        styles={styles(size, error, success)}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: light.main,
            primary: light.main,
          },
        })}
      />
      <SuiBox mt={0.5}>
        <SuiTypography component="div" variant="caption" color="error">
          <ErrorMessage name={name} />
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
});

// Setting default values for the props of SuiSelect
SuiSelect.defaultProps = {
  size: "medium",
  error: false,
  success: false,
};

// Typechecking props for the SuiSelect
SuiSelect.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default SuiSelect;
