import React from "react";

import * as Yup from "yup";

export const checkout = {
  formId: "create-service-form",
  formField: {
    name: {
      name: "name",
      label: "name",
      type: "text",
      placeholder: "eg. app",
      errorMsg: "Name is required.",
    },
    description: {
      name: "description",
      label: "description",
      type: "text",
      placeholder: "eg. description for your service",
      errorMsg: "Description is required.",
    },
    category_id: {
      name: "category_id",
      label: "category_id",
      type: "text",
      placeholder: "",
      errorMsg: "category is required.",
    },
    price: {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "eg. 150",
      errorMsg: "Price is required.",
    },
    type: {
      name: "type",
      label: "type",
      type: "text",
      placeholder: "",
      errorMsg: "Type is required.",
    },
  },
};

const {
  formField: {
    name,
    description,
    category_id,
    price,
    type,
  },
} = checkout;


// export const initialValue = {
//   name: "",
//   description: "",
//   category_id: "",
//   price: "",
//   type: "",
// }

export const initialValue = (service) => {
  const init = {};
  for (const key in service) {
    if (typeof (service[key]) !== "object") {
      if (key === "type")
        init[key] = { value: service[key], label: service[key] }
      else init[key] = service[key];
    } else {
      if (key === "category")
        init.category_id = {
          value: service.category.uuid,
          label: service.category.name,
        };
    }
  }
  return init
}

export const validation = [
  Yup.object().shape({
    [name.name]: Yup.string().required(name.errorMsg),
    [description.name]: Yup.string().required(description.errorMsg),
    [category_id.name]: Yup.object().required(category_id.errorMsg),
    [price.name]: Yup.string().required(price.errorMsg),
    [type.name]: Yup.object().required(type.errorMsg),
  }),
];
