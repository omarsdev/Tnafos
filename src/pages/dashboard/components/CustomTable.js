import React from "react";
import {
  Box,
  Button,
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
        flexDirection={{ base: "column", sm: "row", md: "row" }}
        w="full"
        height={{ base: 16, sm: 16, md: 20, lg: 20 }}
        py={{ base: 2, sm: 2, md: 4, lg: 4 }}
        spacing={{ base: 3, sm: "none", md: "none", lg: "none" }}
      >
        <HStack pl={{ base: 1, md: 2, lg: 2 }} justifyItems="baseline">
          <SecondaryButton
            rounded="full"
            width={{ base: 8, md: 28, lg: 28 }}
            height={{ base: 8, md: 10, lg: 10 }}
            variant="outline"
            colorScheme="gray"
            name="EXPORT"
            fontSize={{ md: "xs", lg: "xs" }}
            leftIcon={<BiUpload size="20px" />}
          />

          <Select
            size={{ base: "xs", sm: "sm", md: "sm", lg: "sm" }}
            rounded="full"
            height={{ base: 4, sm: 6, md: 10, lg: 10 }}
            width={{ base: 8, sm: 16, md: 28, lg: 28 }}
            fontSize={{
              base: "xx-small",
              sm: "xx-small",
              md: "sm",
              lg: "md",
            }}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </Select>
        </HStack>
        <Spacer />

        <InputGroup
          mr={{ base: "none", sm: 0.5, md: 2, lg: 2 }}
          width={{ base: 16, sm: 20, md: 36, lg: 44 }}
          height={{ base: 4, sm: 6, md: 10, lg: 12 }}
        >
          <InputLeftElement
            children={
              <Search2Icon
                color="gray.300"
                fontSize={{
                  base: "xx-small",
                  sm: "xx-small",
                  md: "sm",
                  lg: "md",
                }}
              />
            }
          />
          <Input
            type="text"
            placeholder="search"
            // display={{
            //   base: "none",
            //   sm: "contents",
            //   md: "contents",
            //   lg: "contents",
            // }}
            focusBorderColor="#F8B916"
            rounded="full"
            fontSize={{
              base: "xx-small",
              sm: "xx-small",
              md: "sm",
              lg: "md",
            }}
          />
        </InputGroup>
      </Flex>
      <Box overflow="scroll">
        <Table size={{ base: "xs", lg: "md" }} minWidth="40">
          <Thead>
            <Tr bg="#333333" borderRadius="full">
              {thData.map((e, i) => (
                <Th key={i}>
                  <Flex justifyContent="center" alignItems="center">
                    {i !== 0 && <BiChevronsUp size="20px" color="white" />}
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
                  <Td
                    key={id}
                    fontSize={{ base: "x-small", sm: "sm", md: "sm", lg: "md" }}
                  >
                    {el[e]}
                  </Td>
                ))}
                <Td>
                  <Flex justify={"center"}>
                    <Tooltip
                      label="more details"
                      bg="white"
                      placement="auto-start"
                      color="#333333"
                    >
                      <Button
                        justify={"center"}
                        size={{
                          base: "x-small",
                          sm: "x-small",
                          md: "md",
                          lg: "large",
                        }}
                        rounded="full"
                        h={{ base: 6, sm: 8, md: 10, lg: 12 }}
                        w={{ base: 6, sm: 8, md: 10, lg: 12 }}
                        bg={"#F8B916"}
                        color={"white"}
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          bg: "orange.400",
                        }}
                        onClick={() => {
                          history.push(`${match.url}/${el.uuid}`);
                        }}
                      >
                        <FiEdit
                          fontSize={{
                            base: "xx-small",
                            sm: "small",
                            md: "md",
                            lg: "large",
                          }}
                        />
                      </Button>
                    </Tooltip>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};
