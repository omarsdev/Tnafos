// import React from "react";
// import { CustomAddForm } from "../../components";
// // import {
// //   Heading,
// //   Box,
// //   HStack,
// //   Flex,
// //   Text,
// //   Spacer,
// //   Center,
// //   Stack,
// // } from "@chakra-ui/react";
// // import { Link, useHistory } from "react-router-dom";

// // import { AxiosInstance } from "api/AxiosInstance";
// // import { CheckBox } from "components";

// // import { useForm } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import * as yup from "yup";

// // import { AlertContext } from "context";

// // import {
// //   RegularInput,
// //   PrimaryButton,
// //   PasswordInput,
// //   SecondaryButton,
// //   RegularInputControl,
// //   PasswordInputControl,
// // } from "components";

// // //* form validation rules
// // const validationSchema = yup.object({
// //   password: yup
// //     .string()
// //     .required("Password is required")
// //     .min(8, "Password must be at least 8 characters !"),
// //   .matches(RegExp("(.*[a-z].*)"), "Lowercase")
// //   .matches(RegExp("(.*[A-Z].*)"), "at least one Uppercase character")
// //   .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "Special")
// //   .matches(RegExp("(.*\\d.*)"), "Number"),

// //   password_confirmation: yup
// //     .string()
// //     .required("Confirm Password is required !")
// //     .oneOf([yup.ref("password")], "Passwords must match !"),

// //   first_name: yup.string().required("first name is required!"),
// //   last_name: yup.string().required("last name is required!"),
// //   email: yup.string().email().required("Email is required!"),
// //   phone_number: yup
// //     .number()
// //     .min(10, "Invalid phone number, minium 10 numbers! ")
// //     .required("Phone number is required!"),
// // });
// export const CreateUser = () => {
//   // const { alertProviderValue } = useContext(AlertContext);
//   // const { setAlert } = alertProviderValue;

//   // const history = useHistory();
//   // const [err, setErr] = useState(null);
//   // const [isUpdating, setIsUpdating] = useState(false);

//   // //* for checkboxes:
//   // const [checked, setChecked] = useState(false);
//   // const [ch, setCh] = useState(false);

//   // const [selectedFile, setSelectedFile] = useState(null);
//   // const [photo, setPhoto] = useState(null);
//   // let inputRef = useRef(null);

//   //* get functions to build form with useForm() hook

//   // const { register, handleSubmit, control } = useForm({
//   //   resolver: yupResolver(validationSchema),
//   // });

//   //* select photo for upload function:
//   // const handleFileInput = (e) => {
//   //   setPhoto(e.target.files[0]);
//   // };

//   //* photoUpload function:
//   const photoUploadHandler = async () => {
//     //   const formData = new FormData();
//     // formData.append("name", name);
//     // formData.append("file", selectedFile);
//     // console.log("Works");
//     // inputRef.current.onChange((e) => fileSelectHandler(e));
//     // if (fileSelectHandler) {
//     //   await AxiosInstance.post("/api/dashboard/media/store", photo)
//     //     .then((res) => {
//     //       console.log(res.data);
//     //       setAlert({
//     //         message: "photo has been uploaded",
//     //         type: "info",
//     //       });
//     //     })
//     //     .catch((error) => {
//     //       console.log(error.response.data);
//     //     });
//     // }
//   };

//   //* onSubmit function:
//   // const addUser = useCallback(async (userData) => {
//   //   setIsUpdating(true);
//   //   await AxiosInstance.post("/api/dashboard/user/create", userData)
//   //     .then((res) => {
//   //       console.log(res.data.data);
//   //       setIsUpdating(false);
//   //       setAlert({
//   //         message: `New user has been added!`,
//   //         type: "success",
//   //       });
//   //       history.push("/dashboard/user");
//   //     })
//   //     .catch((error) => {
//   //       setIsUpdating(false);
//   //       setErr(error.response.data.errors);
//   //       console.log(error.response.data.errors);
//   //       setAlert({
//   //         message: `${error?.response?.data?.errors}`,
//   //         type: "error",
//   //       });
//   //     });
//   // }, []);

//   // const handleCancel = () => {
//   //   history.push("/dashboard/user");
//   // };

//   return (
//     <CustomAddForm
//       component={"user"}
//       inputName={[
//         "First Name",
//         "Last Name",
//         "Phone Number",
//         "E-mail",
//         "Password",
//         "Password Confirmation",
//         "Country Code",
//       ]}
//       fieldName={[
//         "first_name",
//         "last_name",
//         "phone_number",
//         "email",
//         "password",
//         "password_confirmation",
//         "country_code",
//       ]}
//     />
//   );
// };
