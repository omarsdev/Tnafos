import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { Linkedin, Twitter, Link, Mail, Phone } from "react-feather";

import { PrimaryButton } from "../../../components";
import Login from "../../../assets/images/login.jpg";

export const MainCompany = () => {
  return (
    <Box w="300px" px="20px" py="20px" className="shadow-2xl rounded-3xl">
      <Image src={Login} w="100%" height="280px" className="rounded-3xl" />
      <Text fontSize="22px" mt="30px">
        Company Name
      </Text>
      <Text fontSize="18px" mt="30px">
        React Native combines the best parts of native development with React, a
        best-in-class JavaScript library for building user interfaces. React
        Native combines the best parts of native development with React, a
        best-in-class JavaScript library for building user interfaces.
      </Text>
      <Box h="1px" className="w-full" bgColor="#AEAEAE" mt="15px" />
      <Box mt="15px">
        <Flex direction="row">
          <Box
            borderRightWidth="1px"
            borderRightColor="#AEAEAE"
            flex={1}
            className="flex flex-col justify-center items-center"
          >
            <Text className="text-CPrimary" fontSize="25px">
              5+
            </Text>
            <Text fontSize="24px">Year</Text>
          </Box>
          <Box flex={1} className="flex flex-col justify-center items-center">
            <Text className="text-CPrimary" fontSize="25px">
              4.6
            </Text>
            <Text fontSize="24px">Review</Text>
          </Box>
        </Flex>
      </Box>
      <Box h="1px" className="w-full" bgColor="#AEAEAE" mt="15px" />
      <Box mt="15px">
        <Flex direction="row">
          <Box
            borderRightWidth="1px"
            borderRightColor="#AEAEAE"
            flex={1}
            className="flex flex-col justify-center items-center"
          >
            <Text className="text-CPrimary" fontSize="25px">
              60+
            </Text>
            <Text fontSize="24px">Client</Text>
          </Box>
          <Box flex={1} className="flex flex-col justify-center items-center">
            <Text className="text-CPrimary" fontSize="25px">
              97
            </Text>
            <Text fontSize="24px">Project</Text>
          </Box>
        </Flex>
      </Box>
      <Box h="1px" className="w-full" bgColor="#AEAEAE" mt="15px" />
      <Flex justifyContent="space-between" mt="30px">
        <Box
          w="50px"
          h="50px"
          className="w-full h-full rounded-full border-CPrimary flex justify-center items-center"
          borderWidth="1px"
        >
          <Linkedin className="w-5 h-5" />
        </Box>
        <Box
          w="50px"
          h="50px"
          className="w-full h-full rounded-full border-CPrimary flex justify-center items-center"
          borderWidth="1px"
        >
          <Twitter className="w-5 h-5" />
        </Box>
        <Box
          w="50px"
          h="50px"
          className="w-full h-full rounded-full border-CPrimary flex justify-center items-center"
          borderWidth="1px"
        >
          <Mail className="w-5 h-5" />
        </Box>
        <Box
          w="50px"
          h="50px"
          className="w-full h-full rounded-full border-CPrimary flex justify-center items-center"
          borderWidth="1px"
        >
          <Link className="w-5 h-5" />
        </Box>
      </Flex>
      <Box mt="15px">
        <PrimaryButton width="100%" name="CALL US" Logo={Phone} />
      </Box>
    </Box>
  );
};
