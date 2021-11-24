import {
  Heading,
  Box,
  Button,
  HStack,
  Checkbox,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { AxiosInstance } from "api/AxiosInstance";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AlertContext } from "context";
import Alert from "components/Alert";

export const CreateUser = () => {
  const [alert, setAlert] = useContext(AlertContext);

  //* form validation rules
  const validationSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters !"),
    password_confirmation: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match !"),
  });

  //* get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

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
        <Alert />;
      })
      .catch((error) => {
        setErr(error);
        console.log(error);
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
            {...register("first_name", { required: "This field is required!" })}
          />
          {errors.first_name && (
            <p className="text-red-600 font-bold">
              {errors.first_name?.message}
            </p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-sm">
          Last Name :
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("last_name", { required: "This field is required!" })}
          />
          {errors.last_name && (
            <p className="text-red-600 font-bold">
              {errors?.last_name?.message}
            </p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 ttext-sm">
          Email :
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("email", { required: "This field is required!" })}
          />
          {errors.email && (
            <p className="text-red-600 font-bold">{errors.email?.message}</p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-sm">
          Password :
          <Input
            size="sm"
            type="password"
            borderRadius="lg"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-600 font-bold">{errors.password?.message}</p>
          )}
        </label>

        <label className="ml-3 font-normal text-gray-600 text-sm">
          Password Confirmation :
          <Input
            size="sm"
            type="password"
            borderRadius="lg"
            {...register("password_confirmation")}
          />
          {errors.password_confirmation && (
            <p className="text-red-600 font-bold">
              {errors.password_confirmation?.message}
            </p>
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
          {errors.phone_number && (
            <p className="text-red-600 font-bold">
              {errors.phone_number?.message}
            </p>
          )}
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
