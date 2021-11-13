import React, { useContext, useState } from "react";

import { Flex, Spacer, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { SecondaryButton, PrimaryButton } from "components";
import { UserDataContext } from "context";

export const Navbar = () => {
  const { dataProviderValue } = useContext(UserDataContext);
  const { userData } = dataProviderValue;

  return (
    <Flex mx={10} py={5} h={"8vh"}>
      <Spacer />
      <HStack spacing={5}>
        {!userData ? (
          <Link to="/register">
            <SecondaryButton name="Register" />
          </Link>
        ) : (
          <Link to="/dashboard">
            <PrimaryButton name="Dashboard" />
          </Link>
        )}

        {!userData ? (
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
