import React, { useContext, useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";

import { SearchDataContext } from "../../../context/SearchDataContext";

import { CircularProgress } from "@mui/material";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiBadge from "components/SuiBadge";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const CardItem = ({ data, isSelected, isCompany }) => {
  const match = useRouteMatch();
  const history = useHistory();

  const { vendorsListProviderValue, myListDataProviderValue } =
    useContext(SearchDataContext);
  const { vendorsList, setVendorsList } = vendorsListProviderValue;
  const { myListData, setMyListData } = myListDataProviderValue;

  const [loading, setLoading] = useState(false);
  const [addedToMyList, setAddedToMyList] = useState(false);

  const addToMyListHandler = () => {
    setLoading(true);
    if (match.params.serviceId) {
      if (myListData.findIndex((x) => x.uuid === vendorsList.uuid) === -1) {
        setMyListData([...myListData, vendorsList]);
      }
    } else {
      if (myListData.findIndex((x) => x.uuid === data.uuid) === -1) {
        setMyListData([...myListData, data]);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (match.params.serviceId) {
      if (myListData.findIndex((x) => x.uuid === vendorsList?.uuid) !== -1) {
        setAddedToMyList(true);
        console.log(vendorsList.uuid);
      }
    } else {
      if (myListData.findIndex((x) => x.uuid === data.uuid) !== -1) {
        setAddedToMyList(true);
      }
    }
  }, [data?.uuid, match.params.serviceId, myListData, vendorsList?.uuid]);

  return !vendorsList && isSelected ? (
    <CircularProgress color="info" />
  ) : (
    <Card className="overflow-visible">
      <SuiBox p={2} mt={2}>
        <Grid container alignItems="center">
          <SuiBox
            component="img"
            src={data?.srcImg || "https://bit.ly/sage-adebayo"}
            alt="Segun Adebayo"
            boxShadow="lg"
            borderRadius="lg"
            width="100%"
            objectFit="cover"
            rounded="3xl"
          />
        </Grid>
      </SuiBox>

      <SuiBox m={0} mb={2} px={2}>
        <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
          <SuiTypography
            variant="body2"
            textColor="text"
            my={1}
            display="flex"
            justifyContent="center"
            textAlign="center"
          >
            <strong>
              {vendorsList && isSelected
                ? vendorsList.description
                : data?.description
                ? data?.description
                : `React Native combines the best parts of native development with React,
              a best-in-class JavaScript library for building user interfaces.`}
            </strong>{" "}
          </SuiTypography>
        </SuiBox>
        <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
          <SuiTypography
            variant="body2"
            textColor="text"
            justifyContent="center"
            textAlign="center"
          >
            {vendorsList && isSelected
              ? vendorsList.name
              : data?.name
              ? data?.name
              : "React Native Mobile App (iOS & Android)"}
          </SuiTypography>
        </SuiBox>

        {!isCompany ? (
          <SuiBox
            width="100%"
            px="3%"
            justifyContent="center"
            alignItems="center"
            display="grid"
            mt={2}
          >
            {!isSelected && (
              <SuiBox mb={1}>
                <SuiButton
                  component={Link}
                  width="100%"
                  to={`${match.url}/${data.uuid}`}
                  variant="gradient"
                  color="warning"
                  size="small"
                  onClick={() => setVendorsList(null)}
                >
                  view more info
                </SuiButton>
              </SuiBox>
            )}
            <SuiButton
              variant="gradient"
              component={Link}
              color="dark"
              size="small"
              onClick={addToMyListHandler}
            >
              {addedToMyList ? "Added" : "Add to list"}
            </SuiButton>
          </SuiBox>
        ) : (
          <SuiBox
            display="flex"
            width="100%"
            my={2}
            justifyContent="space-around"
            alignItems="center"
          >
            {" "}
            <SuiBadge
              variant="contained"
              color="warning"
              badgeContent="Starting from 7500 SAR"
              container
            />
          </SuiBox>
        )}
      </SuiBox>
    </Card>
  );
};
export default CardItem;
