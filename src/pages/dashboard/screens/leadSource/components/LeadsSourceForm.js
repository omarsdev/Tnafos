import React from 'react'

import { Card, Grid, Switch } from '@mui/material';

import FormField from 'components/FormField';
import SuiBox from 'components/SuiBox';
import SuiSelect from 'components/SuiSelect';
import SuiTypography from 'components/SuiTypography';

import { getNameList } from "country-list";

const LeadsSourceForm = ({ formData }) => {
  const { formField, values, errors, touched, setFieldValue } = formData;
  const {
    name,
  } = formField;
  const {
    name: nameV,
  } = values;

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <SuiBox p={3}>
        <SuiTypography variant="h5">Basic Info</SuiTypography>
      </SuiBox>
      <SuiBox component="form" pb={3} px={3}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <FormField
              type={name.type}
              label={name.label}
              name={name.name}
              value={nameV}
              placeholder={name.placeholder}
              error={errors.name && touched.name}
            // success={nameV.length > 0 && !errors.name}
            />
          </Grid>

        </Grid>
      </SuiBox>
    </Card>
  )
}

export default LeadsSourceForm 