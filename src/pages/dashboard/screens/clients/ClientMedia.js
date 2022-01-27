import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory, useParams } from "react-router-dom";
import {
  Box,
  Center,
  Spinner,
  VStack,
  Stack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";

import { NoData } from "../../components";

import { AxiosInstance } from "../../../../api";

const ClientMedia = () => {
  const [media, setMedia] = useState(null);

  const history = useHistory();
  const { uuid } = useParams();

  const getClientMedia = async () => {
    try {
      const res = await AxiosInstance.get(
        `/api/dashboard/customer/${uuid}/media`
      );
      console.log(res.data.data);
      setMedia(res.data.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/clientshome");
    }
  };

  useEffect(() => {
    getClientMedia();
  }, []);

  return !media ? (
    <Center h="70vh" w="100%">
      <Spinner size={{ base: "md", lg: "xl" }} color="#F8B916" />
    </Center>
  ) : media.length === 0 ? (
    <NoData component={"clientshome"} />
  ) : (
    <Center py="5">
      <Box
        my={{ base: 2, lg: 6 }}
        rounded="3xl"
        position="relative"
        bg="white"
        shadow="2xl"
        w={{ base: 200, sm: 260, md: 300, lg: 350 }}
        h={{ base: 350, sm: 360, md: 380, lg: 380 }}
      >
        <VStack spacing="20px" mx="5%" mt="5">
          {media.map((el, idx) => (
            <Stack key={idx}>
              <Text py="1" textColor="gray.600">
                {el}
              </Text>
            </Stack>
          ))}

          <Box fontSize={{ base: "x-small", sm: "sm", md: "md", lg: "large" }}>
            <IconButton
              justify={"center"}
              rounded={"full"}
              bg={"#F8B916"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "orange.400",
              }}
              icon={<AiOutlineHome />}
              onClick={() => {
                history.push("/dashboard/client");
              }}
            />
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

export default ClientMedia;
