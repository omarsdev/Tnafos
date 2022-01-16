import React, { useState } from "react";

import {
  Box,
  HStack,
  Flex,
  InputGroup,
  Input,
  InputRightAddon,
  Spacer,
  Text,
  Center,
} from "@chakra-ui/react";
import { Link, useHistory, useParams } from "react-router-dom";

import { TnafosSearchLogo } from "../../../assets/icons";
import { SearchIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  let { search } = useParams();

  const history = useHistory();

  const [searchInput, setSearchInput] = useState(search);

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    history.push(`/${searchInput}`);
  };

  return (
    <Box h={"10%"} bgColor={"#333333"}>
      <Flex mx={10}>
        <HStack spacing="40px">
          <TnafosSearchLogo />
          <InputGroup size="sm">
            <Input
              w={"20vw"}
              borderBottomLeftRadius={20}
              borderTopLeftRadius={20}
              focusBorderColor="#fff"
              borderColor="#fff"
              bgColor="#fff"
              color="#000"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleKeypress}
            />
            <InputRightAddon
              children={<SearchIcon color="white" />}
              cursor={"pointer"}
              borderBottomRightRadius={20}
              borderTopRightRadius={20}
              bgColor={"#F8B916"}
              borderColor={"#F8B916"}
              onClick={searchHandler}
            />
          </InputGroup>
        </HStack>
        <Spacer />
        <HStack spacing={"20px"}>
          <Text className="text-white cursor-pointer">Home</Text>
          <Text className="text-white cursor-pointer">Become a Vendor</Text>
          <Text className="text-white cursor-pointer">Login</Text>
        </HStack>
      </Flex>
    </Box>
  );
};
