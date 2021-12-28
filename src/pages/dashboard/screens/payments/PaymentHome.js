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
  Stack,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { AddPayment } from "./";
import { AxiosInstance } from "api";

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
            <Box>
              <Table size="md">
                <Thead>
                  <HStack w="full">
                    <Button
                      rounded="full"
                      w="40"
                      height="30px"
                      variant="outline"
                      colorScheme="gray"
                    >
                      <Text fontSize="xs">EXPORT</Text>
                      <Divider
                        orientation="vertical"
                        width="2px"
                        color="gray.600"
                      />
                      <span>
                        <BiUpload />
                      </span>
                    </Button>

                    <Spacer />

                    <Select placeholder="10" size="sm" rounded="full">
                      <Divider orientation="vertical" width="1px" />
                      <option value="option1">25</option>
                      <option value="option2">50</option>
                      <option value="option3">100</option>
                    </Select>
                  </HStack>
                  <Tr>
                    <Th>Amount</Th>
                    <Th>Payment-number</Th>
                    <Th>Payment-method</Th>
                    <Th>Date</Th>
                    <Th>Transaction-ID</Th>
                    <Th>Notes</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {list.map((el, idx) => (
                    <Tr key={idx}>
                      <Td>{el?.amount}</Td>
                      <Td>{el?.uuid}</Td>
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
