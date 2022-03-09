import React from "react";

import * as Yup from "yup";

export const checkout = {
  formId: "update-user-form",
  formField: {
    first_name: {
      name: "first_name",
      label: "first name",
      type: "text",
      placeholder: "eg. Micheal",
      errorMsg: "First name is required.",
    },
    last_name: {
      name: "last_name",
      label: "last name",
      type: "text",
      placeholder: "eg. Prior",
      errorMsg: "Last name is required.",
    },
    email: {
      name: "email",
      label: "email",
      type: "text",
      placeholder: "eg. admin@tnafos.com",
      errorMsg: "Email address is required.",
      invalidMsg: "Your email address is invalid",
    },
    phone_number: {
      name: "phone_number",
      label: "Phone number",
      type: "text",
      placeholder: "eg. +962797261632",
      errorMsg: "Phone Number is required.",
      invalidMsg: "Your phone number is invalid",
    },
    password: {
      name: "password",
      label: "password",
      type: "password",
      placeholder: "******",
      errorMsg: "Password is required.",
      invalidMsg: "Your password should be more than 6 characters.",
    },
    password_confirmation: {
      name: "password_confirmation",
      label: "repeat password",
      type: "password",
      placeholder: "******",
      errorMsg: "Password is required.",
      invalidMsg: "Your password doesn't match.",
    },
  },
};

const {
  formField: {
    first_name,
    last_name,
    email,
    phone_number,
    password,
    password_confirmation,
  },
} = checkout;


export const initialValue = (user) => {
  const init = {};
  for (const key in user) {
    if (typeof (user[key]) === "string") {
      init[key] = user[key];
    }
  }
  init.country_code = {
    value: "",
    label: ""
  }
  return init
}

export const validation = [
  Yup.object().shape({
    [first_name.name]: Yup.string().required(first_name.errorMsg),
    [last_name.name]: Yup.string().required(last_name.errorMsg),
    [phone_number.name]: Yup.string().required(phone_number.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
    [password.name]: Yup.string()
      .min(8, password.invalidMsg),
    [password_confirmation.name]: Yup.string()
      .oneOf([Yup.ref("password"), null], password_confirmation.invalidMsg),
  }),
];
