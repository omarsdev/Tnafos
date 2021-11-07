import React from "react";

import { Box, Text, Flex } from "@chakra-ui/react";

export const MyListItem = () => {
  return (
    <Flex className="flex-col mt-3">
      <Text fontSize="16px" ml="0px">
        React Native App
      </Text>
      <Box className="w-full bg-CBlack mt-2" h="1px" />
    </Flex>
  );
};
