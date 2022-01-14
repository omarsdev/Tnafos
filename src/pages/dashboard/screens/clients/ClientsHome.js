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

import { AxiosInstance } from "../../../../api";

const ClientsHome = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const match = useRouteMatch();
  const history = useHistory();

  const clientsList = async () => {
    await AxiosInstance.get("/api/dashboard/customer")
      .then((res) => {
        console.log(res.data.data);
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleKeypress = (e) => {
  //   if (e.key === "Enter") {
  //     searchHandler();
  //   }
  // };

  const searchHandler = () => {
    history.push(`/${searchInput}`);
  };

  useEffect(() => {
    clientsList();
  }, []);

  return (
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
          ></IconButton>
        </Link>
      </HStack>
      <CustomTable
        theHeading="List of clients"
        thData={[
          "UUID",
          "Company Name",
          "Vat Number",
          "Phone",
          "Website",
          "Address",
          "actions",
        ]}
        list={list}
        listData={[
          "uuid",
          "company_name",
          "vat_number",
          "phone",
          "website",
          "address",
        ]}
        component={"client"}
      />
    </Box>
  );
};

export default ClientsHome;
