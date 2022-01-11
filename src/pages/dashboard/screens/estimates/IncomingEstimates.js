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
import { CustomTable } from "../../components";
import { AxiosInstance } from "api";
import { AiOutlineHome } from "react-icons/ai";
import { EstimateCard } from "./";

export const IncomingEstimates = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [rowsNumber, setRowsNumber] = useState("10");

  const match = useRouteMatch();
  const history = useHistory();

  const getIncomingEst = async () => {
    await AxiosInstance.get("/api/dashboard/estimate/incoming")
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
    getIncomingEst();
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
              Incoming Estimates
            </Heading>
          </HStack>

          <CustomTable
            list={list}
            component="estimate"
            theHeading="List of incoming estimates"
            theData={[
              "Transaction-ID",
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
