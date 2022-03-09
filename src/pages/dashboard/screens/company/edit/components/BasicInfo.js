import React from 'react'

import { Card, Grid } from '@mui/material'

import SuiTypography from 'components/SuiTypography'
import SuiBox from 'components/SuiBox'
import FormField from 'components/FormField'
import SuiSelect from 'components/SuiSelect'

import { getNameList } from "country-list";

const BasicInfo = ({ formData, category, country, companyType }) => {
  const { formField, values, errors, touched } = formData;
  const { address, bio, city, cr, email, establishment_year, total_employees, fax, location, name, po_box, telephone, type, vat, website, zip_code } = formField;
  const {
    address: addressV,
    name: NameV,
    bio: bioV,
    city: cityV,
    cr: crV,
    email: emailV,
    establishment_year: establishmentYearV,
    fax: faxV,
    location: locationV,
    po_box: poBoxV,
    telephone: telephoneV,
    type: typeV,
    vat: vatV,
    website: websiteV,
    zip_code: zipCodeV,
    total_employees: totalEmployeesV
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
              type={name.type}
              label={name.label}
              name={name.name}
              value={NameV}
              placeholder={name.placeholder}
              error={errors.name && touched.name}
            // success={NameV.length > 0 && !errors.name}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SuiSelect
              name="type"
              options={companyType}
              label="type"
            />
          </Grid>

          <Grid item xs={12}>
            <FormField
              type={bio.type}
              label={bio.label}
              name={bio.name}
              value={bioV}
              placeholder={bio.placeholder}
              error={errors.bio && touched.bio}
            // success={bioV.length > 0 && !errors.bio}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={cr.type}
                  label={cr.label}
                  name={cr.name}
                  value={crV}
                  placeholder={cr.placeholder}
                  error={errors.cr && touched.cr}
                // success={crV.length > 0 && !errors.cr}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={vat.type}
                  label={vat.label}
                  name={vat.name}
                  value={vatV}
                  placeholder={vat.placeholder}
                  error={errors.vat && touched.vat}
                // success={vatV.length > 0 && !errors.vat}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={establishment_year.type}
                  label={establishment_year.label}
                  name={establishment_year.name}
                  value={establishmentYearV}
                  placeholder={establishment_year.placeholder}
                  error={errors.establishment_year && touched.establishment_year}
                // success={establishmentYearV.length > 0 && !errors.establishment_year}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={total_employees.type}
                  label={total_employees.label}
                  name={total_employees.name}
                  value={totalEmployeesV}
                  placeholder={total_employees.placeholder}
                  error={errors.total_employees && touched.total_employees}
                // success={vatV.length > 0 && !errors.vat}
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
                  type={telephone.type}
                  label={telephone.label}
                  name={telephone.name}
                  value={telephoneV}
                  placeholder={telephone.placeholder}
                  error={errors.telephone && touched.telephone}
                // success={telephoneV.length > 0 && !errors.telephone}
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
            <Grid container spacing={3}>
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
                  type={zip_code.type}
                  label={zip_code.label}
                  name={zip_code.name}
                  value={zipCodeV}
                  placeholder={zip_code.placeholder}
                  error={errors.zip_code && touched.zip_code}
                // success={faxV.length > 0 && !errors.fax}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={location.type}
                  label={location.label}
                  name={location.name}
                  value={locationV}
                  placeholder={location.placeholder}
                  error={errors.location && touched.location}
                // success={cityV.length > 0 && !errors.city}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={po_box.type}
                  label={po_box.label}
                  name={po_box.name}
                  value={poBoxV}
                  placeholder={po_box.placeholder}
                  error={errors.po_box && touched.po_box}
                // success={faxV.length > 0 && !errors.fax}
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
                  name="country_id"
                  options={country}
                  label="country"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SuiSelect
                  name="category_id"
                  options={category}
                  label="category"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item xs={12} sm={6}>
            <FormField
              label="email"
              placeholder="example@email.com"
              inputProps={{ type: "email" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="confirmation email"
              placeholder="example@email.com"
              inputProps={{ type: "email" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField label="your location" placeholder="Sydney, A" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="phone number"
              placeholder="+40 735 631 620"
              inputProps={{ type: "number" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="language" placeholder="English" />
          </Grid> */}
        </Grid>
      </SuiBox>
    </Card>
  )
}

export default BasicInfo