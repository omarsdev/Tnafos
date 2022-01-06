import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  IconButton,
  HStack,
  Button,
  Text,
  Spinner,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Select,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";

import { Search2Icon } from "@chakra-ui/icons";
import { BiUpload } from "react-icons/bi";

import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";
import { AxiosInstance } from "api";
import { BsTrash } from "react-icons/bs";
import { CustomTable, SecondaryButton } from "components";

export const OutgoingEstimates = () => {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const match = useRouteMatch();
  const history = useHistory();

  //* representing certain number of rows based on select option:
  const [rowsNumber, setRowsNumber] = useState("10");

  const incomingList = async () => {
    await AxiosInstance.get("/api/dashboard/estimate/incoming")
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
              Outgoin Estimates
            </Heading>
            <IconButton
              as={Button}
              colorScheme="yellow"
              size="lg"
              icon={<AiOutlineHome />}
              rounded="full"
              onClick={() => {
                history.push(`${match.url}/estimatehome`);
              }}
            />
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
                List of incoming estimates
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

              {/* <CustomTable PageHeadLine="Incoming-estimates" list={list} /> */}
            </Box>
          )}
        </Box>
      </Route>
    </Switch>
  );
};
