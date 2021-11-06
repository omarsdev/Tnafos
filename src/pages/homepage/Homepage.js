import React, { useState } from "react";

import {
  Box,
  HStack,
  Center,
  InputGroup,
  Input,
  InputRightAddon,
  VStack,
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

import { TnafosHomeLogo } from "assets/icons";
import { SearchIcon } from "@chakra-ui/icons";

import { Navbar } from "./components";

export const Homepage = () => {
  const history = useHistory();

  const [searchInput, setSearchInput] = useState("");

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    history.push(`/${searchInput}`);
  };

  return (
    <Box h={"100vh"}>
      <Navbar />
      <Center h="92vh" w="100%">
        <VStack spacing={10}>
          <TnafosHomeLogo />

          <InputGroup size="lg">
            <Input
              w={"40vw"}
              borderBottomLeftRadius={20}
              borderTopLeftRadius={20}
              focusBorderColor="#F8B916"
              borderColor="#AEAEAE"
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
          <HStack spacing={10}>
            <h1>Products</h1>
            <h1>Services</h1>
            <h1>Categories</h1>
            <h1>Blog</h1>
            <h1>GitHup</h1>
            <h1>Forge</h1>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
};
