import React, { useState, useEffect } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

import CustomTable from "../../components/CustomTable";
import { AxiosInstance } from "../../../../api";

import EstimateCard from "./EstimateCard";

const OutgoingEstimates = () => {
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
            PageHeadLine="estimate"
            thHeading="List of outgoing estimates"
            list={list}
            thData={[
              "Transaction-ID",
              "Subject",
              "Date",
              "Valid-till",
              "Status",
              "Action",
            ]}
            listData={["uuid", "subject", "date", "valid_till", "status"]}
          />
        </Box>
      </Route>
      <Route path={`${match.path}/:uuid`} component={EstimateCard} />
    </Switch>
  );
};

export default OutgoingEstimates;
