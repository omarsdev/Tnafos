import React, { useState, useEffect } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { CustomTable } from "../../components";
import { AxiosInstance } from "../../../../api";

const IncomingEstimates = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const history = useHistory();

  const getIncomingEst = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/estimate/incoming");
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
    getIncomingEst();
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
          Incoming Estimates
        </Heading>
      </HStack>

      <CustomTable
        list={list}
        component={"estimate"}
        theHeading="List of incoming estimates"
        thData={[
          "Transaction-ID",
          "Subject",
          "Name",
          "Date",
          "Company",
          "Valid-till",
          "Status",
          "Action",
        ]}
        listData={[
          "uuid",
          "subject",
          "assigned_to",
          "date",
          "company_name",
          "valid_till",
          "status",
        ]}
      />
    </Box>
  );
};

export default IncomingEstimates;
