import React, { useState, useEffect } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

import CustomTable from "../../components/CustomTable";
import UpdatePurchase from "./UpdatePurchase";
import { AxiosInstance } from "../../../../api";

const IncomingPurchases = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [rowsNumber, setRowsNumber] = useState("10");

  const match = useRouteMatch();
  const history = useHistory();

  const purIncomingList = async () => {
    await AxiosInstance.get("/api/dashboard/purchase-request/incoming")
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
    purIncomingList();
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
          </HStack>
          <CustomTable
            list={list}
            component="purchase-request"
            theHeading="List of incoming purchase requests"
            theData={["Transaction-ID", "Details", "Date", "Service", "Action"]}
            listData={["uuid", "details", "date", "service[name]"]}
          />
        </Box>
      </Route>
      <Route path={`${match.path}/:uuid`} component={UpdatePurchase} />
    </Switch>
  );
};

export default IncomingPurchases;
