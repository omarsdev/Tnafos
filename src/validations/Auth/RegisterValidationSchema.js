import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().required("Email name is required"),
  phone_number: Yup.number("mobile number not contains numbers")
    .integer("mobile number cannot be negative")
    .required("Mobile number is required")
    .nullable("mobile number must not have a empty value"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  password_confirmation: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
