import React, { useState, useEffect } from "react";
import { Box, Heading, HStack, IconButton, Button } from "@chakra-ui/react";
import {
  useRouteMatch,
  Switch,
  Route,
  useHistory,
  Link,
} from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import CustomTable from "../../components/CustomTable";

import { AxiosInstance } from "../../../../api";
import PaymentCard from "./PaymentCard";
import AddPayment from "./AddPayment";

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
            <Link to={`${match.url}/addpayment`}>
              <IconButton
                as={Button}
                colorScheme="yellow"
                size="lg"
                icon={<AiOutlinePlus />}
                rounded="full"
              ></IconButton>
            </Link>
          </HStack>
          <CustomTable
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
            component={"payment"}
          />
        </Box>
      </Route>
      <Route path={`${match.path}/:uuid`} component={PaymentCard} />
      <Route path={`${match.path}/addpayment`} component={AddPayment} />
    </Switch>
  );
};

export default PaymentHome;
