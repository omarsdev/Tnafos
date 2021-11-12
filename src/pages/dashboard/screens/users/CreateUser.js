import React, { useState } from "react";
import { Heading, Box, Checkbox, Button, HStack, Text } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { createNewUser } from "../../../../utils";
import { FormInput } from "../../../../components";

export const CreateUser = () => {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone_number: "",
  });

  const [check, setCheck] = useState(false);
  // const [errors, setErros] = useState(null);

  const history = useHistory();

  const addUser = async (e) => {
    e.preventDefault();
    const RESP = await createNewUser(input);
    console.log(RESP);
    if (RESP.success) {
      history.push("/dashboard/user");
    } else {
      // setErrors(RESP.errors);
      console.log("errors", errors);
    }
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
      h="2xl"
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
      <form onSubmit={(ev) => addUser(ev)}>
        <label className="w-32 text-right">
          First Name :
          <FormInput
            name="first_name"
            value={input.first_name}
            inputType="text"
          />
        </label>

        <label className="w-32 text-right">
          Last Name:
          <FormInput
            name="last_name"
            value={input.last_name}
            inputType="text"
          />
        </label>

        <label className="w-32 text-right">
          Phone Number:
          <FormInput
            name="phone_number"
            value={input.phone_number}
            inputType="number"
          />
        </label>

        <label className="w-32 text-right">
          Email:
          <FormInput
            type="email"
            name="email"
            value={input.email}
            inputType="text"
          />
        </label>

        <label className="w-32 text-right">
          Password:
          <FormInput
            name="password"
            value={input.password}
            inputType="password"
          />
        </label>

        <label className="w-32 text-right">
          Confirm Password:
          <FormInput
            name="password_confirmation"
            value={input.password_confirmation}
            inputType="password"
          />
        </label>

        <Box className="flex flex-col items-center gap-2">
          <Heading fontSize="md" color="gray.500" fontWeight="normal">
            Terms and Conditions agreement
          </Heading>
          <Checkbox
            size="sm"
            colorScheme="blue"
            onChange={(e) => {
              setCheck(e.target.checked);
            }}
          >
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
          <Checkbox
            onChange={(e) => {
              setCheck(e.target.checked);
            }}
          >
            I confirm that the information given in this form is true, complete
            and accurate.
          </Checkbox>
          <HStack spacing="10px">
            <Button colorScheme="blue" size="sm">
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
