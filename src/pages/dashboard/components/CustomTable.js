import React from "react";
import {
  Box,
  IconButton,
  HStack,
  Center,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Text,
  Spacer,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { Tooltip } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { BiUpload, BiChevronsUp } from "react-icons/bi";

import { SecondaryButton } from "../../../components";
import { useRouteMatch, useHistory } from "react-router-dom";
import { NoData } from "./index";
import { FiEdit } from "react-icons/fi";

export const CustomTable = ({
  thHeading,
  thData,
  list,
  component,
  listData,
}) => {
  const match = useRouteMatch();
  const history = useHistory();
  return !list ? (
    <Center h="100vh" w="100%">
      <Spinner size={{ base: "md", lg: "xl" }} color="#F8B916" />
    </Center>
  ) : list.length === 0 ? (
    <NoData component={component} />
  ) : (
    <Box bg="white" position="relative" shadow="2xl" rounded="3xl">
      <Text
        py={{ base: 1, md: 2, lg: 3 }}
        px={{ base: 1, md: 2, lg: 3 }}
        borderWidth="2px"
        bg="#333333"
        width="100%"
        roundedTop="2xl"
        fontSize={{ base: "sm", md: "medium", lg: "large" }}
        color="white"
      >
        {thHeading}
      </Text>

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        w={{ base: "full", md: "full", lg: "full" }}
        height={{ base: 16, md: 20, lg: 20 }}
        my={{ base: 2, md: 4, lg: 4 }}
        spacing={{ base: 3, md: 4, lg: 4 }}
      >
        <HStack pl={{ base: 1, md: 2, lg: 3 }}>
          <SecondaryButton
            rounded="full"
            width={{ base: 8, md: 28, lg: 28 }}
            height={{ base: 8, md: 10, lg: 10 }}
            variant="outline"
            colorScheme="gray"
            name="EXPORT"
            fontSize={{ base: "xx-small", md: "xs", lg: "xs" }}
            leftIcon={<BiUpload size="20px" />}
          />

          <Select
            size={{ base: "xs", md: "sm", lg: "sm" }}
            rounded="full"
            height={{ base: 8, md: 10, lg: 10 }}
            width={{ base: 8, md: 28, lg: 28 }}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </Select>
        </HStack>
        <Spacer />

        <Box
          mr={{ base: "none", md: 2, lg: 2 }}
          width={{ base: 8, md: 36, lg: 44 }}
        >
          <InputGroup>
            <InputLeftElement children={<Search2Icon color="gray.300" />} />
            <Input
              type="text"
              placeholder="search"
              focusBorderColor="#F8B916"
              rounded="full"
            />
          </InputGroup>
        </Box>
      </Flex>
      <form>
        <Table size={{ base: "xs", lg: "md" }} w="full">
          <Thead>
            <Tr bg="#333333" borderRadius="full">
              {thData.map((e, i) => (
                <Th key={i}>
                  <Flex justifyContent="center" alignItems="center">
                    {i !== 0 && <BiChevronsUp size="25px" color="white" />}
                    <Text
                      color="white"
                      fontSize={{ base: "xx-small", md: "xs", lg: "xs" }}
                    >
                      {e}
                    </Text>
                  </Flex>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {list.map((el, idx) => (
              <Tr key={idx} _hover={{ bg: "gray.100" }}>
                {listData.map((e, id) => (
                  <Td key={id}>{el[e]}</Td>
                ))}
                <Td>
                  <Flex justify={"center"} gap="10px">
                    <Tooltip
                      label="more details"
                      bg="white"
                      placement="auto-start"
                      color="#333333"
                    >
                      <IconButton
                        justify={"center"}
                        fontSize={"md"}
                        rounded={"full"}
                        bg={"#F8B916"}
                        color={"white"}
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          bg: "orange.400",
                        }}
                        icon={<FiEdit />}
                        onClick={() => {
                          history.push(`${match.url}/${el.uuid}`);
                        }}
                      />
                    </Tooltip>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </form>
    </Box>
  );
};
