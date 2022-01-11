import React from "react";
import {
  List,
  ListItem,
  HStack,
  Box,
  Text,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
} from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";
import { Link, useRouteMatch } from "react-router-dom";
import { SidebarMenu } from "../../../constants";

import { TnafosSearchLogo } from "../../../assets/icons/svg/TnafosSearchLogo";

export const Sidebar = () => {
  const match = useRouteMatch();

  return (
    <Box className="bg-CBlack w-52 h-screen">
      <Stack w-full h-32 ml="3" my="2">
        <Link to="/">
          <TnafosSearchLogo />
        </Link>
      </Stack>

      <Box className="css-0 w-auto">
        <List className="gap-y-2">
          {SidebarMenu.map((item, idxxx) => (
            <Box key={idxxx}>
              <Divider />
              <ListItem>
                <Box px="2" my="2">
                  <Text
                    className="text-CWhite p-1 font-extralight"
                    opacity="0.50"
                    fontSize="xs"
                  >
                    {item.heading}
                  </Text>
                  {item.id === 0 ? (
                    <Link to={`${match.url}`} key={idxxx}>
                      <HStack px="2" mb="2">
                        {item.icon && (
                          <Text className="text-CWhite">{item.icon}</Text>
                        )}
                        {item.title && (
                          <Text className="text-CWhite">{item.title}</Text>
                        )}
                      </HStack>
                    </Link>
                  ) : (
                    <Box color="gray.800">
                      {item.navitem &&
                        item.navitem.map((ele, idx) => (
                          <List key={idx}>
                            <ListItem color="gray.800">
                              {ele.to && !ele.submenu ? (
                                <Link
                                  to={`${match.url}${ele.to}`}
                                  className=" font-medium  hover: 'opacity-0'"
                                  key={idx}
                                >
                                  <Box
                                    paddingY="2"
                                    paddingX="1"
                                    bg="transparent"
                                    width="60%"
                                    height="10"
                                  >
                                    <HStack
                                      px="2"
                                      className="text-CWhite text-opacity-60"
                                      _hover={{
                                        textColor: "#FFFFFF",
                                      }}
                                      _focus={{
                                        textColor: "#FFFFFF",
                                      }}
                                    >
                                      <Text fontSize="medium">{ele.icon}</Text>
                                      <Text fontSize="medium">{ele.title}</Text>
                                    </HStack>
                                  </Box>
                                </Link>
                              ) : (
                                <Menu
                                  isLazy
                                  placement="bottom"
                                  preventOverflow="true"
                                  closeOnSelect="true"
                                >
                                  <>
                                    <MenuButton
                                      paddingY="2"
                                      paddingX="1"
                                      as={Button}
                                      _expanded={{
                                        bg: "transparent",
                                      }}
                                      rightIcon={<FaAngleRight />}
                                      className="text-CWhite text-opacity-60"
                                      bg="transparent"
                                      width="100%"
                                      height="10"
                                      fontSize="md"
                                      fontWeight="light"
                                      _hover={{
                                        textColor: "#FFFFFF",
                                      }}
                                      _focus={{
                                        textColor: "#FFFFFF",
                                        border: "hidden",
                                      }}
                                    >
                                      <HStack px="2">
                                        <Text>{ele.icon}</Text>
                                        <Text>{ele.title}</Text>
                                      </HStack>
                                    </MenuButton>
                                    <MenuList overflow="hidden" width="30">
                                      {ele.submenu.map((element, index) => (
                                        <Link
                                          to={`${match.url}${element.to}`}
                                          key={index}
                                        >
                                          <MenuItem width="100%">
                                            {element.title}
                                          </MenuItem>
                                        </Link>
                                      ))}
                                    </MenuList>
                                  </>
                                </Menu>
                              )}
                            </ListItem>
                          </List>
                        ))}
                    </Box>
                  )}
                </Box>
              </ListItem>
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};
