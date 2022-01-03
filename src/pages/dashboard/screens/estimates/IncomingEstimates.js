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
import { AiOutlinePlus } from "react-icons/ai";
// import { CustomTable } from "../../components";

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

export const IncomingEstimates = () => {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const match = useRouteMatch();
  const history = useHistory();

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

  const handleDeleteClick = (paymentId) => {
    const newList = [...list];

    const index = list.findIndex((el) => el.uuid === paymentId);

    newList.splice(index, 1);
    setList(newList);
  };

  useEffect(() => {
    incomingList();
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
              Icoming Estimates
            </Heading>
            <Link to={`${match.url}/addestimate`}>
              <IconButton
                as={Button}
                colorScheme="yellow"
                size="lg"
                icon={<AiOutlinePlus />}
                rounded="full"
              />
            </Link>
          </HStack>

          {/* <CustomTable PageHeadLine="Incoming-estimates" list={list} /> */}
        </Box>
      </Route>
    </Switch>
  );
};
