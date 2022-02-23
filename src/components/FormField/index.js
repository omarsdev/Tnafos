import React from 'react'

import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik"

import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';
import SuiInput from 'components/SuiInput';


const FormField = ({ label, name, ...rest }) => {
  return (
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
      <Field {...rest} name={name} as={SuiInput} />
      <SuiBox mt={0.5}>
        <SuiTypography component="div" variant="caption" color="error">
          <ErrorMessage name={name} />
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField