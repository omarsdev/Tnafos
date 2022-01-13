import React, { useState, useContext, useRef, useEffect } from "react";
import {
  Heading,
  Box,
  HStack,
  Flex,
  Text,
  Spacer,
  Center,
  Spinner,
} from "@chakra-ui/react";
import {
  Link,
  useHistory,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { CustomAddForm } from "../../components";

import { AlertContext } from "../../../../context";
import {
  PrimaryButton,
  SecondaryButton,
  CheckBox,
} from "../../../../components";
import { AxiosInstance } from "../../../../api";

const CreateUser = () => {
  const validationSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters !"),

    password_confirmation: yup
      .string()
      .required("Confirm Password is required !")
      .oneOf([yup.ref("password")], "Passwords must match !"),

    first_name: yup.string().required("first name is required!"),
    last_name: yup.string().required("last name is required!"),
    email: yup.string().email().required("Email is required!"),
    phone_number: yup
      .number()
      .min(10, "Invalid phone number, minium 10 numbers! ")
      .required("Phone number is required!"),
  });

  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const history = useHistory();

  const [list, setList] = useState([]);
  const match = useRouteMatch();

  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const [checked, setChecked] = useState(false);
  const [ch, setCh] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [photo, setPhoto] = useState(null);
  let inputRef = useRef(null);

  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFileInput = (e) => {
    setPhoto(e.target.files[0]);
  };

  // * onSubmit function:
  const addUser = async (userData) => {
    // console.log(userData);
    setIsUpdating(true);
    await AxiosInstance.post("/api/dashboard/user/create", userData)
      .then((res) => {
        setAlert({
          message: `New user has been added!`,
          type: "success",
        });
        history.push("/dashboard/user");
      })
      .catch((error) => {
        console.log(error.response.data);
        setErr(error.response.data.errors);
        setAlert({
          message: `${error.response.data.message}`,
          type: "error",
        });
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  const handleCancel = () => {
    history.push("/dashboard/user");
  };

  const getAllCountry = async () => {
    await AxiosInstance.get("/api/country")
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getAllCountry();
  }, []);

  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        {list ? (
          <Box overflowY="scroll" w="full">
            <Box
              px="20"
              mt="6"
              boxShadow="2xl"
              rounded="3xl"
              w="750px"
              ml="40"
              bg="white"
            >
              <Heading
                color="#F8B916"
                fontSize="3xl"
                fontWeight="lg"
                alignItems="baseline"
                pt="4"
              >
                Add user
              </Heading>

              <Flex w="full" pl="5" mt="16">
                <input
                  type="file"
                  onChange={(ev) => handleFileInput(ev)}
                  ref={inputRef}
                />
                <Spacer />
                <SecondaryButton
                  // onClick={photoUploadHandler}
                  name="Upload photo"
                />
              </Flex>
              <Center>
                <form>
                  <CustomAddForm
                    listForm={[
                      {
                        head: "First name : ",
                        placeHolder: "Enter first name : ",
                        name: "first_name",
                        err: err,
                      },
                      {
                        head: "Last name : ",
                        placeHolder: "Enter last name : ",
                        name: "last_name",
                        err: err,
                      },
                      {
                        head: "Email : ",
                        placeHolder: "Enter email : ",
                        name: "email",
                        err: err,
                      },
                      {
                        head: "Password : ",
                        placeHolder: "Enter password : ",
                        name: "password",
                        err: err,
                        isPassword: true,
                      },
                      {
                        head: "Confirm Password : ",
                        placeHolder: "confirm your password",
                        name: "password_confirmation",
                        err: err,
                        isPassword: true,
                      },
                      {
                        head: "Phone Number : ",
                        placeHolder: "enter phone number",
                        name: "phone_number",
                        err: err,
                      },
                      {
                        head: "Country Code : ",
                        placeHolder: "Select Country Code : ex SA",
                        name: "country_code",
                        err: err,
                        isSelect: true,
                        optionList: countryList,
                        value: "short_name",
                        key: "uuid",
                        displayValue: "short_name",
                      },
                    ]}
                    control={control}
                    register={register}
                  />

                  <Box className="flex flex-col items-center gap-2 mt-10">
                    <Heading fontSize="xl" color="grey" fontWeight="normal">
                      Terms and Conditions agreement
                    </Heading>
                    <CheckBox
                      name="I agree to Tnafos"
                      value={checked}
                      setValue={setChecked}
                    />

                    <HStack>
                      <Link to="/" className="hover:underline text-CInfo">
                        <Text>terms of service</Text>
                      </Link>{" "}
                      <Text>and</Text>
                      <Link to="/" className="hover:underline text-CInfo">
                        <Text>Privacy policy</Text>
                      </Link>
                    </HStack>
                    <Box>
                      <Heading fontSize="xl" color="grey" fontWeight="normal">
                        Decleration of Valid Information
                      </Heading>
                    </Box>
                    <CheckBox
                      name="I confirm that the information given in this form is true,
            complete and accurate."
                      value={ch}
                      setValue={setCh}
                    />

                    <HStack spacing="10px" py="5">
                      <PrimaryButton
                        name="SAVE"
                        onClick={handleSubmit(addUser)}
                        loadingButton={isUpdating}
                      />

                      <SecondaryButton onClick={handleCancel} name="CANCEL" />
                    </HStack>
                  </Box>
                </form>
              </Center>
            </Box>
          </Box>
        ) : (
          <Center h="100vh" w="100%">
            <Spinner size="xl" color="#F8B916" />
          </Center>
        )}
      </Route>
    </Switch>
  );
};

export default CreateUser;
