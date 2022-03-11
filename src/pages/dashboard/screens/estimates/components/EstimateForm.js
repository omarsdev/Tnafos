import React, { Fragment } from 'react'

import { Card, Grid, Switch } from '@mui/material';

import FormField from 'components/FormField';
import SuiBox from 'components/SuiBox';
import SuiSelect from 'components/SuiSelect';
import SuiTypography from 'components/SuiTypography';

import { getNameList } from "country-list";

const EstimateForm = ({ formData, data }) => {
  const { services } = data;
  const { formField, values, errors, touched, setFieldValue } = formData;
  const {
    subject,
    status,
    date,
    valid_till,
    currency,
    customer_id,
    assigned_to,
    discount_type,
    discount_amount,
    subtotal,
    total,
    lines,
    linesTitle,
    linesDescription,
    linesPrice,
    linesQuality,
  } = formField;

  const {
    subject: subjectV,
    date: dateV,
    valid_till: validTillV,
    discount_type: discountTypeV,
    discount_amount: discountAmountV,
    total: totalV,
    subtotal: subtotalV,
    currency: currencyV,
    lines: linesV,
  } = values;

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <SuiBox p={3}>
        <SuiTypography variant="h5">Basic Info</SuiTypography>
      </SuiBox>
      <SuiBox component="form" pb={3} px={3}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={subject.type}
                  label={subject.label}
                  name={subject.name}
                  value={subjectV}
                  placeholder={subject.placeholder}
                  error={errors.subject && touched.subject}
                // success={subjectV.length > 0 && !errors.subject}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SuiSelect
                  name={status.name}
                  label={status.label}
                  options={data.status}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={date.type}
                  label={date.label}
                  name={date.name}
                  value={dateV}
                  placeholder={date.placeholder}
                  error={errors.date && touched.date}
                // success={dateV.length > 0 && !errors.date}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={valid_till.type}
                  label={valid_till.label}
                  name={valid_till.name}
                  value={validTillV}
                  placeholder={valid_till.placeholder}
                  error={errors.valid_till && touched.valid_till}
                // success={validTillV.length > 0 && !errors.valid_till}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <SuiSelect
                  name={customer_id.name}
                  label={customer_id.label}
                  options={data.user}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SuiSelect
                  name={assigned_to.name}
                  label={assigned_to.label}
                  options={data.customer}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={discount_type.type}
                  label={discount_type.label}
                  name={discount_type.name}
                  value={discountTypeV}
                  placeholder={discount_type.placeholder}
                  error={errors.discount_type && touched.discount_type}
                // success={discountTypeV.length > 0 && !errors.discount_type}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  type={discount_amount.type}
                  label={discount_amount.label}
                  name={discount_amount.name}
                  value={discountAmountV}
                  placeholder={discount_amount.placeholder}
                  error={errors.discount_amount && touched.discount_amount}
                // success={discountAmountV.length > 0 && !errors.discount_amount}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <FormField
                  type={total.type}
                  label={total.label}
                  name={total.name}
                  value={totalV}
                  placeholder={total.placeholder}
                  error={errors.total && touched.total}
                // success={totalV.length > 0 && !errors.total}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormField
                  type={subtotal.type}
                  label={subtotal.label}
                  name={subtotal.name}
                  value={subtotalV}
                  placeholder={subtotal.placeholder}
                  error={errors.subtotal && touched.subtotal}
                // success={subtotalV.length > 0 && !errors.subtotal}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormField
                  type={currency.type}
                  label={currency.label}
                  name={currency.name}
                  value={currencyV}
                  placeholder={currency.placeholder}
                  error={errors.currency && touched.currency}
                // success={currencyV.length > 0 && !errors.currency}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <SuiSelect
              name={lines.name}
              label={lines.label}
              options={services}
              onChange={(value) => {
                setFieldValue("lines", value)
              }}
              isMulti
            />
          </Grid>

          {linesV.map((e, i) => (
            <Fragment key={e.value}>
              <Grid item xs={12}>
                <FormField
                  type={linesTitle.type}
                  label={linesTitle.label}
                  name={`lines.${i}.title`}
                  value={linesV[i].title}
                  placeholder={linesTitle.placeholder}
                  error={errors?.lines?.i?.title && touched?.lines?.i?.title}
                />
              </Grid>


              <Grid item xs={12}>
                <FormField
                  type={linesDescription.type}
                  label={linesDescription.label}
                  name={`lines.${i}.description`}
                  value={linesV[i].description}
                  placeholder={linesDescription.placeholder}
                  error={errors?.lines?.i?.description && touched?.lines?.i?.description}
                />
              </Grid>


              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      type={linesPrice.type}
                      label={linesPrice.label}
                      name={`lines.${i}.price`}
                      value={linesV[i].price}
                      placeholder={linesPrice.placeholder}
                      error={errors?.lines?.i?.price && touched?.lines?.i?.price}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      type={linesQuality.type}
                      label={linesQuality.label}
                      name={`lines.${i}.qty`}
                      value={linesV[i].qty}
                      placeholder={linesQuality.placeholder}
                      error={errors?.lines?.i?.qty && touched?.lines?.i?.qty}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Fragment>
          ))}

          {/* TODO Lines */}

        </Grid>
      </SuiBox>
    </Card>
  )
}

export default EstimateForm