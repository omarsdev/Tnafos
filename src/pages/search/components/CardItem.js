import React from "react";
import { Box, Image, VStack, Text, HStack } from "@chakra-ui/react";

import { PrimaryButton, SecondaryButton } from "../../../components";

export const CardItem = ({ title, srcImg, body, isSelected, isCompany }) => {
  return (
    <Box
      className="rounded-3xl shadow-2xl relative bg-white"
      w="300px"
      h="500px"
    >
      <VStack spacing="20px" mx="5%">
        <Image
          src={srcImg || "https://bit.ly/sage-adebayo"}
          alt="Segun Adebayo"
          objectFit="cover"
          rounded="3xl"
          w="100%"
          h="160px"
          marginTop={"20px"}
        />
        <Text fontSize="21px" lineHeight="7">
          {title || "React Native Mobile App (iOS & Android)"}
        </Text>

        <Text h="100px" fontSize="17px" lineHeight="23px">
          {body ||
            `React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces.`}
        </Text>
        {!isCompany ? (
          <HStack mb={0} bottom="25px" position="absolute">
            {!isSelected && <SecondaryButton name="View" />}
            <PrimaryButton name="Add To List" />
          </HStack>
        ) : (
          <HStack mb={0} bottom="25px" position="absolute" spacing="70">
            <Text>Satrting from</Text>
            <Text fontSize="26px">7500 SAR</Text>
          </HStack>
        )}
      </VStack>
    </Box>
  );
};
