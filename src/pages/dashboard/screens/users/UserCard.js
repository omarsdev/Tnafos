import {
  IconButton,
  Box,
  Text,
  Button,
  Input,
  HStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
  Avatar,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import { FiEdit } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
  Link,
} from "react-router-dom";
import { getUser, updateUserInfo } from "../../../../utils";

export const UserCard = () => {
  const [card, setCard] = useState(null);
  const { uuid } = useParams();
  const history = useHistory();
  const match = useRouteMatch();
  const [input, setInput] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  // const [errors, setErrors] = useState(null);

  const Details = async () => {
    const resp = await getUser(uuid);

    if (resp.success) {
      setCard(resp.data);
    } else if (!resp.success && resp.error) {
      history.push("/dashboard/user");
    } else if (!resp.success && !resp.error) {
      history.push("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const fetchData = async () => {
    const Data = await getUser(uuid);
    if (Data.success) {
      setInput(Data.data);
    }
  };

  useEffect(() => {
    Details();
    fetchData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const resp = await updateUserInfo(uuid, input);
    if (resp.success) {
      history.push(`/dashboard/user`);
    } else {
      // setErrors(resp);
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/user");
  };

  return (
    <>
      <Switch>
        <Route exact path={`${match.path}`}>
          {/* representing user credencials */}
          <Center>
            <Box
              mt="30px"
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
            >
              <Avatar
                size={"2xl"}
                src={
                  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                }
                alt="user-img"
                mb={4}
                pos={"relative"}
              />

              <Heading fontSize={"2xl"} fontFamily={"sans-serif"} mb={4}>
                {card?.first_name}
                {card?.last_name}
              </Heading>
              <Text
                fontWeight={600}
                color={"gray.500"}
                mb={2}
                fontFamily={"sans-serif"}
              >
                Telephone: {card?.phone_number}
              </Text>
              <Text
                fontWeight={600}
                color={"gray.500"}
                mb={2}
                fontFamily={"sans-serif"}
              >
                E-mail: {card?.email}
              </Text>
              <Text
                fontWeight={600}
                color={"gray.500"}
                mb={2}
                fontFamily={"sans-serif"}
              >
                Id :{card?.uuid}
              </Text>

              <Link>
                <IconButton
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                  icon={<FiEdit />}
                  onClick={onOpen}
                />
              </Link>
            </Box>
          </Center>

          {/* updating user info. */}

          {input ? (
            <Drawer
              isOpen={isOpen}
              placement="right"
              initialFocusRef={firstField}
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">
                  Edit your Info by filling up this form
                </DrawerHeader>

                <DrawerBody>
                  <form onSubmit={(ev) => handleUpdate(ev)}>
                    <label className="w-32 text-right">
                      First Name :
                      <Input
                        size="md"
                        type="text"
                        name="first_name"
                        value={input.first_name}
                        required
                        onChange={(ev) => handleChange(ev)}
                        autoComplete="off"
                        autoFocus="off"
                      />
                    </label>

                    <label className="w-32 text-right">
                      Last Name:
                      <Input
                        size="md"
                        type="text"
                        name="last_name"
                        value={input.last_name}
                        required
                        onChange={(ev) => handleChange(ev)}
                        autoComplete="off"
                        autoFocus="off"
                      />
                    </label>

                    <label className="w-32 text-right">
                      Phone Number:
                      <Input
                        size="md"
                        type="text"
                        name="phone_number"
                        value={input.phone_number}
                        required
                        onChange={(ev) => handleChange(ev)}
                        autoComplete="off"
                      />
                    </label>

                    <label className="w-32 text-right">
                      Email:
                      <Input
                        size="md"
                        type="email"
                        name="email"
                        value={input.email}
                        required
                        onChange={(ev) => handleChange(ev)}
                        autoComplete="off"
                        placeholder="info@company.com"
                      />
                    </label>
                    <HStack>
                      <Button onClick={(ev) => handleUpdate(ev)}>UPDATE</Button>
                      <Button onClick={handleCancel}>CANCEL</Button>
                    </HStack>
                  </form>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          ) : null}
        </Route>
      </Switch>
    </>
  );
};
