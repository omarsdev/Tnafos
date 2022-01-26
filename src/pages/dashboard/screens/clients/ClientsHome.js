import React, { useState, useEffect } from "react";
import { Box, Heading, Button, IconButton, HStack } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { CustomTable } from "../../components";
import { Link, useRouteMatch, useHistory } from "react-router-dom";

import { AxiosInstance } from "../../../../api";

const ClientsHome = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const match = useRouteMatch();
  const history = useHistory();

  const clientsList = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/customer");
      console.log(res.data.data);
      setList(res.data.data);
    } catch (err) {
      console.log(err);
    }
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
    clientsList();
  }, []);

  return (
    <Box w="full" overflowY="scroll" padding={{ base: 4, md: 4, lg: 6 }}>
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize={{ base: "large", md: "x-large", lg: "xx-large" }}
          fontWeight="lg"
          alignItems="baseline"
          mb={{ base: 2, lg: 4 }}
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
          "Phone",
          "Website",
          "Address",
          "actions",
        ]}
        list={list}
        listData={["uuid", "company_name", "phone", "website", "address"]}
        component={"client"}
      />
    </Box>
  );
};

export default ClientsHome;
