import React from "react";
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

export const Navbar = () => {
  const match = useRouteMatch();
  const history = useHistory();

  const handlerLogOut = () => {
    removeUserSession();
    history.go(0);
  };

  return (
    <Box
      bg="white"
      className="flex flex-row-reverse opacity-100 shadow-xl w-full h-24"
    >
      <Box className="flex flex-row items-center">
        <HStack className="font-medium h-10 justify-center my-auto text-gray-700 text-md w-32">
          {/* <span className="my-auto mr-7">
                      {userData.first_name} {userData.last_name}
                    </span> */}
          <Text>User name</Text>
        </HStack>
        <Image
          className="object-cover border rounded-full h-14 w-14 border-CPrimary css-0 rounded-ful"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="User Profile Photo"
          style={{ width: "70px", height: "70px" }}
        />
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown />}
            bg="transparent"
            _hover="transparent"
          />
          <MenuList w="28">
            <Link to={`${match.url}/user/profile`}>
              <MenuItem className="hover:bg-gray-200">My Profile</MenuItem>
            </Link>
            <MenuItem onClick={handlerLogOut} className="hover:bg-gray-200">
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
