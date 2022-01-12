import React, { useState, useEffect } from "react";
import { Box, Heading, Button, IconButton, HStack } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { CustomTable } from "../../components";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import AddClient from "./AddClient";
import ClientCard from "./ClientCard";
import { AxiosInstance } from "api";

const ClientsHome = () => {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //* representing certain number of rows based on select option:
  const [rowsNumber, setRowsNumber] = useState("10");

  const match = useRouteMatch();
  const history = useHistory();

  const clientsList = async () => {
    await AxiosInstance.get("/api/dashboard/customer/")
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
              Clients
            </Heading>
            <Link to={`${match.url}/addclient`}>
              <IconButton
                as={Button}
                colorScheme="yellow"
                size="lg"
                icon={<AiOutlinePlus />}
                rounded="full"
              />
            </Link>
          </HStack>

          <CustomTable
            theHeading="List of clients"
            theData={[
              "Client-number",
              "Primary Contact",
              "E-mail",
              "Company Name",
              "Website",
              "Phone",
              "actions",
            ]}
            list={list}
            component="customer"
            listData={[
              "uuid",
              "first_name",
              "email",
              "company_name",
              "website",
              "phone",
            ]}
          />
        </Box>
      </Route>
      <Route path={`${match.path}/:uuid`} component={ClientCard} />
      <Route path={`${match.path}/addclient`} component={AddClient} />
    </Switch>
  );
};

export default ClientsHome;
