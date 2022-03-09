import React from 'react'

import { Card, Grid } from '@mui/material';

import FormField from 'components/FormField';
import SuiBox from 'components/SuiBox';
import SuiSelect from 'components/SuiSelect';
import SuiTypography from 'components/SuiTypography';

import { getNameList } from "country-list";
import { arrayConvertSelector } from 'utils/arrayConvertSelector';

const ServiceForm = ({ formData, category, serviceType }) => {
  const { formField, values, errors, touched } = formData;
  const {
    name,
    description,
    category_id,
    price,
    type,
  } = formField;
  const {
    name: nameV,
    description: descriptionV,
    category_id: categoryIdV,
    price: priceV,
    type: typeV,
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

          <Grid item xs={12}>
            <FormField
              type={description.type}
              label={description.label}
              name={description.name}
              value={descriptionV}
              placeholder={description.placeholder}
              error={errors.description && touched.description}
            // success={descriptionV.length > 0 && !errors.description}
            />
          </Grid>

          <Grid item xs={12}>
            <SuiSelect
              name="category_id"
              options={category}
              label="category"
            />
          </Grid>

          <Grid item xs={12}>
            <FormField
              type={price.type}
              label={price.label}
              name={price.name}
              value={priceV}
              placeholder={price.placeholder}
              error={errors.price && touched.price}
            // success={priceV.length > 0 && !errors.price}
            />
          </Grid>

          <Grid item xs={12}>
            <SuiSelect
              name="type"
              options={serviceType}
              label="type"
            />
          </Grid>

        </Grid>
      </SuiBox>
    </Card>
  )
}

export default ServiceForm