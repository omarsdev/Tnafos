import React, { useState, useEffect } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useRouteMatch, useHistory, useParams } from "react-router-dom";
import { CustomTable } from "../../components";

import { AxiosInstance } from "../../../../api";

const OutgoingProposal = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const history = useHistory();

  const [rowsNumber, setRowsNumber] = useState("10");

  const estOutgoingList = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/proposal/outgoing");
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
    estOutgoingList();
  }, []);

  return (
    <Box w="full" overflowY="scroll" padding={{ base: 4, sm: 4, md: 4, lg: 6 }}>
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
          Outgoing Proposals
        </Heading>
      </HStack>

      <CustomTable
        thHeading="List of outgoing proposals"
        list={list}
        thData={[
          "Transaction-ID",
          "Subject",
          "Date",
          "Valid-till",
          "Status",
          "Action",
        ]}
        listData={["uuid", "subject", "date", "valid_till", "status"]}
        component={"proposal"}
      />
    </Box>
  );
};
export default OutgoingProposal;
