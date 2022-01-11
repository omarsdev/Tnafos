import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  IconButton,
  HStack,
  Button,
  Spinner,
  Center,
} from "@chakra-ui/react";

import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";
import { AxiosInstance } from "api";
import { CustomTable } from "../../components";
import { EstimateCard } from "./";

export const OutgoingEstimates = () => {
  const [list, setList] = useState([]);
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
              Outgoing Estimates
            </Heading>
          </HStack>

          <CustomTable
            thHeading="List of outgoing estimates"
            list={list}
            theData={[
              "UUID",
              "Subject",
              "Name",
              "Date",
              "Company",
              "Valid-till",
              "Status",
              "Action",
            ]}
            listData={[
              "uuid",
              "subject",
              "assigned_to",
              "date",
              "company_name",
              "valid_till",
              "status",
            ]}
          />
        </Box>
      </Route>
      <Route path={`${match.path}/:uuid`} component={EstimateCard} />
    </Switch>
  );
};
