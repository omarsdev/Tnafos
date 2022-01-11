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
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { GrContactInfo } from "react-icons/gr";
import { Search2Icon } from "@chakra-ui/icons";
import { AiOutlinePlus } from "react-icons/ai";
import { BiUpload, BiChevronsUp } from "react-icons/bi";

import { AddClient, ClientCard } from "./";

import { AxiosInstance } from "../../../../api";
import { SecondaryButton } from "../../../../components";

export const ClientsHome = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  //* representing certain number of rows based on select option:
  const [rowsNumber, setRowsNumber] = useState("10");

  const match = useRouteMatch();
  const history = useHistory();

  const clientsList = async () => {
    await AxiosInstance.get("/api/dashboard/customer/")
      .then((res) => {
        console.log(res.data.data);
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    history.push(`/${searchInput}`);
  };

  const handleDeleteClick = (clientId) => {
    const newList = [...list];

    const index = list.findIndex((el) => el.uuid === clientId);

    newList.splice(index, 1);
    setList(newList);
  };

  useEffect(() => {
    clientsList();
  }, []);

  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        <Box w="full" overflowY="scroll" padding="10">
          <HStack justifyContent="space-between" paddingBottom="5">
            <Heading
              textColor="gray.600"
              fontSize="xx-large"
              fontWeight="lg"
              alignItems="baseline"
            >
              Clients
            </Heading>
            <Link to={`${match.url}/addclient`}>
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
            <Box className="rounded-3xl shadow-2xl relative bg-white" w="full">
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
                List of clients
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
                    onChange={(e) => {
                      const selectedOption = e.target.value;
                      setRowsNumber(selectedOption);
                    }}
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
                    <InputLeftElement
                      children={<Search2Icon color="gray.300" />}
                    />
                    <Input
                      type="text"
                      placeholder="search"
                      focusBorderColor="#F8B916"
                      rounded="full"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      onKeyPress={handleKeypress}
                    />
                  </InputGroup>
                </Box>
              </Flex>

              <Table size="sm" w="100%">
                <Thead overflowX="scroll">
                  <Tr bg="#333333" borderRadius="full">
                    <Th color="white">Client-number</Th>
                    <Th>
                      <Flex justifyContent="center" alignItems="center">
                        <BiChevronsUp size="25px" color="white" />{" "}
                        <Text color="white">Primary Contact </Text>
                      </Flex>
                    </Th>
                    <Th>
                      <Flex justifyContent="center" alignItems="center">
                        <BiChevronsUp size="25px" color="white" />{" "}
                        <Text color="white">E-mail</Text>
                      </Flex>
                    </Th>
                    <Th>
                      <Flex justifyContent="center" alignItems="center">
                        <BiChevronsUp size="25px" color="white" />{" "}
                        <Text color="white">Company Name</Text>{" "}
                      </Flex>
                    </Th>

                    <Th>
                      <Flex justifyContent="center" alignItems="center">
                        <BiChevronsUp size="25px" color="white" />
                        <Text color="white"> Website</Text>
                      </Flex>
                    </Th>
                    <Th>
                      <Flex justifyContent="center" alignItems="center">
                        <BiChevronsUp size="25px" color="white" />
                        <Text color="white"> Phone </Text>
                      </Flex>
                    </Th>
                    <Th>
                      <Flex justifyContent="center" alignItems="center">
                        <BiChevronsUp size="25px" color="white" />
                        <Text color="white"> Country </Text>
                      </Flex>
                    </Th>
                    <Th>
                      <Flex justifyContent="center" alignItems="center">
                        <BiChevronsUp size="25px" color="white" />
                        <Text color="white"> Action </Text>
                      </Flex>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {list.map((el, idx) => (
                    <Tr key={idx} _hover={{ bg: "gray.100" }}>
                      <Td>{el?.uuid}</Td>
                      <Td>
                        {el?.primary_contact?.first_name}{" "}
                        {el?.primary_contact?.last_name}
                      </Td>
                      <Td>{el?.primary_contact?.email}</Td>
                      <Td>{el?.company_name}</Td>

                      <Td>{el?.website}</Td>
                      <Td>{el?.phone}</Td>
                      <Td>{el?.country?.name}</Td>
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
                            icon={<GrContactInfo />}
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
            </Box>
          )}
        </Box>
      </Route>
      <Route path={`${match.path}/addclient`} component={AddClient} />
      <Route path={`${match.path}/:uuid`} component={ClientCard} />
    </Switch>
  );
};
