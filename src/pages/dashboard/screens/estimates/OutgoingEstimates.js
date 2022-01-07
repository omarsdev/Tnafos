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
import { SecondaryButton } from "components";
import { NoData } from "pages";
import { CustomTable } from "pages";

export const OutgoingEstimates = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const match = useRouteMatch();
  const history = useHistory();

  //* representing certain number of rows based on select option:
  const [rowsNumber, setRowsNumber] = useState("10");

  const estOutgoingList = async () => {
    await AxiosInstance.get("/api/dashboard/estimate/outgoing")
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
    estOutgoingList();
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
          ) : list.length === 0 ? (
            // TODO
            <NoData />
          ) : (
            <CustomTable
              PageHeadLine="Payments"
              thHeading="List of purchase oncoming"
              thData={[
                "Transaction-ID",
                "Subject",
                "Date",
                "Status",
                "Discount Amount",
                "options",
              ]}
              list={list}
              listData={[
                "uuid",
                "subject",
                "date",
                "status",
                "discount_amount",
              ]}
            />
          )}
        </Box>
      </Route>
    </Switch>
  );
};
