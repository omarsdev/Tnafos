import * as Yup from "yup";

export const checkout = {
  formId: "create-customer-form",
  formField: {
    first_name: {
      name: "first_name",
      label: "first name",
      type: "text",
      placeholder: "eg. Ali",
      errorMsg: "First name is required.",
    },
    last_name: {
      name: "last_name",
      label: "last name",
      type: "text",
      placeholder: "eg. Jawish",
      errorMsg: "Last name is required.",
    },
    position: {
      name: "position",
      label: "position",
      type: "text",
      placeholder: "eg. CTO",
      errorMsg: "Position is required."
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
      placeholder: "eg. 507820331",
      errorMsg: "Phone number is required."
    },
    is_primary: {
      name: "is_primary",
      label: "Is primary",
      type: "text",
      placeholder: "eg. SAR",
      errorMsg: "is_primary is required.",
    },
    country_code: {
      name: "language",
      label: "language",
      type: "text",
      placeholder: "eg. AR",
      errorMsg: "Language is required.",
    }
  }
};

const {
  formField: {
    first_name,
    last_name,
    position,
    email,
    phone_number,
    is_primary,
    country_code,
  },
} = checkout;


export const initialValue = {
  first_name: "",
  last_name: "",
  position: "",
  email: "",
  phone_number: "",
  is_primary: false,
  country_code: "",
}

export const validation = [
  Yup.object().shape({
    [first_name.name]: Yup.string().required(first_name.errorMsg),
    [last_name.name]: Yup.string().required(last_name.errorMsg),
    [position.name]: Yup.string().required(position.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
    [phone_number.name]: Yup.string().required(phone_number.errorMsg),
    [is_primary.name]: Yup.bool().required(is_primary.errorMsg),
    // [country_code.name]: Yup.string().required(country_code.errorMsg),
  }),
];
