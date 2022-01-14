import React from "react";
import { useHistory, useRouteMatch, Link } from "react-router-dom";

const OutgoingProposal = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const match = useRouteMatch();
  const history = useHistory();

  //* representing certain number of rows based on select option:
  const [rowsNumber, setRowsNumber] = useState("10");

  const estOutgoingList = async () => {
    await AxiosInstance.get("/api/dashboard/estimate/outgoing")
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

  useEffect(() => {
    estOutgoingList();
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
