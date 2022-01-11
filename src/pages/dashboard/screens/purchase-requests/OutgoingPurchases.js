import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Button,
  IconButton,
  HStack,
  Center,
  Spinner,
} from "@chakra-ui/react";

import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { CustomTable, NoData } from "../../components";

import { AxiosInstance } from "../../../../api";
import { SecondaryButton } from "../../../../components";

export const OutgoingPurchases = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [rowsNumber, setRowsNumber] = useState("10");

  const match = useRouteMatch();
  const history = useHistory();

  const purOutgoingList = async () => {
    await AxiosInstance.get("api/dashboard/purchase-request/outgoing")
      .then((res) => {
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
    purOutgoingList();
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
              OutgoingPurchases
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
            <NoData component={"purchase-request"} />
          ) : (
            <CustomTable
              PageHeadLine="Payments"
              thHeading="List of purchase oncoming"
              thData={["Transaction-ID", "Details", "Date", "options"]}
              list={list}
              listData={["uuid", "details", "date"]}
            />
          )}
        </Box>
      </Route>
    </Switch>
  );
};
