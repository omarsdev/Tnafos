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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-tag-input components
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

// Custom styles for SuiTagInput
import SuiTagInputRoot from "components/SuiTagInput/SuiTagInputRoot";

const SuiTagInput = forwardRef(({ size, error, success, ...rest }, ref) => (
  <SuiTagInputRoot ownerState={{ size, error, success }}>
    <ReactTagInput {...rest} ref={ref} />
  </SuiTagInputRoot>
));

// Setting default values for the props of SuiTagInput
SuiTagInput.defaultProps = {
  size: "medium",
  error: false,
  success: false,
};

// Typechecking props for the SuiTagInput
SuiTagInput.propTypes = {
  size: PropTypes.oneOf(["medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default SuiTagInput;
