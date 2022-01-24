import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Image,
  VStack,
  Text,
  HStack,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";

import { PrimaryButton, SecondaryButton } from "../../../components";
import { SearchDataContext } from "../../../context";

export const CardItem = ({ data, isSelected, isCompany }) => {
  const match = useRouteMatch();

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

  return (
    <Box
      rounded="3xl"
      shadow="2xl"
      position="relative"
      backgroundColor="brand.white"
      // w="260px"
      // h="500px"
    >
      {!vendorsList && isSelected ? (
        <Center h="100vh" w="100%">
          <Spinner size="xl" color="#F8B916" />
        </Center>
      ) : (
        <VStack spacing="20px" mx="5%">
          <Image
            src={data?.srcImg || "https://bit.ly/sage-adebayo"}
            alt="Segun Adebayo"
            objectFit="cover"
            rounded="3xl"
            w="100%"
            h="160px"
            marginTop={"20px"}
          />
          <Text fontSize="21px" lineHeight="7">
            {vendorsList && isSelected
              ? vendorsList.name
              : data?.name
              ? data?.name
              : "React Native Mobile App (iOS & Android)"}
          </Text>

          <Text h="100px" fontSize="17px" lineHeight="23px">
            {vendorsList && isSelected
              ? vendorsList.description
              : data?.description
              ? data?.description
              : `React Native combines the best parts of native development with React,
              a best-in-class JavaScript library for building user interfaces.`}
          </Text>
          {!isCompany ? (
            <HStack mb={0} bottom="25px" position="absolute">
              {!isSelected && (
                <Link to={`${match.url}/${data.uuid}`}>
                  <SecondaryButton
                    name="View"
                    width={"120px"}
                    onClick={() => setVendorsList(null)}
                  />
                </Link>
              )}

              <PrimaryButton
                name={addedToMyList ? "Added" : "Add To List"}
                width={"120px"}
                onClick={addToMyListHandler}
                loadingButton={loading}
                buttonType="submit"
              />
            </HStack>
          ) : (
            <HStack mb={0} bottom="25px" position="absolute" spacing="70">
              <Text>Satrting from</Text>
              <Text fontSize="26px">7500 SAR</Text>
            </HStack>
          )}
        </VStack>
      )}
    </Box>
  );
};
