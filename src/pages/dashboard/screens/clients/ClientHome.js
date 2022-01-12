import React, { useState, useEffect } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";
import { CustomTable } from "../../components";
import { AxiosInstance } from "../../../../api";

const ClientHome = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const match = useRouteMatch();
  const history = useHistory();

  const clientsList = async () => {
    await AxiosInstance.get("/api/dashboard/customer/")
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

  const handleDeleteClick = (clientId) => {
    const newList = [...list];

    const index = list.findIndex((el) => el.uuid === clientId);

    newList.splice(index, 1);
    setList(newList);
  };

  useEffect(() => {
    clientsList();
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
            PageHeadLine="Clients"
            thHeading="List of Clients"
            thData={[
              "Client-number",
              "Primary Contact",
              "E-mail",
              "Company Name",
              " Website",
              "Phone",
              "Action",
            ]}
            list={list}
            listData={[
              "first_name, first_name",
              "email",
              "company_name",
              "website",
              "phone",
            ]}
          />
        </Box>
      </Route>
    </Switch>
  );
};

export default ClientHome;
