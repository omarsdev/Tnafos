import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import { Form, Formik } from "formik";

import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";

import { AxiosInstance } from "api/AxiosInstance";
import UserForm from "./components/UserForm";

import { checkout, initialValue, validation } from "./components/schema/updateSchema";

const EditUser = () => {
  const { formId, formField } = checkout;

  const { uuid } = useParams();
  const history = useHistory();

  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/user/${uuid}`);
      setUser(res.data.data);
    } catch (err) { }
  };

  const handleSubmit = async (values, actions) => {
    let newData = values;

    for (const key in values) {
      if (typeof (values[key]) === "object")
        newData[key] = values[key].value
    }

    await AxiosInstance.put(`/api/dashboard/user/${uuid}/update`, newData).then((res) => {
      setUser(res.data.data)
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
    getUser();
  }, []);

  return user && (
    <SuiBox mt={2} mb={20}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          {/* <Card className="overflow-visible"> */}

          <Formik
            initialValues={initialValue(user)}
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
                          Update
                        </SuiButton>

                      </Grid>
                    </Grid>
                  </SuiBox>
                </Form>
              )
            }}
          </Formik>

          {/* </Card> */}

        </Grid>
      </Grid>
    </SuiBox>
  )
}

export default EditUser