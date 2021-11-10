import React, { useContext, useEffect, useState } from "react";

import {
  Box,
  HStack,
  Center,
  InputGroup,
  Input,
  InputRightAddon,
  VStack,
  Spinner,
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

import { TnafosHomeLogo } from "assets/icons";
import { SearchIcon } from "@chakra-ui/icons";

import { Navbar } from "./components";

import AxiosInstance from "api/axios-instance";
import { UserDataContext } from "context";

export const Homepage = () => {
  const { tokenProviderValue, dataProviderValue } = useContext(UserDataContext);
  const { userToken } = tokenProviderValue;
  const { setUserData } = dataProviderValue;

  const history = useHistory();

  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };
  const searchHandler = () => {
    history.push(`/${searchInput}`);
  };

  const fetchTokenMe = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/user/my-profile", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setUserData(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userToken || localStorage.getItem("token")) {
      fetchTokenMe();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <Box h={"100vh"}>
      {loading ? (
        <Center h="100vh" w="100%">
          <Spinner size="xl" color="#F8B916" />
        </Center>
      ) : (
        <>
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
        </>
      )}
    </Box>
  );
};
