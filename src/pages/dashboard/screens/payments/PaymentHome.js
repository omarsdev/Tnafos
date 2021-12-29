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
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { AddPayment } from "./";
import { AxiosInstance } from "api";
import { SecondaryButton } from "components";

export const PaymentHome = () => {
  const [list, setList] = useState([]);

  const match = useRouteMatch();

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
                borderBottom="groove"
                borderWidth="2px"
                bg="gray.200"
                width="100%"
                roundedTop="2xl"
                fontSize="lg"
              >
                List of payments
              </Text>

              <Flex w="full" height="45px" my="5" spacing="30px">
                <HStack pl="5">
                  <SecondaryButton
                    rounded="full"
                    width="100px"
                    height="30px"
                    variant="outline"
                    colorScheme="gray"
                    name="EXPORT"
                    fontSize="xs"
                    leftIcon={<BiUpload size="20px" />}
                  >
                    {/* <Divider
                          orientation="vertical"
                          width="2px"
                          color="gray.700"
                        /> */}
                  </SecondaryButton>

                  <Select
                    placeholder="10"
                    size="sm"
                    rounded="full"
                    height="30px"
                    width="100px"
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
                      // pointerEvents="none"
                      children={<Search2Icon color="gray.300" />}
                    />
                    <Input
                      type="text"
                      placeholder="search"
                      focusBorderColor="#F8B916"
                    />
                  </InputGroup>
                </Box>
              </Flex>
              <Table size="md">
                <Thead>
                  <Tr bg="gray.200" borderRadius="full">
                    <Th>Payment-number</Th>
                    <Th>
                      <Flex>
                        <BiChevronsUp size="25px" /> <Text>Amount</Text>{" "}
                      </Flex>
                    </Th>
                    <Th>
                      <Flex>
                        <BiChevronsUp /> Payment-method{" "}
                      </Flex>
                    </Th>
                    <Th>
                      <Flex>
                        <BiChevronsUp /> Date{" "}
                      </Flex>
                    </Th>
                    <Th>
                      <Flex>
                        <BiChevronsUp /> Transaction-ID{" "}
                      </Flex>
                    </Th>
                    <Th>
                      <Flex>
                        <BiChevronsUp /> Notes{" "}
                      </Flex>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {list.map((el, idx) => (
                    <Tr key={idx}>
                      <Td>{el?.uuid}</Td>
                      <Td>{el?.amount}</Td>
                      <Td>{el?.method}</Td>
                      <Td>{el?.date}</Td>
                      <Td>{el?.transaction_number}</Td>
                      <Td>{el?.notes}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}
        </Box>
      </Route>
      <Route path={`${match.path}/addpayment`} component={AddPayment} />
    </Switch>
  );
};
