import React from "react";

import * as Yup from "yup";

export const checkout = {
  formId: "addservice-form",
  formField: {
    name: {
      name: "name",
      label: "name of service",
      type: "text",
      placeholder: "service name",
      errorMsg: "name of service is required.",
    },
    description: {
      name: "description",
      label: "description",
      type: "text",
      placeholder: "enter description of service",
      errorMsg: "description is required.",
    },
    price: {
      name: "price",
      label: "price",
      type: "text",
      placeholder: "$150",
      errorMsg: "price is required.",
      invalidMsg: "price is invalid",
    },
    type: {
      name: "type",
      label: "type",
      type: "text",
      placeholder: "enter type of service",
      errorMsg: "type is required.",
      invalidMsg: "type is invalid",
    },
    categoru_id: {
      name: "categoru_id",
      label: "Category",
      type: "text",
      errorMsg: "Category is required.",
      invalidMsg: "category doesn't match.",
    },
  },
};

const {
  formField: { name, description, price, type, categoru_id },
} = checkout;

export const initialValue = {
  [name.name]: "",
  [description.name]: "",
  [type.name]: "",
  [price.name]: "",
  [category_id.name]: "",
};

export const validation = [
  Yup.object().shape({
    [name.name]: Yup.string().required(name.errorMsg),
    [description.name]: Yup.string().required(description.errorMsg),
    [type.name]: Yup.string().required(type.errorMsg),
    [price.name]: Yup.string().required(price.errorMsg).price(price.invalidMsg),
  }),
];
