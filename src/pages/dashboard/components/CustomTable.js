import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Button,
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
  Divider,
  Text,
  Spacer,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { AiOutlinePlus } from "react-icons/ai";
import { BiUpload, BiChevronsUp } from "react-icons/bi";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { AddPayment, EditPayment } from ".";
import { AxiosInstance } from "api";
import { SecondaryButton } from "components";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

export const CustomTable = ({
  PageHeadLine,
  thHeading,
  thData,
  list,
  listData,
}) => {
  const match = useRouteMatch();
  const history = useHistory();
  return !list ? (
    <Center h="100vh" w="100%">
      <Spinner size="xl" color="#F8B916" />
    </Center>
  ) : (
    <Box w="full" overflowY="scroll" padding="10">
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize="xx-large"
          fontWeight="lg"
          alignItems="baseline"
        >
          {PageHeadLine}
        </Heading>
        <Link to={`${match.url}/addpayment`}>
          <IconButton
            as={Button}
            colorScheme="yellow"
            size="lg"
            icon={<AiOutlinePlus />}
            rounded="full"
          />
        </Link>
      </HStack>

      {!list ? (
        <Center h="70vh" w="100%">
          <Spinner size="xl" color="#F8B916" />
        </Center>
      ) : (
        <Box className="rounded-3xl shadow-2xl relative bg-white">
          <Text
            py="3"
            px="3"
            // borderBottom="groove"
            borderWidth="2px"
            bg="#333333"
            width="100%"
            roundedTop="2xl"
            fontSize="lg"
            color="white"
          >
            {thHeading}
          </Text>

          <Flex w="full" height="45px" my="8" spacing="30px">
            <HStack pl="5">
              <SecondaryButton
                rounded="full"
                width="100px"
                height="40px"
                variant="outline"
                colorScheme="gray"
                name="EXPORT"
                fontSize="xs"
                leftIcon={<BiUpload size="20px" />}
              />

              <Select
                size="sm"
                rounded="full"
                height="40px"
                width="120px"
                // onChange={(e) => {
                //   const selectedOption = e.target.value;
                //   setRowsNumber(selectedOption);
                // }}
              >
                {/* <Divider orientation="vertical" width="1px" /> */}
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </Select>
            </HStack>
            <Spacer />

            <Box mr="5" w="200px">
              <InputGroup>
                <InputLeftElement children={<Search2Icon color="gray.300" />} />
                <Input
                  type="text"
                  placeholder="search"
                  focusBorderColor="#F8B916"
                  rounded="full"
                  //   value={searchInput}
                  //   onChange={(e) => setSearchInput(e.target.value)}
                  //   onKeyPress={handleKeypress}
                />
              </InputGroup>
            </Box>
          </Flex>
          <form>
            <Table size="md" w="full">
              <Thead>
                <Tr bg="#333333" borderRadius="full">
                  {thData.map((e, i) => (
                    <Th>
                      <Flex justifyContent="center" alignItems="center">
                        {i !== 0 && <BiChevronsUp size="25px" color="white" />}
                        <Text color="white">{e}</Text>
                      </Flex>
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {list.map((el, idx) => (
                  <Tr key={idx} _hover={{ bg: "gray.100" }}>
                    {listData.map((e) => (
                      <Td>{el[e]}</Td>
                    ))}
                    <Td>
                      <Flex justify={"center"} gap="10px">
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
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </form>
        </Box>
      )}
    </Box>
  );

  // <div>
  //   <h1>He</h1>
  // </div>
};
