import React from "react";

import { Flex, Spacer, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { SecondaryButton, PrimaryButton } from "components";

export const Navbar = () => {
  const userToken = false;

  return (
    <Flex mx={10} py={5} h={"8vh"}>
      <Spacer />
      <HStack spacing={5}>
        {userToken ? (
          <Link to="/register">
            <SecondaryButton name="Register" />
          </Link>
        ) : (
          <Link to="/dashboard">
            <PrimaryButton name="Dashboard" />
          </Link>
        )}

        {userToken ? (
          <Link to="/login">
            <PrimaryButton name="Login" />
          </Link>
        ) : (
          // TODO
          <h1>Drop Down</h1>
        )}
      </HStack>
    </Flex>
  );
};
