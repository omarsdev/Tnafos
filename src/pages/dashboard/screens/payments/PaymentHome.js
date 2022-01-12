import React, { useState, useEffect } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

import { CustomTable } from "../../components";

import { AxiosInstance } from "../../../../api";

const PaymentHome = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  //* representing certain number of rows based on select option:
  const [rowsNumber, setRowsNumber] = useState("10");

  const match = useRouteMatch();
  const history = useHistory();

  const paymentsList = async () => {
    await AxiosInstance.get("/api/dashboard/payment/")
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
              Payments
            </Heading>
          </HStack>
          <CustomTable
            PageHeadLine="Payments"
            thHeading="List of payments"
            thData={[
              "Transaction-ID",
              "Amount",
              "Date",
              "Transaction Number",
              "Notes",
              "options",
            ]}
            list={list}
            listData={["uuid", "amount", "date", "transaction_number", "notes"]}
          />
        </Box>
      </Route>
    </Switch>
  );
};

export default PaymentHome;
