import React, { useContext, useEffect, useState } from "react";


import { useHistory } from "react-router-dom";

import {
  Box,
  Stack,
  Center,
  InputGroup,
  Input,
  InputRightAddon,
  VStack,
  Spinner,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { Navbar } from "./components";

import { AxiosInstance } from "../../api";
import { UserDataContext } from "../../context";
import { getToken } from "../../utils";
import { TnafosHomeLogo } from "../../assets/icons";
import { SearchIcon } from "@chakra-ui/icons";

const Homepage = () => {
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
      const res = await AxiosInstance.get("/api/dashboard/user/my-profile");
      setUserData(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (getToken()) {
      fetchTokenMe();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <h1>Spinner </h1>
    );

  return (
    <Box h={"100vh"}>
      <Navbar />
      <Center h="92vh">
        <VStack spacing={10}>
          <TnafosHomeLogo />
          <InputGroup alignItems={"center"} justifyContent={"center"} size="lg">
            <Input
              width={{
                base: "18em",
                sm: "22em",
                md: "28em",
                lg: "32em",
              }}
              borderBottomLeftRadius={"99em"}
              borderTopLeftRadius={"99em"}
              focusBorderColor="#F8B916"
              borderColor="#AEAEAE"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleKeypress}
            />
            <InputRightAddon
              children={<SearchIcon color="white" />}
              cursor={"pointer"}
              borderBottomRightRadius={"99em"}
              borderTopRightRadius={"99em"}
              bgColor={"#F8B916"}
              borderColor={"#F8B916"}
              onClick={searchHandler}
            />
          </InputGroup>
          <SimpleGrid
            columns={{ sm: 2, md: 4, lg: 5 }}
            spacing={8}
            // direction={["column", "row"]}
            // justify={"center"}
            justifyContent={"center"}
            justifyItems={"center"}
            justifySelf={"center"}
            alignItems={"center"}
          >
            <Text>Products</Text>
            <Text>Services</Text>
            <Text>Categories</Text>
            <Text>Blog</Text>
            <Text>GitHub</Text>
          </SimpleGrid>
        </VStack>
      </Center>
    </Box>
  );
};

export default Homepage;
