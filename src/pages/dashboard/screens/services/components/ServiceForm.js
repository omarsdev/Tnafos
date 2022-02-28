// /**
// =========================================================
// * Soft UI Dashboard PRO React - v2.0.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
// * Copyright 2021 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

import React, { useState, useContext, useEffect } from "react";

import { AxiosInstance } from "../../../../../api/AxiosInstance";
import { AlertContext } from "../../../../../context/AlertContext";

import { Link, useHistory, useRouteMatch } from "react-router-dom";

import { Formik, Form } from "formik";
// @mui material components
import CircularProgress from "@mui/material/CircularProgress";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiSelect from "components/SuiSelect";
import SuiButton from "components/SuiButton";

// import { getNameList } from "country-list";

import { checkout, initialValue, validation } from "./schema/form";
import FormField from "./FormField";

const ServiceForm = () => {
  const { formId, formField } = checkout;

  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();
  const match = useRouteMatch();

  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  //   const [categoriesList, setCategoriesList] = useState(null);

  const createService = async (values, actions) => {
    let data = values;
    data.category_id = values.category_id.value;

    try {
      const res = await AxiosInstance.post(
        "/api/dashboard/service/create",
        data
      );
      setAlert({
        message: "new service has been added!",
        type: "success",
      });
      history.push("/dashboard/service");
    } catch (error) {
      setErr(err.response.data.errors);
      setAlert({
        message: `${err.response.data.message}`,
        type: "error",
      });

      //   for (const key in res.error.errors) {
      //     let msg = "";
      //     res.error.errors[key].forEach((element) => {
      //       msg += element + " ";
      //     });
      //     error[key] = msg;
      //   }
      //   actions.setErrors(error);
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/service");
  };

  //   const getAllCategories = async () => {
  //     try {
  //       const res = await AxiosInstance.get("/api/category");
  //       setCategoriesList(res.data.data);
  //     } catch (err) {
  //       console.log(err.response);
  //       history.push("/dashboard/service");
  //     }
  //   };

  //   useEffect(() => {
  //     getAllCategories();
  //   }, []);

  const FormData = ({ formData }) => {
    const { formField, values, errors, touched } = formData;
    const { name, description, category_id, price, type } = formField;
    const {
      name: nameV,
      description: descriptionV,
      category_id: catrgoryIdV,
      price: priceV,
      type: typeV,
    } = values;

    return (
      <>
        <SuiBox>
          <SuiTypography variant="h5">Add new service</SuiTypography>
          <SuiBox display="flex" flexDirection="row" width="100%">
            <SuiBox mr={1} width="100%">
              <FormField
                type={name.type}
                label={name.label}
                name={name.name}
                value={nameV}
                placeholder={name.placeholder}
                error={errors.name && touched.name}
                success={nameV.length > 0 && !errors.name}
              />
            </SuiBox>
            <SuiBox ml={1} width="100%">
              <FormField
                type={description.type}
                label={description.label}
                name={description.name}
                value={descriptionV}
                placeholder={description.placeholder}
                error={errors.description && touched.description}
                success={descriptionV.length > 0 && !errors.description}
              />
            </SuiBox>
          </SuiBox>

          <SuiBox display="flex" flexDirection="row" width="100%">
            <SuiBox mr={1} width="100%">
              <FormField
                type={price.type}
                label={price.label}
                name={price.name}
                value={priceV}
                placeholder={price.placeholder}
                error={errors.price && touched.price}
                success={priceV.length > 0 && !errors.price}
              />
            </SuiBox>

            <SuiBox mr={1} width="100%">
              <FormField
                type={type.type}
                label={type.label}
                name={type.name}
                value={typeV}
                placeholder={type.placeholder}
                error={errors.type && touched.type}
                success={typeV.length > 0 && !errors.type}
              />
            </SuiBox>
          </SuiBox>

          <SuiBox display="flex" flexDirection="row" width="100%">
            <SuiBox mr={1} width="100%">
              {/* <SuiBox mb={3}>
                <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SuiTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Category id
                  </SuiTypography>
                </SuiBox>
                <SuiSelect
                  defaultValue={{
                    value: `${categoriesList?.uuid}`,
                    label: `${categoriesList?.name}`,
                  }}
                  options={categoriesList}
                />
              </SuiBox> */}

              {/* <SuiSelect
                name="category_id"
                options={Object.keys(getNameList()).map((entry) => ({
                  value: getNameList()[entry],
                  label: entry,
                }))}
                label="category id"
              /> */}
            </SuiBox>
          </SuiBox>
        </SuiBox>
      </>
    );
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validation[0]}
      onSubmit={createService}
    >
      {({ values, errors, touched, isSubmitting, handleChange }) => (
        <Form id={formId} autoComplete="off">
          <FormData
            formData={{
              values,
              touched,
              formField,
              errors,
            }}
            handleChange={handleChange}
          />

          <SuiBox
            display="flex"
            width="100%"
            my={2}
            justifyContent="center"
            alignItems="center"
          >
            <SuiBox mr={1}>
              <SuiButton
                variant="gradient"
                buttonColor="dark"
                onClick={createService}
              >
                add service
                {isSubmitting && (
                  <SuiBox ml={1}>
                    <CircularProgress size={20} />
                  </SuiBox>
                )}
              </SuiButton>
            </SuiBox>

            <SuiButton
              variant="gradient"
              buttonColor="secondary"
              onClick={handleCancel}
            >
              cancel
            </SuiButton>
          </SuiBox>
        </Form>
      )}
    </Formik>
  );
};

export default ServiceForm;
