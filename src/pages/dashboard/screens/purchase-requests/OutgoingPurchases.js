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
      history.push("/dashboard/purchaseshome");
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
    <Box w="full" overflowY="scroll" padding="10">
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize="xx-large"
          fontWeight="lg"
          alignItems="baseline"
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
