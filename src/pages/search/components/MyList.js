import React, { useContext } from "react";

import { SearchDataContext } from "../../../context";

import { BsCart3 } from "react-icons/bs";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

const MyListItem = ({ data }) => {
  return (
    <SuiBox p={2} color="white" textAlign="center" justifyContent="center">
      {" "}
      {data.name}
    </SuiBox>
  );
};

const MyList = () => {
  const { myListDataProviderValue } = useContext(SearchDataContext);
  const { myListData } = myListDataProviderValue;

  return (
    <SuiBox p={2} bgColor="dark" variant="gradient" borderRadius="xl">
      <SuiTypography variant="h5" fontWeight="bold" color="white">
        My List
      </SuiTypography>
      <SuiBox>
        <Divider />
      </SuiBox>

      <SuiBox display="flex" py={1} pr={2}>
        {myListData.map((e, i) => (
          <SuiBox
            // variant="button"
            fontWeight="bold"
            textTransform="capitalize"
            key={i}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <BsCart3 color="white" />

            <MyListItem data={e} />
            <Divider color="white" />
          </SuiBox>
        ))}
      </SuiBox>
      <Divider />

      <SuiBox ml={{ xs: 0, sm: "auto" }} mt={{ xs: 2, sm: 0 }}>
        <SuiButton variant="outlined" buttonColor="dark" size="small" fullWidth>
          PROCCED
        </SuiButton>
      </SuiBox>
    </SuiBox>
  );
};
export default MyList;
