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

export default {
  formId: "new-user-form",
  formField: {
    firstName: {
      name: "first_name",
      label: "first name",
      type: "text",
      placeholder: "eg. Micheal",
      errorMsg: "First name is required.",
    },
    lastName: {
      name: "last_name",
      label: "last name",
      type: "text",
      placeholder: "eg. Prior",
      errorMsg: "Last name is required.",
    },
    company: {
      name: "company",
      label: "company",
      type: "text",
      placeholder: "eg. Creative Tim",
    },
    email: {
      name: "email",
      label: "email address",
      type: "email",
      placeholder: "eg. soft@dashboard.come",
      errorMsg: "Email address is required.",
      invalidMsg: "Your email address is invalid",
    },
    phoneNumber: {
      name: "phone_number",
      label: "phone_number",
      type: "text",
      placeholder: "0665563423",
      errorMsg: "phone number is required.",
      invalidMsg: "Your phone number is invalid",
    },
    countryCode: {
      name: "country_code",
      label: "country code",
      type: "text",
      placeholder: "Select Country Code : ex SA",
      errorMsg: "country code is required.",
      invalidMsg: "Your country code address is invalid",
    },
    password: {
      name: "password",
      label: "password",
      type: "password",
      placeholder: "********",
      errorMsg: "Password is required.",
      invalidMsg: "Your password should be more than 8 characters.",
    },
    confirmPassword: {
      name: "password_confirmation",
      label: "password confirmation",
      type: "password",
      placeholder: "********",
      errorMsg: "Password is required.",
      invalidMsg: "Your password doesn't match.",
    },
  },
};
