import React, { useState, useEffect } from 'react'

import { Form, Formik } from 'formik';
import { useHistory, useParams } from 'react-router-dom';

import { Card, Grid } from '@mui/material';

import SuiBox from 'components/SuiBox';
import SuiButton from 'components/SuiButton';

import { checkout, initialValue, validation } from "./components/schema/updateServiceSchema";
import ServiceForm from './components/ServiceForm';

import { AxiosInstance } from 'api';

import { apiGetData } from 'api/getData/getData';
import { arrayConvertSelector } from 'utils/arrayConvertSelector';

import { serviceTypeAsArray } from 'constants/service';


const EditService = () => {
  const { formId, formField } = checkout;

  const { uuid } = useParams();
  const history = useHistory();

  const [service, setService] = useState(null);
  const [category, setCategory] = useState(null);

  const getCategoryApi = async () => {
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
  }

  const getService = async () => {
    await AxiosInstance.get(`/api/dashboard/service/${uuid}`).then((res) => {
      setService(res.data.data);
    }).catch((err) => {
      history.push('/dashboard/service')
    })
  }

  const handleSubmit = async (values, actions) => {
    let newData = values;

    for (const key in values) {
      if (typeof (values[key]) === "object")
        newData[key] = values[key].value
    }

    await AxiosInstance.put(`/api/dashboard/service/${uuid}/update`, newData).then((res) => {
      history.push(`/dashboard/service/${uuid}`);
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
    getService();
    getCategoryApi();
  }, [])

  return service && category && (
    <SuiBox mt={1} mb={20}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Card className="overflow-visible">
            <SuiBox p={2}>
              <Formik
                initialValues={initialValue(service)}
                validationSchema={validation[0]}
                onSubmit={handleSubmit}>
                {({ values, errors, touched, isSubmitting }) => {
                  return (
                    <Form id={formId} autoComplete="off">

                      <SuiBox mb={3}>
                        <Grid container spacing={3}>

                          <Grid item xs={12}>
                            <ServiceForm formData={{
                              values,
                              touched,
                              formField,
                              errors,
                            }} category={category} serviceType={arrayConvertSelector(serviceTypeAsArray)} />

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
  );
};

export default EditService;
