import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { Linkedin, Twitter, Link, Mail, Phone } from "react-feather";

import { PrimaryButton } from "../../../components";
import Login from "../../../assets/images/login.jpg";

export const MainCompany = () => {
  return (
    <Box
      // w="300px"
      w={{ base: "auto", md: "300px" }}
      px="20px"
      py="20px"
      shadow="2xl"
      rounded="3xl"
    >
      <Image
        src={Login}
        w="100%"
        height="280px"
        rounded="3xl"
        objectFit="cover"
      />
      <Text fontSize="22px" mt="30px">
        Company Name
      </Text>
      <Text fontSize="18px" mt="30px">
        React Native combines the best parts of native development with React, a
        best-in-class JavaScript library for building user interfaces. React
        Native combines the best parts of native development with React, a
        best-in-class JavaScript library for building user interfaces.
      </Text>
      <Box h="1px" w="full" bgColor="#AEAEAE" mt="15px" />
      <Box mt="15px">
        <Flex direction="row">
          <Box
            borderRightWidth="1px"
            borderRightColor="#AEAEAE"
            display="flex"
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="brand.primary" fontSize="25px">
              5+
            </Text>
            <Text fontSize="24px">Year</Text>
          </Box>
          <Box
            display="flex"
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="brand.primary" fontSize="25px">
              4.6
            </Text>
            <Text fontSize="24px">Review</Text>
          </Box>
        </Flex>
      </Box>
      <Box h="1px" w="full" bgColor="#AEAEAE" mt="15px" />
      <Box mt="15px">
        <Flex direction="row">
          <Box
            borderRightWidth="1px"
            borderRightColor="#AEAEAE"
            display="flex"
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="brand.primary" fontSize="25px">
              60+
            </Text>
            <Text fontSize="24px">Client</Text>
          </Box>
          <Box
            display="flex"
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="brand.primary" fontSize="25px">
              97
            </Text>
            <Text fontSize="24px">Project</Text>
          </Box>
        </Flex>
      </Box>
      <Box h="1px" w="full" bgColor="#AEAEAE" mt="15px" />
      <Flex justifyContent="space-between" mt="30px">
        <Box
          w="50px"
          h="50px"
          rounded="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderColor="brand.primary"
          borderWidth="1px"
        >
          <Linkedin w="5" h="5" />
        </Box>
        <Box
          w="50px"
          h="50px"
          rounded="full"
          borderColor="brand.primary"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderWidth="1px"
        >
          <Twitter w="5" h="5" />
        </Box>
        <Box
          w="50px"
          h="50px"
          rounded="full"
          borderColor="brand.primary"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderWidth="1px"
        >
          <Mail w="5" h="5" />
        </Box>
        <Box
          w="50px"
          h="50px"
          rounded="full"
          borderColor="brand.primary"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderWidth="1px"
        >
          <Link w="5" h="5" />
        </Box>
      </Flex>
      <Box mt="15px">
        <PrimaryButton width="100%" name="CALL US" Logo={Phone} />
      </Box>
    </Box>
  );
};
