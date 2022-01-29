import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
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
      flex
      // flexDirection="row-reverse"
      shadow="xl"
      opacity="100"
      w="full"
      // className="flex flex-row-reverse opacity-100 shadow-xl w-full"
      h="20"
    >
      <Box
        // alignItems="center"
        // placeItems="center"
        // flex
        // flexDirection="row"
        // justify="start"
        className="css-0 flex flex-row items-center justify-end"
        mr="15px"
      >
        <HStack
          // className="font-medium h-10 justify-center text-gray-700 text-md w-24"
          fontSize={{ base: "xx-small", sm: "xx-small", md: "small", lg: "md" }}
          textColor="gray.700"
          justify="center"
          fontWeight="medium"
          h={{ base: 2, sm: 4, md: 6, lg: 8 }}
          w={{ base: 12, sm: 16, md: 20, lg: 24 }}
        >
          <span my="auto">
            {userData.first_name} {userData.last_name}
          </span>
        </HStack>
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="User Profile Photo"
          borderRadius="full"
          boxSize={{ base: 6, sm: 8, md: 16, lg: 20 }}
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
            <Box fontSize={{ base: 8, sm: 8, md: 16, lg: 20 }}>
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
    </Box>
  );
};
