import React from 'react'

import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { Card, Grid } from '@mui/material';

import SuiBox from 'components/SuiBox';
import SuiButton from 'components/SuiButton';

import { checkout, initialValue, validation } from "./components/schema/createSchema";
import UserForm from './components/UserForm';
import { AxiosInstance } from 'api';

const CreateUser = () => {
  const { formId, formField } = checkout;

  const history = useHistory();

  const handleSubmit = async (values, actions) => {
    let newData = values;

    for (const key in values) {
      if (typeof (values[key]) === "object")
        newData[key] = values[key].value
    }

    await AxiosInstance.post(`/api/dashboard/user/create`, newData).then((res) => {
      history.push("/dashboard/user");
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


  return (
    <SuiBox mt={1} mb={20}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Card className="overflow-visible">
            <SuiBox p={2}>
              <Formik
                initialValues={initialValue}
                validationSchema={validation[0]}
                onSubmit={handleSubmit}>
                {({ values, errors, touched, isSubmitting }) => {
                  return (
                    <Form id={formId} autoComplete="off">

                      <SuiBox mb={3}>
                        <Grid container spacing={3}>

                          <Grid item xs={12}>
                            <UserForm formData={{
                              values,
                              touched,
                              formField,
                              errors,
                            }} />

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

export default CreateUser