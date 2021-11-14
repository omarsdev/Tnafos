import {
  Heading,
  Box,
  Button,
  HStack,
  Checkbox,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { AxiosInstance } from "../../../../utils";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

export const CreateUser = () => {
  //* form validation rules
  // const validationSchema = Yup.object().shape({
  //   password: Yup.string()
  //     .required("Password is required")
  //     .min(8, "Password must be at least 8 characters !"),
  //   confirmPassword: Yup.string()
  //     .required("Confirm Password is required")
  //     .oneOf([Yup.ref("password")], "Passwords must match !"),
  // });
  // const formOptions = { resolver: yupResolver(validationSchema) };

  //* get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const history = useHistory();

  // const [check, setCheck] = useState(false);
  const [err, setErr] = useState(null);

  //* onSubmit function:
  const addUser = async (userData) => {
    // console.log(userData);
    await AxiosInstance.post("/api/dashboard/user/create", userData)
      .then((res) => {
        console.log(res);
        history.push("/dashboard/user");
      })
      .catch((err) => {
        setErr(err.response.data);
        console.log(err.response.data);
      });
  };

  const handleCancel = () => {
    history.push("/dashboard/user");
  };

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      borderWidth="1px"
      w="2xl"
      px="15"
      pt="5"
      h="6xl"
    >
      <Box>
        <Heading
          color="yellow.500"
          fontWeight="medium"
          fontSize="x-large"
          fontFamily="inhirit"
          alignItems="baseline"
        >
          Add new User
        </Heading>
      </Box>
      <form onSubmit={handleSubmit(addUser)}>
        <label className="ml-3 font-normal text-gray-600 text-sm">
          First Name :
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            errorBorderColor="red"
            {...register("first_name", { required: "This field is required!" })}
          />
          {err?.errors?.first_name && (
            <p className="text-red-700">{err?.errors?.first_name}</p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-sm">
          Last Name :
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            errorBorderColor="red"
            {...register("last_name", { required: "This field is required!" })}
          />
          {err?.errors?.last_name && (
            <p className="text-red-700">{err?.errors?.last_name}</p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 ttext-sm">
          Email :
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            errorBorderColor="red"
            {...register("email", { required: "This field is required!" })}
          />
          {err?.errors?.email &&
            err?.errors?.email.map((e) => <p className="text-red-700">{e}</p>)}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-sm">
          Password :
          <Input
            size="sm"
            type="password"
            borderRadius="lg"
            {...register("password", { required: "This field is required!" })}
            // className={`form-control ${
            //   err?.errors?.password ? "is-invalid" : ""
            // }`}
          />
          {err?.errors?.password && (
            <p className="text-red-700">{err?.errors?.password}</p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-sm">
          Password Confirmation :
          <Input
            size="sm"
            type="password"
            borderRadius="lg"
            {...register("password_confirmation", {
              required: "This field is required!",
            })}
            // className={`form-control ${
            //   err?.errors?.confirmPassword ? "is-invalid" : ""
            // }`}
          />
          {err?.errors?.password_confirmation && (
            <p className="text-red-700">{err?.errors?.password_confirmation}</p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-sm">
          Phone Number:
          <Input
            size="sm"
            type="number"
            borderRadius="lg"
            {...register("phone_number", {
              required: "This field is required!",
              length: { value: 10, message: "Invalid phone number !" },
            })}
          />
          {err?.errors?.phone_number &&
            err?.errors?.phone_number.map((e) => (
              <p className="text-red-700">{e}</p>
            ))}
        </label>

        <Box className="flex flex-col items-center gap-2">
          <Heading fontSize="md" color="gray.500" fontWeight="normal">
            Terms and Conditions agreement
          </Heading>
          <Checkbox size="sm" colorScheme="blue">
            I agree to Tnafos
          </Checkbox>
          <HStack>
            <Link to="#" className="text-blue-700 hover:underline">
              <Text>terms of service</Text>
            </Link>{" "}
            <Text>and</Text>
            <Link className="text-blue-700 hover:underline">
              Privacy policy
            </Link>
          </HStack>
          <Box>
            <Heading fontSize="md" color="gray.500" fontWeight="normal">
              Decleration of Valid Information
            </Heading>
          </Box>
          <Checkbox>
            I confirm that the information given in this form is true, complete
            and accurate.
          </Checkbox>
          <HStack spacing="10px">
            <Button colorScheme="blue" size="sm" type="submit">
              SAVE
            </Button>
            <Button colorScheme="blackAlpha" size="sm" onClick={handleCancel}>
              CANCEL
            </Button>
          </HStack>
        </Box>
      </form>
    </Box>
  );
};
