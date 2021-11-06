import React from "react";
import {
  Box,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
} from "@chakra-ui/react";
import { useRouteMatch, Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export const Navbar = () => {
  const match = useRouteMatch();
  return (
    <Box
      bg="white"
      className="flex flex-row-reverse h-129.5 opacity-100 shadow-xl w-1920"
    >
      <Box className="flex flex-row items-center">
        <HStack className="font-medium h-25 justify-center my-auto text-gray-700 text-md w-81">
          {/* <span className="my-auto mr-7">
                      {userData.first_name} {userData.last_name}
                    </span> */}
        </HStack>
        <Image
          className="object-cover border rounded-full h-14 w-14 border-CPrimary css-0 rounded-ful"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="User Profile Photo"
          style={{ width: "70px", height: "70px" }}
        />
        <Menu>
          <MenuButton
            as={IconButton}
            rightIcon={<FaChevronDown />}
            className="w-12 h-6 my-auto mr-5"
          />
          <MenuList className="h-12 mt-5 bg-white border border-gray-300 rounded opacity-50 w-28">
            <Link to={`${match.url}/user/profile`}>
              <MenuItem className="hover:bg-gray-200">My Profile</MenuItem>
            </Link>
            <MenuItem
              // onClick={handlerLogOut}
              className="hover:bg-gray-200"
            >
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
