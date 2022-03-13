import * as Yup from "yup";

export const checkout = {
  formId: "create-customer-form",
  formField: {
    name: {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "eg. Facebook",
      errorMsg: "Name is required.",
    },
  }
};

const {
  formField: {
    name
  },
} = checkout;


export const initialValue = {
  name: "",
}

export const initialValueUpdate = () => {
  return "";
}

export const validation = [
  Yup.object().shape({
    [name.name]: Yup.string().required(name.errorMsg),
  }),
];
