import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

import { ChevronDown } from "react-feather";

import { MyListItem } from "./MyListItem";

import { SecondaryButton } from "../../../components/index";

export const MyList = () => {
  return (
    <Box w="300px">
      <Box h="76px" px="20px" className="bg-CBlack rounded-t-3xl">
        <Flex className="h-full flex justify-between items-center">
          <Text className="text-CWhite text-2xl">My List</Text>
          <ChevronDown className="text-CWhite" />
        </Flex>
      </Box>
      <Box bgColor="#F4F3EE" px="20px" pt="32px" className="rounded-b-3xl">
        <MyListItem />
        <MyListItem />
        <MyListItem />
        <MyListItem />
        <Box mt="23px">
          <SecondaryButton
            name="PROCCED"
            btnWidth="100%"
            btnHeight="45px"
            btnBg="#F4F3EE"
          />
        </Box>
        <Box h="23px" />
      </Box>
    </Box>
  );
};
