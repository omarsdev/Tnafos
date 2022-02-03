import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useRouteMatch, Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { removeUserSession } from "../../../utils";
import { useHistory } from "react-router-dom";
import { UserDataContext } from "../../../context";
import { AxiosInstance } from "../../../api";

export const Navbar = ({ handleToggle }) => {
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
    <Flex
      bg="brand.white"
      shadow="xl"
      opacity="100"
      w="full"
      h="20"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        ml="14px"
        p="1rem"
        onClick={handleToggle}
        cursor="pointer"
        display={{ base: "block", md: "none" }}
      >
        <AiOutlineMenu size="25px" />
      </Box>
      <Box
        h="100%"
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="end"
        mr="15px"
        w="100%"
      >
        <Text
          fontSize={{ base: "small", lg: "md" }}
          textColor="gray.700"
          fontWeight="medium"
          mr="1rem"
        >
          {userData.first_name} {userData.last_name}
        </Text>

        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="User Profile Photo"
          borderRadius="full"
          boxSize={{ base: 16, md: 16, lg: 20 }}
          p={{ base: 1, sm: 1, md: 1, lg: 2 }}
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
            <Box fontSize={{ base: 16, md: 16, lg: 20 }}>
              <FaChevronDown />
            </Box>
          </MenuButton>
          <Box fontSize={{ base: 6, sm: 8, md: 16, lg: 20 }}>
            <MenuList mt="4" w="fit-content">
              <Link to={`${match.url}/user/profile`}>
                <MenuItem _hover={{ bg: "gray.200" }}>My Profile</MenuItem>
              </Link>
              <MenuItem onClick={handleLogOut} _hover={{ bg: "gray.200" }}>
                Log out
              </MenuItem>
            </MenuList>
          </Box>
        </Menu>
      </Box>
    </Flex>
  );
};
