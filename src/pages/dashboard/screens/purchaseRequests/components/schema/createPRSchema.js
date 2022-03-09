import * as Yup from "yup";

export const checkout = {
  formId: "create-customer-form",
  formField: {
    date: {
      name: "date",
      label: "date",
      type: "date",
      placeholder: "eg. date",
      errorMsg: "Date is required.",
    },
    details: {
      name: "details",
      label: "details",
      type: "text",
      placeholder: "eg. details",
      errorMsg: "Details is required.",
    },
    lines: {
      name: "lines",
      label: "lines",
      type: "text",
      placeholder: "eg. lines",
      errorMsg: "Lines is required.",
    },
  }
};

const {
  formField: {
    date,
    details,
    lines,
  },
} = checkout;


export const initialValue = {
  date: "",
  details: "",
  lines: [],
}

export const validation = [
  Yup.object().shape({
    [date.name]: Yup.date().required(date.errorMsg),
    [details.name]: Yup.string().required(details.errorMsg),
    [lines.name]: Yup.array().required(lines.errorMsg),
  }),
];
