import React from 'react'

import { Card, Grid, Switch } from '@mui/material';

import FormField from 'components/FormField';
import SuiBox from 'components/SuiBox';
import SuiSelect from 'components/SuiSelect';
import SuiTypography from 'components/SuiTypography';

import { getNameList } from "country-list";
import SuiTagInput from 'components/SuiTagInput';

const CreatePRFrom = ({ formData, services }) => {
  const { formField, values, errors, touched, setFieldValue } = formData;
  const {
    date,
    details,
    lines,
  } = formField;
  const {
    date: dateV,
    details: detailsV,
    lines: linesV,
  } = values;

  console.log(linesV)

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <SuiBox p={3}>
        <SuiTypography variant="h5">Basic Info</SuiTypography>
      </SuiBox>
      <SuiBox component="form" pb={3} px={3}>

        <Grid item xs={12}>
          <FormField
            type={date.type}
            label={date.label}
            name={date.name}
            value={dateV}
            placeholder={date.placeholder}
            error={errors.date && touched.date}
          // success={dateV.length > 0 && !errors.date}
          />
        </Grid>

        <Grid item xs={12}>
          <FormField
            type={details.type}
            label={details.label}
            name={details.name}
            value={detailsV}
            placeholder={details.placeholder}
            error={errors.details && touched.details}
          // success={detailsV.length > 0 && !errors.details}
          />
        </Grid>

        <Grid item xs={12}>
          <SuiSelect
            name="lines"
            options={services}
            label="Services List"
            onChange={(value) => {
              // const newData = linesV;
              // newData.push(value)
              setFieldValue("lines", value)
            }}
            isMulti
          />
        </Grid>

      </SuiBox>
    </Card>
  )
}

export default CreatePRFrom