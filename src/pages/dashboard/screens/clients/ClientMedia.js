import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  useHistory,
  useParams,
} from "react-router-dom";
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

export const ClientMedia = () => {
  const [media, setMedia] = useState([]);

  const match = useRouteMatch();
  const [card, setCard] = useState(null);

  const history = useHistory();

  const { uuid } = useParams();

  const getClientMedia = async () => {
    await AxiosInstance.get(`/api/dashboard/customer/${uuid}/media`)
      .then((res) => {
        console.log(res.data.data);
        setMedia(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        history.push("/dashboard/clientshome");
      });
  };

  useEffect(() => {
    getClientMedia();
  }, []);

  return (
    <Switch>
      <Route path={`${match.path}`}>
        {!media ? (
          <Center h="70vh" w="100%">
            <Spinner size="xl" color="#F8B916" />
          </Center>
        ) : media.length === 0 ? (
          <NoData component={"clientshome"} />
        ) : (
          <Center py="5">
            <Box
              className="rounded-3xl relative bg-white shadow-2xl"
              w="350px"
              h="200px"
            >
              <VStack spacing="20px" mx="5%" mt="5">
                {media.map((el, idx) => (
                  <Stack key={idx}>
                    <Text py="1" textColor="gray.600">
                      {el}
                    </Text>
                  </Stack>
                ))}

                <Box>
                  <IconButton
                    justify={"center"}
                    fontSize={"lg"}
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
                      history.push("/dashboard/clientshome");
                    }}
                  />
                </Box>
              </VStack>
            </Box>
          </Center>
        )}
      </Route>
      <Route path={`${match.path}/nodata`} component={NoData}></Route>
    </Switch>
  );
};
