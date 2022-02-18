import React, { useState, useEffect } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useRouteMatch, useHistory, useParams } from "react-router-dom";
import { CustomTable } from "../../components";

import { AxiosInstance } from "../../../../api";

const OutgoingPurchases = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const history = useHistory();

  const purOutgoingList = async () => {
    try {
      const res = await AxiosInstance.get(
        "api/dashboard/purchase-request/outgoing"
      );
      setList(res.data.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/purchase-request");
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
    purOutgoingList();
  }, []);

  return (
    <Box w="full" padding={{ base: 4, md: 4, lg: 6 }}>
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize={{ base: "large", md: "x-large", lg: "xx-large" }}
          fontWeight="lg"
          alignItems="baseline"
          mb={{ base: 2, lg: 4 }}
        >
          Outgoing Purchases
        </Heading>
      </HStack>

      <CustomTable
        thHeading="List of outgoing purchase-requests"
        thData={["Transaction-ID", "Details", "Date", "options"]}
        list={list}
        listData={["uuid", "details", "date"]}
        component="purchase-requset"
      />
    </Box>
  );
};

export default OutgoingPurchases;
