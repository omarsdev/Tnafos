import React from "react";

import { Box, HStack, Grid, Flex, Text, Center } from "@chakra-ui/react";

import { Navbar, CardItem, MyList } from "./components";

export const SearchLayout = () => {
  return (
    <Box h={"100vh"}>
      <Navbar />
      <Box className="w-full h-96 bg-blue-300" />
      <Box h={"91%"} marginTop="50px">
        <Flex>
          <Box w="70%" pl="80px">
            <Text fontSize="35px">Services</Text>
            <Box mt="40px">
              <Grid templateColumns="repeat(3, 1fr)" gap={20}>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
              </Grid>
            </Box>
          </Box>
          <Box w="30%">
            <Flex>
              <Box w="2px" h="700px" className="bg-CBlack" mt={0} />
              <Box mx="auto">
                <MyList />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
