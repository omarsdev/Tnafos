import {
  Heading,
  Box,
  Checkbox,
  Button,
  Input,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createNewUser } from "../../../../utils";

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
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const history = useHistory();

  const addUser = async (e) => {
    e.preventDefault();
    const RESP = await createNewUser(input);
    console.log(RESP);
    if (RESP.success) {
      history.push("/dashboard/user");
    } else {
      setErrors(RESP.errors);
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
          color="black"
          fontWeight="medium"
          fontSize="x-large"
          fontFamily="inhirit"
          alignItems="baseline"
        >
          Add new User
        </Heading>
      </Box>
      <form on onSubmit={(ev) => addUser(ev)}>
        <label className="w-32 text-right">
          First Name :
          <Input
            size="sm"
            borderRadius="lg"
            type="text"
            name="first_name"
            required
            onChange={(ev) => handleChange(ev)}
            autoComplete="off"
            autoFocus="off"
          />
        </label>

        <label className="w-32 text-right">
          Last Name:
          <Input
            size="sm"
            borderRadius="lg"
            type="text"
            name="last_name"
            value={input.last_name}
            required
            onChange={(ev) => handleChange(ev)}
            autoComplete="off"
            autoFocus="off"
          />
        </label>

        <label className="w-32 text-right">
          Phone Number:
          <Input
            size="sm"
            borderRadius="lg"
            type="text"
            name="phone_number"
            value={input.phone_number}
            required
            onChange={(ev) => handleChange(ev)}
            autoComplete="off"
          />
        </label>

        <label className="w-32 text-right">
          Email:
          <Input
            size="sm"
            borderRadius="lg"
            type="email"
            name="email"
            value={input.email}
            required
            onChange={(ev) => handleChange(ev)}
            autoComplete="off"
            placeholder="info@company.com"
            onFocus="off"
            _autofill="off"
          />
        </label>

        <label className="w-32 text-right">
          Password:
          <Input
            size="sm"
            borderRadius="lg"
            type="password"
            name="password"
            value={input.password}
            required
            onChange={(ev) => handleChange(ev)}
            autoComplete="off"
          />
        </label>

        <label className="w-32 text-right">
          Confirm Password:
          <Input
            size="sm"
            borderRadius="lg"
            type="password"
            name="password_confirmation"
            value={input.password_confirmation}
            required
            onChange={(ev) => handleChange(ev)}
            autoComplete="off"
            onFocus="off"
            _autofill="off"
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
            <Button colorScheme="gray" size="sm" onClick={handleCancel}>
              CANCEL
            </Button>
          </HStack>
        </Box>
      </form>
    </Box>
  );
};
