import React, { useContext, useEffect, useState } from "react";

import {
  Box,
  Stack,
  Center,
  InputGroup,
  Input,
  InputRightAddon,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

import { Navbar } from "./components";

import { AxiosInstance } from "../../api";
import { UserDataContext } from "../../context";
import { getToken } from "../../utils";
import { TnafosHomeLogo } from "../../assets/icons";

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

  return (
    <Box h={"100vh"}>
      {loading ? (
        <Center h="100vh" w="100%">
          <Spinner size="xl" color="#F8B916" />
        </Center>
      ) : (
        <>
          <Navbar />
          <Center h="92vh">
            <VStack spacing={10}>
              <TnafosHomeLogo />
              <InputGroup
                alignItems={"center"}
                justifyContent={"center"}
                size="lg"
              >
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
              <Stack
                direction={["column", "row"]}
                justify={"center"}
                spacing={"2em"}
                shouldWrapChildren={true}
                wrap={"flexWrap"}
              >
                <h1>Products</h1>
                <h1>Services</h1>
                <h1>Categories</h1>
                <h1>Blog</h1>
                <h1>GitHub</h1>
                {/* <h1>Forge</h1> */}
              </Stack>
            </VStack>
          </Center>
        </>
      )}
    </Box>
  );
};
