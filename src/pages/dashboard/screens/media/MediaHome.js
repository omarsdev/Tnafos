import React, { useEffect, useState } from "react";
import {
  HStack,
  Button,
  IconButton,
  Box,
  Heading,
  Center,
  Spinner,
  Grid,
} from "@chakra-ui/react";
import { useParams, useRouteMatch, useHistory } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import MediaCard from "./MediaCard";

import { AxiosInstance } from "../../../../api";

const MediaHome = () => {
  const [mediaList, setMediaList] = useState([]);
  const match = useRouteMatch();
  const history = useHistory();
  const { uuid } = useParams();

  //* represent all services:
  const showMediaList = async () => {
    await AxiosInstance.get("/api/dashboard/media/")
      .then((res) => {
        setMediaList(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showMediaList();
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
          Media
        </Heading>

        <IconButton
          as={Button}
          colorScheme="yellow"
          size="lg"
          icon={<AiOutlinePlus />}
          rounded="full"
          onClick={() => {
            history.push(`${match.url}/addmedia`);
          }}
        />
      </HStack>

      {!mediaList ? (
        <Center h="70vh" w="100%">
          <Spinner size="xl" color="#F8B916" />
        </Center>
      ) : (
        <Grid templateColumns="repeat(3, 1fr)" gap={20} mb="20px">
          {mediaList.map((media, idx) => (
            <MediaCard info={media} key={idx} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default MediaHome;
