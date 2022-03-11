import React, { useState, useEffect } from 'react'

import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { Card, Grid } from '@mui/material';

import SuiBox from 'components/SuiBox';
import SuiButton from 'components/SuiButton';

import { checkout, initialValue, validation } from "./components/schema/createEstimateSchema";
import EstimateForm from './components/EstimateForm';

import { AxiosInstance } from 'api';
import { apiGetData } from 'api/getData/getData';

const EstimateCreate = () => {
  const { formId, formField } = checkout;

  const history = useHistory();

  const [customerUserData, setCustomerUserData] = useState(null)

  const handleSubmit = async (values, actions) => {
    let newData = { ...values };

    for (const key in newData) {
      if (typeof (newData[key]) === "object" && key !== "lines")
        newData[key] = newData[key].value
      else if (typeof (newData[key]) === "object" && key === "lines") {
        const newLinesData = [];
        newData[key].map(e => {
          newLinesData.push({
            service_id: e.value,
            title: e.title,
            description: e.description,
            price: e.price,
            qty: e.qty
          })
        })
        newData[key] = newLinesData;
      }
    }

    await AxiosInstance.post(`/api/dashboard/estimate/create`, newData).then((res) => {
      history.push("/dashboard/estimate");
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

  const getAllUserToAssignedTo = async () => {
    const [newUserData, newCustomerData, newEstimateStatus, newServiceData] = [[], [], [], []];

    const resUser = await apiGetData("dashboard/user");
    const resCustomer = await apiGetData("dashboard/customer");
    const resSetting = await apiGetData("dashboard/settings");
    const resServices = await apiGetData("dashboard/service");

    if (resUser.success && resCustomer.success && resSetting.success && resServices.success) {
      resUser.data.forEach(element => {
        newUserData.push({
          value: element.uuid,
          label: `${element.first_name} ${element.last_name}`,
        })
      });

      resCustomer.data.forEach(element => {
        newCustomerData.push({
          value: element.uuid,
          label: element.company_name,
        })
      });

      resSetting.data.estimate_status.forEach((e) => {
        newEstimateStatus.push({
          value: e.id,
          label: e.name
        })
      })

      resServices.data.forEach(e => {
        newServiceData.push({
          value: e.uuid,
          label: e.name,
          title: e.name,
          description: e.description,
          price: e.price,
          qty: 1,
        })
      })

      setCustomerUserData({ customer: newUserData, user: newCustomerData, status: newEstimateStatus, services: newServiceData })

    }
  }

  useEffect(() => {
    getAllUserToAssignedTo();
  }, [])

  return customerUserData && (
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
                            <EstimateForm formData={{
                              values,
                              touched,
                              formField,
                              errors,
                              setFieldValue,
                            }} data={customerUserData} />

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

export default EstimateCreate