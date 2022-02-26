import React, { useState, useEffect } from 'react'

import { Form, Formik } from 'formik'
import SuiBox from 'components/SuiBox'
import { Checkbox, CircularProgress } from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiButton from 'components/SuiButton'
import FormField from 'components/FormField'

import { checkout, validation, initialValue } from "./schema"
import { AxiosInstance } from 'api'
import { useHistory } from 'react-router-dom'
import SuiSelect from 'components/SuiSelect'
import { apiGetData } from 'api/getData/getData'

import { getNameList } from "country-list";


const Edit = ({ company, setCompany }) => {
  const [category, setCategory] = useState(null);
  const [country, setCountry] = useState(null);

  const getApiCategory = async () => {
    const res = await apiGetData('category');
    if (res.success) {
      const newData = [];
      res.data.forEach(element => {
        newData.push({
          value: element.uuid,
          label: element.name,
        })
      });
      setCategory(newData);
    }
    // TODO handle the false request
    const resCountry = await apiGetData('country');
    if (resCountry.success) {
      const newData = [];
      resCountry.data.forEach(element => {
        newData.push({
          value: element.uuid,
          label: element.name,
        })
      });
      setCountry(newData);
    }
    // TODO handle the false request
  }

  const { formId, formField } = checkout;

  const history = useHistory();

  const handleSubmit = async (values, actions) => {
    let newData = values;

    for (const key in values) {
      if (typeof (values[key]) === "object")
        newData[key] = values[key].value
    }

    await AxiosInstance.put("/api/dashboard/company/update", newData).then((res) => {
      setCompany(res.data.data)
      history.push("/dashboard/company");
    }).catch((err) => {
      // console.log(err.response.data.errors)
      let error = {}
      for (const key in err.response.data.errors) {
        let msg = ''
        err.response.data.errors[key].forEach(element => {
          msg += element + " "
        });
        error[key] = msg;
      }
      actions.setErrors(error);
    })
  };

  useEffect(() => {
    getApiCategory();
  }, [])

  return category && country && (
    <Formik
      initialValues={initialValue(company)}
      validationSchema={validation[0]}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form id={formId} autoComplete="off">

          <FormData formData={{
            values,
            touched,
            formField,
            errors,
          }} category={category} country={country} />

          <SuiBox mt={4} mb={1}>
            <SuiButton
              variant="gradient"
              color="info"
              size="large"
              fullWidth
              type="submit"
            >
              Register
              {isSubmitting && (
                <SuiBox ml={1}>
                  <CircularProgress size={20} />
                </SuiBox>
              )}
            </SuiButton>
          </SuiBox>

        </Form>
      )}
    </Formik>
  )
}

const FormData = ({ formData, category, country }) => {
  const { formField, values, errors, touched } = formData;
  const { address, bio, city, cr, email, establishment_year, fax, location, name, po_box, telephone, type, vat, website, zip_code } = formField;
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
    zip_code: zipCodeV
  } = values;

  return (
    <>
      <SuiBox display="flex" flexDirection="row" width="100%">
        <SuiBox mr={1} width="100%">
          <FormField
            type={name.type}
            label={name.label}
            name={name.name}
            value={NameV}
            placeholder={name.placeholder}
            error={errors.name && touched.name}
            success={NameV.length > 0 && !errors.name}
          />
          <FormField
            type={address.type}
            label={address.label}
            name={address.name}
            value={addressV}
            placeholder={address.placeholder}
            error={errors.address && touched.address}
            success={addressV.length > 0 && !errors.address}
          />
          <FormField
            type={bio.type}
            label={bio.label}
            name={bio.name}
            value={bioV}
            placeholder={bio.placeholder}
            error={errors.bio && touched.bio}
            success={bioV.length > 0 && !errors.bio}
          />
          <FormField
            type={city.type}
            label={city.label}
            name={city.name}
            value={cityV}
            placeholder={city.placeholder}
            error={errors.city && touched.city}
            success={cityV.length > 0 && !errors.city}
          />
          <FormField
            type={cr.type}
            label={cr.label}
            name={cr.name}
            value={crV}
            placeholder={cr.placeholder}
            error={errors.cr && touched.cr}
            success={crV.length > 0 && !errors.cr}
          />
          <FormField
            type={email.type}
            label={email.label}
            name={email.name}
            value={emailV}
            placeholder={email.placeholder}
            error={errors.email && touched.email}
            success={emailV.length > 0 && !errors.email}
          />
          <FormField
            type={establishment_year.type}
            label={establishment_year.label}
            name={establishment_year.name}
            value={establishmentYearV}
            placeholder={establishment_year.placeholder}
            error={errors.establishment_year && touched.establishment_year}
            success={establishmentYearV.length > 0 && !errors.establishment_year}
          />
          <FormField
            type={fax.type}
            label={fax.label}
            name={fax.name}
            value={faxV}
            placeholder={fax.placeholder}
            error={errors.fax && touched.fax}
            success={faxV.length > 0 && !errors.fax}
          />
          <FormField
            type={location.type}
            label={location.label}
            name={location.name}
            value={locationV}
            placeholder={location.placeholder}
            error={errors.location && touched.location}
            success={locationV.length > 0 && !errors.location}
          />
          <FormField
            type={po_box.type}
            label={po_box.label}
            name={po_box.name}
            value={poBoxV}
            placeholder={po_box.placeholder}
            error={errors.po_box && touched.po_box}
            success={poBoxV.length > 0 && !errors.po_box}
          />
          <FormField
            type={telephone.type}
            label={telephone.label}
            name={telephone.name}
            value={telephoneV}
            placeholder={telephone.placeholder}
            error={errors.telephone && touched.telephone}
            success={telephoneV.length > 0 && !errors.telephone}
          />
          <FormField
            type={type.type}
            label={type.label}
            name={type.name}
            value={typeV}
            placeholder={type.placeholder}
            error={errors.type && touched.type}
            success={typeV.length > 0 && !errors.type}
          />
          <FormField
            type={vat.type}
            label={vat.label}
            name={vat.name}
            value={vatV}
            placeholder={vat.placeholder}
            error={errors.vat && touched.vat}
            success={vatV.length > 0 && !errors.vat}
          />
          <FormField
            type={website.type}
            label={website.label}
            name={website.name}
            value={websiteV}
            placeholder={website.placeholder}
            error={errors.website && touched.website}
            success={websiteV.length > 0 && !errors.website}
          />
          <FormField
            type={zip_code.type}
            label={zip_code.label}
            name={zip_code.name}
            value={zipCodeV}
            placeholder={zip_code.placeholder}
            error={errors.zip_code && touched.zip_code}
            success={zipCodeV.length > 0 && !errors.zip_code}
          />
          <SuiSelect
            name="category_id"
            options={category}
            label="category"
          />
          <SuiSelect
            name="country_id"
            options={country}
            label="country"
          />
          <SuiSelect
            name="country_code"
            options={Object.keys(getNameList()).map((entry) => ({ value: getNameList()[entry], label: entry }))}
            label="country code"
          />

        </SuiBox>

        {/* 
        <SuiBox ml={1} width="100%">
          <FormField
            type={last_name.type}
            label={last_name.label}
            name={last_name.name}
            value={lastNameV}
            placeholder={last_name.placeholder}
            error={errors.last_name && touched.last_name}
            success={lastNameV.length > 0 && !errors.last_name}
          />
        </SuiBox>
      </SuiBox>
      <SuiBox>



        <SuiBox display="flex" flexDirection="row" width="100%">
          <SuiBox mr={1} width="100%">
            <SuiSelect
              name="country_code"
              // options={Object.keys(getNameList()).map((entry) => ({ value: getNameList()[entry], label: entry }))}
              label="country code"
            />
          </SuiBox>
          <SuiBox ml={1} width="100%">
            <FormField
              type={phone_number.type}
              label={phone_number.label}e
              name={phone_number.name}
              value={phoneNumberV}
              placeholder={phone_number.placeholder}
              error={errors.phone_number && touched.phone_number}
              success={phoneNumberV.length > 0 && !errors.phone_number}
            />
          </SuiBox>
        </SuiBox>

        <FormField
          type={email.type}
          label={email.label}
          name={email.name}
          value={emailV}
          placeholder={email.placeholder}
          error={errors.email && touched.email}
          success={emailV.length > 0 && !errors.email}
        />
        <FormField
          type={password.type}
          label={password.label}
          name={password.name}
          value={passwordV}
          placeholder={password.placeholder}
          error={errors.password && touched.password}
          success={passwordV.length > 0 && !errors.password}
        /> */}
      </SuiBox>
    </>
  )
}

export default Edit