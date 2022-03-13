import React from 'react'

import { Card, Grid, Switch } from '@mui/material';

import FormField from 'components/FormField';
import SuiBox from 'components/SuiBox';
import SuiSelect from 'components/SuiSelect';
import SuiTypography from 'components/SuiTypography';

import { getNameList } from "country-list";

const ContactForm = ({ formData, data }) => {
  const { user, leadSource, country } = data

  const { formField, values, errors, touched, setFieldValue } = formData;
  const {
    first_name,
    last_name,
    position,
    email,
    phone_number,
    company_name,
    fax,
    website,
    currency,
    language,
    status,
    country_id,
    address,
    city,
    state,
    zipcode,
    assigned_to,
    source_id,
    country_code,
  } = formField;
  const {
    first_name: firstNameV,
    last_name: lastNameV,
    email: emailV,
    phone_number: phoneNumberV,
    position: positionV,
    company_name: companyNameV,
    fax: faxV,
    website: websiteV,
    currency: currencyV,
    language: languageV,
    status: statusV,
    country_id: countryIdV,
    address: addressV,
    city: cityV,
    state: stateV,
    zipcode: zipCodeV,
    assigned_to: assignedToV,
    source_id: sourceIdV,
    country_code: countryCodeV,
  } = values;

  const handleSetVisible = () => {
    setFieldValue("status", !statusV)
  }

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <SuiBox p={3}>
        <SuiTypography variant="h5">Basic Info</SuiTypography>
      </SuiBox>
      <SuiBox component="form" pb={3} px={3}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
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
            </Grid>
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
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <SuiTypography variant="caption" fontWeight="regular">
                  Status
                </SuiTypography>
                <SuiBox mx={1}>
                  <Switch
                    checked={stateV}
                    onChange={handleSetVisible}
                  />
                </SuiBox>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={company_name.type}
                  label={company_name.label}
                  name={company_name.name}
                  value={companyNameV}
                  placeholder={company_name.placeholder}
                  error={errors.company_name && touched.company_name}
                // success={companyNameV.length > 0 && !errors.company_name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={position.type}
                  label={position.label}
                  name={position.name}
                  value={positionV}
                  placeholder={position.placeholder}
                  error={errors.position && touched.position}
                // success={positionV.length > 0 && !errors.position}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={fax.type}
                  label={fax.label}
                  name={fax.name}
                  value={faxV}
                  placeholder={fax.placeholder}
                  error={errors.fax && touched.fax}
                // success={faxV.length > 0 && !errors.fax}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={website.type}
                  label={website.label}
                  name={website.name}
                  value={websiteV}
                  placeholder={website.placeholder}
                  error={errors.website && touched.website}
                // success={websiteV.length > 0 && !errors.website}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={currency.type}
                  label={currency.label}
                  name={currency.name}
                  value={currencyV}
                  placeholder={currency.placeholder}
                  error={errors.currency && touched.currency}
                // success={currencyV.length > 0 && !errors.currency}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={language.type}
                  label={language.label}
                  name={language.name}
                  value={languageV}
                  placeholder={language.placeholder}
                  error={errors.language && touched.language}
                // success={languageV.length > 0 && !errors.language}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <SuiSelect
                  name={country_id.name}
                  label={country_id.label}
                  options={country}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={city.type}
                  label={city.label}
                  name={city.name}
                  value={cityV}
                  placeholder={city.placeholder}
                  error={errors.city && touched.city}
                // success={cityV.length > 0 && !errors.city}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={state.type}
                  label={state.label}
                  name={state.name}
                  value={stateV}
                  placeholder={state.placeholder}
                  error={errors.state && touched.state}
                // success={stateV.length > 0 && !errors.state}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={zipcode.type}
                  label={zipcode.label}
                  name={zipcode.name}
                  value={zipCodeV}
                  placeholder={zipcode.placeholder}
                  error={errors.zipcode && touched.zipcode}
                // success={zipCodeV.length > 0 && !errors.zipcode}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <FormField
              type={address.type}
              label={address.label}
              name={address.name}
              value={addressV}
              placeholder={address.placeholder}
              error={errors.address && touched.address}
            // success={addressV.length > 0 && !errors.address}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <SuiSelect
                  name={source_id.name}
                  label={source_id.label}
                  options={leadSource}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SuiSelect
                  name={assigned_to.name}
                  label={assigned_to.label}
                  options={user}
                />
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </SuiBox>
    </Card>
  )
}

export default ContactForm 