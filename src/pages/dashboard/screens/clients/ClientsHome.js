import React, { useState, useEffect } from "react";
import { Box, Heading, Button, IconButton, HStack } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
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
    <Box w="full" padding={{ base: 1, sm: 3, md: 4, lg: 6 }}>
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize={{
            base: "large",
            sm: "large",
            md: "x-large",
            lg: "xx-large",
          }}
          fontWeight="lg"
          alignItems="baseline"
          mb={{ base: 2, lg: 4 }}
        >
          Clients
        </Heading>

        <Link to={`${match.url}/addclient`}>
          <Button
            colorScheme="yellow"
            size={{
              base: "x-small",
              sm: "x-small",
              md: "md",
              lg: "large",
            }}
            rounded="full"
            h={{ base: 6, sm: 8, md: 10, lg: 12 }}
            w={{ base: 6, sm: 8, md: 10, lg: 12 }}
          >
            <AiOutlinePlus
              fontSize={{
                base: "xx-small",
                sm: "small",
                md: "md",
                lg: "large",
              }}
            />
          </Button>
        </Link>
      </HStack>
      <CustomTable
        theHeading="List of clients"
        thData={["UUID", "Company Name", "Phone", "Website", "actions"]}
        list={list}
        listData={["uuid", "company_name", "phone", "website"]}
        component={"client"}
      />
    </Box>
  );
};

export default ClientsHome;
