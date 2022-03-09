import React, { useState, useEffect } from 'react'

import { Form, Formik } from 'formik'
import SuiBox from 'components/SuiBox'
import { Grid } from '@mui/material'

import { checkout, validation, initialValue } from "./schema"
import { AxiosInstance } from 'api'
import { useHistory } from 'react-router-dom'

import { apiGetData } from 'api/getData/getData'

import SideNav from './components/SideNav'
import Header from './components/Header'
import BasicInfo from './components/BasicInfo'

import { companyTypeAsArray } from "constants/company"
import { arrayConvertSelector } from 'utils/arrayConvertSelector'


const Edit = ({ company, setCompany }) => {
  const { formId, formField } = checkout;

  const history = useHistory();

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
    <SuiBox mt={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <SideNav />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Formik
            initialValues={initialValue(company)}
            validationSchema={validation[0]}
            onSubmit={handleSubmit}>
            {({ values, errors, touched, isSubmitting }) => {
              return (
                <Form id={formId} autoComplete="off">

                  <SuiBox mb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Header />
                      </Grid>
                      <Grid item xs={12}>

                        <BasicInfo formData={{
                          values,
                          touched,
                          formField,
                          errors,
                        }}
                          category={category} country={country}
                          companyType={arrayConvertSelector(companyTypeAsArray)}
                        />

                      </Grid>
                    </Grid>
                  </SuiBox>
                </Form>
              )
            }}
          </Formik>
        </Grid>
      </Grid>
    </SuiBox >
  )
}

export default Edit