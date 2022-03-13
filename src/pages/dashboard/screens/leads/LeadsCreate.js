import React, { useState, useEffect } from 'react'

import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { Card, Grid } from '@mui/material';

import SuiBox from 'components/SuiBox';
import SuiButton from 'components/SuiButton';

import { checkout, initialValue, validation } from "./components/schema/createLeadsSchema";
import LeadsForm from './components/LeadsForm';

import { AxiosInstance } from 'api';
import { apiGetData } from 'api/getData/getData';

const LeadsCreate = () => {
  const { formId, formField } = checkout;

  const history = useHistory();

  const [userLeadData, setUserLeadData] = useState(null)

  const handleSubmit = async (values, actions) => {
    let newData = { ...values };

    for (const key in values) {
      if (typeof (values[key]) === "object")
        newData[key] = values[key].value
    }

    await AxiosInstance.post(`/api/dashboard/lead/create`, newData).then((res) => {
      history.push("/dashboard/contact");
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

  const getSourceAssignedHandler = async () => {
    const [newUserData, newLeadSourceData, newCountryData] = [[], [], []];

    const userData = await apiGetData('dashboard/user');
    const leadSourceData = await apiGetData('dashboard/lead-source');
    const countryData = await apiGetData('country');

    if (userData.success && leadSourceData.success && countryData.success) {
      userData.data.forEach(element => {
        newUserData.push({
          value: element.uuid,
          label: `${element.first_name} ${element.last_name}`,
        })
      });

      leadSourceData.data.forEach(element => {
        newLeadSourceData.push({
          value: element.uuid,
          label: element.name,
        })
      });

      countryData.data.forEach(element => {
        newCountryData.push({
          value: element.uuid,
          label: element.name,
        })
      });

      setUserLeadData({
        user: newUserData,
        leadSource: newLeadSourceData,
        country: newCountryData,
      })
    }
  }

  useEffect(() => {
    getSourceAssignedHandler();
  }, [])

  return userLeadData && (
    <SuiBox mt={1} mb={20}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Card className="overflow-visible">
            <SuiBox p={2}>
              <Formik
                initialValues={initialValue}
                validationSchema={validation[0]}
                onSubmit={handleSubmit}>
                {({ values, errors, touched, isSubmitting, setFieldValue }) => {
                  return (
                    <Form id={formId} autoComplete="off">

                      <SuiBox mb={3}>
                        <Grid container spacing={3}>

                          <Grid item xs={12}>
                            <LeadsForm formData={{
                              values,
                              touched,
                              formField,
                              errors,
                              setFieldValue,
                            }} data={userLeadData} />

                            <SuiButton
                              disabled={isSubmitting}
                              type="submit"
                              variant="gradient"
                              color="dark"
                            >
                              {isSubmitting ? "Loading..." : "Create"}
                            </SuiButton>

                          </Grid>
                        </Grid>
                      </SuiBox>
                    </Form>
                  )
                }}
              </Formik>
            </SuiBox>
          </Card>
        </Grid>
      </Grid>
    </SuiBox>
  )
}

export default LeadsCreate