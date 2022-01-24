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
import { UserDataContext } from "../../../context";
import { AxiosInstance } from "../../../api";

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
      setUserData(res.data.data);
    } catch (error) {}
  };

  const getUser = async () => {
    if (!userData) {
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
    setUserData(null);
    history.push("/login");
  };

  return (
    <Box
      bg="white"
      display="flex"
      flexDirection="row-reverse"
      opacity="1"
      shadow="xl"
      w="100%"
      h="24"
    >
      <Box display="flex" justifyContent="center" alignItems="center" mr="15px">
        <HStack fontWeight="500" h="2.5rem" color="gray.700" w="6rem">
          <Text mt="auto" mb="auto">
            {userData.first_name} {userData.last_name}
          </Text>
        </HStack>
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="User Profile Photo"
          borderRadius="full"
          boxSize="70px"
          p="1"
          objectFit="cover"
        />
        <Menu isLazy closeOnSelect="true">
          <MenuButton
            px="3"
            _hover={{ color: "#AEAEAE" }}
            _focus={{
              color: "#AEAEAE",
            }}
          >
            <FaChevronDown />
          </MenuButton>
          <MenuList w="28" mt="4">
            <Link to={`${match.url}/user/profile`}>
              <MenuItem
                _hover={{
                  backgroundColor: "gray.200",
                }}
              >
                My Profile
              </MenuItem>
            </Link>
            <MenuItem
              onClick={handleLogOut}
              _hover={{
                backgroundColor: "gray.200",
              }}
            >
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
