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

import * as Yup from "yup";
import checkout from "layouts/pages/users/new-user/schemas/form";

const {
  formField: {
    firstName,
    lastName,
    company,
    email,
    phoneNumber,
    countryCode,
    password,
    confirmPassword,
  },
} = checkout;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(firstName.errorMsg),
    [lastName.name]: Yup.string().required(lastName.errorMsg),
    [company.name]: Yup.string().required(lastName.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
    [phoneNumber.name]: Yup.string()
      .required(phoneNumber.errorMsg)
      .length(phoneNumber.invalidMsg),
    [password.name]: Yup.string()
      .required(password.errorMsg)
      .min(8, password.invalidMsg),
    [password.name]: Yup.string()
      .required(password.errorMsg)
      .min(8, password.invalidMsg),
    [confirmPassword.name]: Yup.string()
      .required(confirmPassword.errorMsg)
      .oneOf([Yup.ref("password"), null], confirmPassword.invalidMsg),
  }),
];
