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
import { AddPayment, EditPayment } from "./";
import { AxiosInstance } from "api";
import { SecondaryButton } from "components";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

export const PaymentHome = () => {
  const [list, setList] = useState([]);

  const match = useRouteMatch();
  const history = useHistory();
  // const uuid = useParams();

  const paymentsList = async () => {
    await AxiosInstance.get("/api/dashboard/payment/")
      .then((res) => {
        console.log(res.data.data);
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleEditClick = () => {
  //   history.push(`${match.url}/${uuid}`);
  // };

  useEffect(() => {
    paymentsList();
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
              Payments
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
                List of payments
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
                  {/* <Divider
                          orientation="vertical"
                          width="2px"
                          color="gray.700"
                        /> */}

                  <Select
                    placeholder="10"
                    size="sm"
                    rounded="full"
                    height="40px"
                    width="120px"
                  >
                    {/* <Divider orientation="vertical" width="1px" /> */}
                    <option value="option1">25</option>
                    <option value="option2">50</option>
                    <option value="option3">100</option>
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
                    />
                  </InputGroup>
                </Box>
              </Flex>
              <form>
                <Table size="md" w="full">
                  <Thead>
                    <Tr bg="#333333" borderRadius="full">
                      <Th color="white">Payment-number</Th>
                      <Th>
                        <Flex>
                          <BiChevronsUp size="25px" color="white" />{" "}
                          <Text color="white">Amount</Text>{" "}
                        </Flex>
                      </Th>
                      <Th>
                        <Flex>
                          <BiChevronsUp size="25px" color="white" />{" "}
                          <Text color="white">Payment-method </Text>
                        </Flex>
                      </Th>
                      <Th>
                        <Flex>
                          <BiChevronsUp size="25px" color="white" />
                          <Text color="white"> Date </Text>
                        </Flex>
                      </Th>
                      <Th>
                        <Flex>
                          <BiChevronsUp size="25px" color="white" />{" "}
                          <Text color="white">Transaction-ID </Text>
                        </Flex>
                      </Th>
                      <Th>
                        <Flex>
                          <BiChevronsUp size="25px" color="white" />
                          <Text color="white"> Notes </Text>
                        </Flex>
                      </Th>
                      <Th>
                        <Flex>
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
                        <Td>{el?.amount}</Td>
                        <Td>{el?.method}</Td>
                        <Td>{el?.date}</Td>
                        <Td>{el?.transaction_number}</Td>
                        <Td>{el?.notes}</Td>
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
                              icon={<BsTrash />}
                              // onClick={onOpen}
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
      </Route>
      <Route path={`${match.path}/addpayment`} component={AddPayment} />
      <Route path={`${match.path}/:uuid`} component={EditPayment} />
    </Switch>
  );
};
