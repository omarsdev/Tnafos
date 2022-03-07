import React from 'react'

import { Card, Grid } from '@mui/material';

import FormField from 'components/FormField';
import SuiBox from 'components/SuiBox';
import SuiSelect from 'components/SuiSelect';
import SuiTypography from 'components/SuiTypography';

import { getNameList } from "country-list";

const UserForm = ({ formData }) => {
  const { formField, values, errors, touched } = formData;
  const {
    first_name,
    last_name,
    phone_number,
    email,
    password,
    password_confirmation,
  } = formField;
  const {
    first_name: firstNameV,
    last_name: lastNameV,
    phone_number: phoneNumberV,
    email: emailV,
    password: passwordV,
    password_confirmation: passwordConfirmationV,
  } = values;

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <SuiBox p={3}>
        <SuiTypography variant="h5">Basic Info</SuiTypography>
      </SuiBox>
      <SuiBox component="form" pb={3} px={3}>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <FormField
              type={first_name.type}
              label={first_name.label}
              name={first_name.name}
              value={firstNameV}
              placeholder={first_name.placeholder}
              error={errors.first_name && touched.first_name}
            // success={firstNameV.length > 0 && !errors.first_name}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField
              type={last_name.type}
              label={last_name.label}
              name={last_name.name}
              value={lastNameV}
              placeholder={last_name.placeholder}
              error={errors.last_name && touched.last_name}
            // success={lastNameV.length > 0 && !errors.last_name}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <SuiSelect
                  name="country_code"
                  options={Object.keys(getNameList()).map((entry) => ({ value: getNameList()[entry], label: entry }))}
                  label="country code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={phone_number.type}
                  label={phone_number.label}
                  name={phone_number.name}
                  value={phoneNumberV}
                  placeholder={phone_number.placeholder}
                  error={errors.phone_number && touched.phone_number}
                // success={phoneNumberV.length > 0 && !errors.phone_number}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <FormField
              type={email.type}
              label={email.label}
              name={email.name}
              value={emailV}
              placeholder={email.placeholder}
              error={errors.email && touched.email}
            // success={emailV.length > 0 && !errors.email}
            />
          </Grid>

          <Grid item xs={12}>
            <FormField
              type={password.type}
              label={password.label}
              name={password.name}
              value={passwordV}
              placeholder={password.placeholder}
              error={errors.password && touched.password}
            // success={passwordV.length > 0 && !errors.password}
            />
          </Grid>

          <Grid item xs={12}>
            <FormField
              type={password_confirmation.type}
              label={password_confirmation.label}
              name={password_confirmation.name}
              value={passwordConfirmationV}
              placeholder={password_confirmation.placeholder}
              error={errors.password_confirmation && touched.password_confirmation}
            // success={passwordConfirmationV.length > 0 && !errors.password_confirmation}
            />
          </Grid>

        </Grid>
      </SuiBox>
    </Card>
  )
}

export default UserForm