import React, { useContext } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { ChevronDown } from "react-feather";

import { SecondaryButton } from "../../../components";
import { SearchDataContext } from "../../../context";

const MyListItem = ({ data }) => {
  return (
    <Flex className="flex-col mt-3">
      <Text fontSize="16px" ml="0px">
        {data.name}
      </Text>
      <Box className="w-full bg-CBlack mt-2" h="1px" />
    </Flex>
  );
};

export const MyList = () => {
  const { myListDataProviderValue } = useContext(SearchDataContext);
  const { myListData } = myListDataProviderValue;

  return (
    <Box w="300px">
      <Box h="76px" px="20px" className="bg-CBlack rounded-t-3xl">
        <Flex className="h-full flex justify-between items-center">
          <Text className="text-CWhite text-2xl">My List</Text>
          <ChevronDown className="text-CWhite" />
        </Flex>
      </Box>
      <Box bgColor="#F4F3EE" px="20px" pt="32px" className="rounded-b-3xl">
        {myListData.map((e, i) => (
          <MyListItem key={i} data={e} />
        ))}
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
