import React, { useContext } from "react";

import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { ChevronDown } from "react-feather";

import { SecondaryButton } from "components/button";
import { SearchDataContext } from "../../../context";

const MyListItem = ({ data }) => {
  return (
    <Flex mt="3" flexDirection="column">
      <Text fontSize="16px" ml="0px">
        {data.name}
      </Text>
      <Box w="full" backgroundColor="brand.dark" mt="2" h="1px" />
    </Flex>
  );
};

export const MyList = () => {
  const { myListDataProviderValue } = useContext(SearchDataContext);
  const { myListData } = myListDataProviderValue;

  return (
    <Box w="260px">
      <Box bgColor="brand.paper" rounded="3xl">
        <Box h="76px" px="20px" backgroundColor="brand.dark" rounded="3xl">
          <Flex h="full" justifyContent="space-between" alignItems="center">
            <Text color="brand.white" fontSize="2xl">
              My List
            </Text>
            <ChevronDown color="brand.white" />
          </Flex>
        </Box>
        <Box bgColor="brand.paper" px="20px" pt="32px" rounded="3xl">
          {myListData.map((e, i) => (
            <MyListItem key={i} data={e} />
          ))}
          <Center mt="23px">
            <SecondaryButton
              name="PROCCED"
            // btnWidth="100%"
            // btnHeight="45px"
            // btnBg="brand.paper"
            />
          </Center>
          <Box h="23px" />
        </Box>
      </Box>
    </Box>
  );
};
