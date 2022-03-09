import React, { useState, useEffect } from 'react'

import { Form, Formik } from 'formik';
import { useHistory, useParams } from 'react-router-dom';

import { Card, Grid } from '@mui/material';

import SuiBox from 'components/SuiBox';
import SuiButton from 'components/SuiButton';

import { checkout, initialValue, validation } from "./components/schema/updateSchemaCustomer";
import CustomerForm from './components/CustomerForm';

import { AxiosInstance } from 'api';

import { apiGetData } from 'api/getData/getData';

const CustomerUpdate = () => {
  const { formId, formField } = checkout;

  const { uuid } = useParams();
  const history = useHistory();

  const [country, setCountry] = useState(null);
  const [customerData, setCustomerData] = useState(null);

  const getAllCountry = async () => {
    const res = await apiGetData('country');
    if (res.success) {
      const newData = [];
      res.data.forEach(element => {
        newData.push({
          value: element.uuid,
          label: element.name,
        })
      });
      setCountry(newData);
    }
  }

  const getShowCustomer = async () => {
    await AxiosInstance.get(`/api/dashboard/customer/${uuid}`).then(res => {
      setCustomerData(res.data.data)
    })
  }

  const handleSubmit = async (values, actions) => {
    let newData = values;

    for (const key in values) {
      if (typeof (values[key]) === "object")
        newData[key] = values[key].value
    }

    await AxiosInstance.put(`/api/dashboard/customer/${uuid}/update`, newData).then((res) => {
      history.push(`/dashboard/customer/${uuid}`);
    }).catch((err) => {
      console.log(err.response)
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
    getShowCustomer();
    getAllCountry();
  }, [])

  return country && customerData && (
    <SuiBox mt={1} mb={20}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Card className="overflow-visible">
            <SuiBox p={2}>
              <Formik
                initialValues={initialValue(customerData)}
                validationSchema={validation[0]}
                onSubmit={handleSubmit}>
                {({ values, errors, touched, isSubmitting }) => {
                  return (
                    <Form id={formId} autoComplete="off">

                      <SuiBox mb={3}>
                        <Grid container spacing={3}>

                          <Grid item xs={12}>
                            <CustomerForm formData={{
                              values,
                              touched,
                              formField,
                              errors,
                            }} country={country} />

                            <SuiButton
                              disabled={isSubmitting}
                              type="submit"
                              variant="gradient"
                              color="dark"
                            >
                              {isSubmitting ? "Loading..." : "Update"}
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

export default CustomerUpdate