import React, { useContext, useState } from "react";

import {
  Flex,
  Spacer,
  HStack,
  Image,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

import { SecondaryButton, PrimaryButton } from "../../../components";
import { UserDataContext } from "../../../context";
import { removeUserSession } from "../../../utils";

const UserProfile = {};

export const Navbar = () => {
  const history = useHistory();

  const { dataProviderValue } = useContext(UserDataContext);
  const { userData, setUserData } = dataProviderValue;

  const handleLogOut = () => {
    removeUserSession();
    setUserData(null);
    history.go(0);
  };

  return (
    <Flex mx={10} my={4} h={"8vh"}>
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
          <HStack>
            <Avatar
              name={`${userData.first_name} ${userData.last_name}`}
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="User Profile Photo"
              borderRadius="full"
              size="md"
            />
            <Text>
              {userData.first_name} {userData.last_name}
            </Text>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<FaChevronDown />}
                bg="transparent"
                _hover={{
                  backgroundColor: "brand.white",
                }}
                _focus={{
                  backgroundColor: "brand.white",
                }}
              />
              <MenuList w="28">
                <Link to={`/dashboard/user/profile`}>
                  <MenuItem
                    _hover={{
                      backgroundColor: "gray-200",
                    }}
                  >
                    My Profile
                  </MenuItem>
                </Link>
                <MenuItem
                  onClick={handleLogOut}
                  _hover={{
                    backgroundColor: "gray-200",
                  }}
                >
                  Log out
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        )}
      </HStack>
    </Flex>
  );
};
