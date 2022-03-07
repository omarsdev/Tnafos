import React, { useContext } from "react";

import { SearchDataContext } from "../../../context";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

const MyListItem = ({ data }) => {
  return <SuiBox p={2}> {data.name}</SuiBox>;
};

const MyList = () => {
  const { myListDataProviderValue } = useContext(SearchDataContext);
  const { myListData } = myListDataProviderValue;

  return (
    <Card dark className="h-100">
      <SuiBox p={3}>
        <SuiTypography variant="h5" fontWeight="bold">
          My List
        </SuiTypography>
        <SuiBox>
          <Divider />
        </SuiBox>

        <SuiBox display="flex" py={1} pr={2}>
          {myListData.map((e, i) => (
            <SuiTypography
              variant="button"
              fontWeight="bold"
              textTransform="capitalize"
              key={i}
            >
              <MyListItem data={e} />
            </SuiTypography>
          ))}
        </SuiBox>
        <Divider />

        <SuiBox ml={{ xs: 0, sm: "auto" }} mt={{ xs: 2, sm: 0 }}>
          <SuiButton
            variant="gradient"
            buttonColor="info"
            size="small"
            fullWidth
          >
            PROCCED
          </SuiButton>
        </SuiBox>
      </SuiBox>
    </Card>
  );
};
export default MyList;
