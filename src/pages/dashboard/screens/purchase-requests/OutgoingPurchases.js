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

import { BiUpload, BiChevronsUp } from "react-icons/bi";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
  useParams,
} from "react-router-dom";
import { CustomTable, NoData } from "../../components";
import { AxiosInstance } from "api";
import { AiOutlineHome } from "react-icons/ai";
import { UpdatePurchase } from "./";

export const OutgoingPurchases = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [rowsNumber, setRowsNumber] = useState("10");

  const match = useRouteMatch();
  const history = useHistory();
  const uuid = useParams();

  const purOutgoingList = async () => {
    await AxiosInstance.get("api/dashboard/purchase-request/outgoing")
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        history.push("/dashboard/purchase-request");
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
                history.push(`${match.url}/purchase-request`);
              }}
            />
          </HStack>

          <CustomTable
            thHeading="List of outgoing purchase-requests"
            thData={["Transaction-ID", "Details", "Date", "Service", "options"]}
            list={list}
            listData={["uuid", "details", "date", "service"]}
            component="purchase-requset"
          />
        </Box>
      </Route>
      <Route path={`${match.path}/:uuid`} component={UpdatePurchase} />
    </Switch>
  );
};
