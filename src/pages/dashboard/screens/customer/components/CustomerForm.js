import React from 'react'

import { Card, Grid } from '@mui/material';

import FormField from 'components/FormField';
import SuiBox from 'components/SuiBox';
import SuiSelect from 'components/SuiSelect';
import SuiTypography from 'components/SuiTypography';

import { getNameList } from "country-list";

const CustomerForm = ({ formData, country }) => {
  const { formField, values, errors, touched } = formData;
  const {
    company_name,
    website,
    vat_number,
    fax,
    country_code,
    phone,

    address,

    currency,
    language,
    city,
    state,
    zipcode,
    country_id,
  } = formField;
  const {
    company_name: companyNameV,
    website: websiteV,
    vat_number: vatNumberV,
    fax: faxV,
    country_code: countryCodeV,
    phone: phoneV,

    address: addressV,

    currency: currencyV,
    language: languageV,
    city: cityV,
    state: stateV,
    zipcode: zipCodeV,
    country_id: countryIdV,
  } = values;


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
                  type={vat_number.type}
                  label={vat_number.label}
                  name={vat_number.name}
                  value={vatNumberV}
                  placeholder={vat_number.placeholder}
                  error={errors.vat_number && touched.vat_number}
                // success={vatNumberV.length > 0 && !errors.vat_number}
                />
              </Grid>
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
                  type={phone.type}
                  label={phone.label}
                  name={phone.name}
                  value={phoneV}
                  placeholder={phone.placeholder}
                  error={errors.phone && touched.phone}
                // success={phoneV.length > 0 && !errors.phone}
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
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <SuiSelect
                  name="country_id"
                  options={country}
                  label="country"
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

        </Grid>
      </SuiBox>
    </Card>
  )
}

export default CustomerForm