import * as Yup from "yup";

export const checkout = {
  formId: "create-customer-form",
  formField: {
    subject: {
      name: "subject",
      label: "subject",
      type: "text",
      placeholder: "eg. subject",
      errorMsg: "Subject is required.",
    },
    status: {
      name: "status",
      label: "status",
      type: "text",
      placeholder: "eg. accepting",
      errorMsg: "Status is required.",
    },
    date: {
      name: "date",
      label: "date",
      type: "date",
      placeholder: "eg. 12-8-2021",
      errorMsg: "Date is required.",
    },
    valid_till: {
      name: "valid_till",
      label: "Valid till",
      type: "date",
      placeholder: "eg. 25-8-2021",
      errorMsg: "Date is required.",
    },
    currency: {
      name: "currency",
      label: "currency",
      type: "text",
      placeholder: "eg. SAR",
      errorMsg: "Currency is required.",
    },
    customer_id: {
      name: "customer_id",
      label: "customer",
      type: "text",
      placeholder: "eg. customer",
      errorMsg: "Customer is required.",
    },
    assigned_to: {
      name: "assigned_to",
      label: "assigned",
      type: "text",
      placeholder: "eg. assigned to",
      errorMsg: "Assigned to is required.",
    },
    discount_type: {
      name: "discount_type",
      label: "discount_type",
      type: "text",
      placeholder: "eg. 1",
      errorMsg: "Discount type to is required.",
    },
    discount_amount: {
      name: "discount_amount",
      label: "discount_amount",
      type: "text",
      placeholder: "eg. 20",
      errorMsg: "Discount amount to is required.",
    },
    subtotal: {
      name: "subtotal",
      label: "subtotal",
      type: "text",
      placeholder: "eg. 15000",
      errorMsg: "Subtotal to is required.",
    },
    total: {
      name: "total",
      label: "total",
      type: "text",
      placeholder: "eg. 15000",
      errorMsg: "Total to is required.",
    },
    lines: {
      name: "lines",
      label: "lines",
      type: "text",
      placeholder: "eg. lines",
      errorMsg: "Lines is required.",
    },
    linesTitle: {
      name: "title",
      label: "Service title",
      type: "text",
      placeholder: "eg. React Native",
      errorMsg: "Service title is required.",
    },
    linesDescription: {
      name: "description",
      label: "Service description",
      type: "text",
      placeholder: "eg. Description of your service",
      errorMsg: "Service description is required.",
    },
    linesPrice: {
      name: "price",
      label: "Service price",
      type: "number",
      placeholder: "eg. price of your service",
      errorMsg: "Service price is required.",
    },
    linesQuality: {
      name: "qty",
      label: "Service quality",
      type: "number",
      placeholder: "eg. quality number of your service",
      errorMsg: "Service quality is required.",
    },
  }
};

const {
  formField: {
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
  },
} = checkout;


export const initialValue = {
  subject: "",
  status: "",
  date: "",
  valid_till: "",
  currency: "",
  customer_id: "",
  assigned_to: "",
  discount_type: "",
  discount_amount: "",
  subtotal: "",
  total: "",
  lines: [],
}

export const validation = [
  Yup.object().shape({
    [subject.name]: Yup.string().required(subject.errorMsg),
    [status.name]: Yup.object().required(status.errorMsg),
    [date.name]: Yup.date().required(date.errorMsg),
    [valid_till.name]: Yup.date().required(valid_till.errorMsg),
    [currency.name]: Yup.string().required(currency.errorMsg),
    [discount_type.name]: Yup.string().required(discount_type.errorMsg),
    [discount_amount.name]: Yup.string().required(discount_amount.errorMsg),
    [subtotal.name]: Yup.string().required(subtotal.errorMsg),
    [total.name]: Yup.string().required(total.errorMsg),
    [customer_id.name]: Yup.object().required(customer_id.errorMsg),
    [assigned_to.name]: Yup.object().required(assigned_to.errorMsg),
    [lines.name]: Yup.array().of(
      Yup.object().shape({
        title: Yup.string(),
        // .required("Service title is required."),
        description: Yup.string(),
        // .required(linesDescription.errorMsg),
        price: Yup.number(),
        // .required(linesPrice.errorMsg),
        qty: Yup.number(),
        // .required(linesQuality.errorMsg),
      })
    ).required(lines.errorMsg),

  }),
];
