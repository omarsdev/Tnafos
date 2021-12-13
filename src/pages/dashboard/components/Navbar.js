import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useRouteMatch, Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { removeUserSession } from "../../../utils";
import { useHistory } from "react-router-dom";
import { UserDataContext } from "context";
import { AxiosInstance } from "api";

export const Navbar = () => {
  const { tokenProviderValue, dataProviderValue } = useContext(UserDataContext);
  const { userData, setUserData } = dataProviderValue;
  const { userToken } = tokenProviderValue;

  const match = useRouteMatch();
  const history = useHistory();

  const fetchTokenMe = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/user/my-profile", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      //* save user. info in the context provider which will be invoked later in Home page
      setUserData(res.data.data);
    } catch (error) {}
  };

  const getUser = async () => {
    if (!userData) {
      //* grab token wether from local storage or context
      let token = localStorage.getItem("token") || userToken;
      if (token) {
        fetchTokenMe();
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogOut = () => {
    removeUserSession();
    history.push("/login");
  };

  return (
    <Box
      bg="white"
      className="flex flex-row-reverse opacity-100 shadow-xl w-full"
      h="24"
    >
      <Box
        className="css-0 flex flex-row items-center justify-center"
        mr="15px"
      >
        <HStack className="font-medium h-10 justify-center text-gray-700 text-md w-24">
          <span className="my-auto ">
            {userData.first_name} {userData.last_name}
          </span>
          {/* <Text>User name</Text> */}
        </HStack>
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="User Profile Photo"
          borderRadius="full"
          boxSize="70px"
          p="1"
          objectFit="cover"
        />
        <Menu isLazy>
          <MenuButton px="3">
            <FaChevronDown />
          </MenuButton>
          <MenuList w="28">
            <Link to={`${match.url}/user/profile`}>
              <MenuItem className="hover:bg-gray-200">My Profile</MenuItem>
            </Link>
            <MenuItem onClick={handleLogOut} className="hover:bg-gray-200">
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
