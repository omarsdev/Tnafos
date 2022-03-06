/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState, useContext, useEffect } from "react";
import { AxiosInstance } from "../../../../api/AxiosInstance";
import { AlertContext } from "../../../../context/AlertContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiEditor from "components/SuiEditor";
import SuiSelect from "components/SuiSelect";
import SuiButton from "components/SuiButton";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

const AddService = () => {
  const [editorValue, setEditorValue] = useState(
    "<p>Some initial <strong>bold</strong> text</p><br><br><br>"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const [err, setErr] = useState(null);
  const [categoriesList, setCategoriesList] = useState(null);

  const history = useHistory();

  const createService = async (data) => {
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
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/service");
  };

  const getAllCategories = async () => {
    try {
      const res = await AxiosInstance.get("/api/category");
      setCategoriesList(res.data.data);
    } catch (err) {
      history.push("/dashboard/service");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <SuiBox mt={1} mb={20}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Card className="overflow-visible">
            <SuiBox p={2}>
              <SuiBox>
                <SuiTypography variant="h5">Add New Service</SuiTypography>
                <SuiBox mt={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <FormField
                        type="text"
                        label="Name of service"
                        placeholder="Enter name of service"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormField
                        type="text"
                        label="Price"
                        placeholder="Enter Price"
                      />
                    </Grid>
                  </Grid>
                </SuiBox>
                <SuiBox mt={2}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <SuiBox
                        mb={1}
                        ml={0.5}
                        lineHeight={0}
                        display="inline-block"
                      >
                        <SuiTypography
                          component="label"
                          variant="caption"
                          fontWeight="bold"
                        >
                          Description &nbsp;&nbsp;
                          <SuiTypography
                            variant="caption"
                            fontWeight="regular"
                            textColor="text"
                          >
                            (optional)
                          </SuiTypography>
                        </SuiTypography>
                      </SuiBox>
                      <SuiEditor
                        value={editorValue}
                        onChange={setEditorValue}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <SuiBox mb={3}>
                        <SuiBox
                          mb={1}
                          // ml={0.5}
                          lineHeight={0}
                          display="inline-block"
                        >
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Category
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          defaultValue={{
                            value: `${categoriesList?.name}`,
                            label: `${categoriesList?.name}`,
                          }}
                          options={categoriesList}
                        />
                      </SuiBox>

                      <Grid item xs={12} sm={6}>
                        <FormField
                          type="text"
                          label="Type"
                          placeholder="Enter Price"
                        />
                      </Grid>
                    </Grid>
                    <SuiBox
                      display="flex"
                      width="100%"
                      mt={4}
                      mb={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <SuiBox mr={1}>
                        <SuiButton
                          variant="gradient"
                          buttonColor="dark"
                          onClick={handleSubmit(createService)}
                        >
                          SAVE
                        </SuiButton>
                      </SuiBox>
                      <SuiButton
                        variant="gradient"
                        buttonColor="secondary"
                        onClick={handleCancel}
                      >
                        Cancel
                      </SuiButton>
                    </SuiBox>
                  </Grid>
                </SuiBox>
              </SuiBox>
            </SuiBox>
          </Card>
        </Grid>
      </Grid>
    </SuiBox>
  );
};

export default AddService;
