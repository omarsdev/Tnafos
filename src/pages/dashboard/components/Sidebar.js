import React, { useState } from "react";
import {
  List,
  ListItem,
  ListIcon,
  VStack,
  StackDivider,
  HStack,
  Box,
  Text,
  UnorderedList,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaAngleDown, FaAngleRight, FaHome } from "react-icons/fa";
import { Link, useRouteMatch } from "react-router-dom";
import { SidebarMenu } from "../../../config";

import { TnafosSearchLogo } from "../../../assets/icons/svg/TnafosSearchLogo";

const Heading = (heading) => {
  return <span>{SidebarMenu.heading}</span>;
};

const NavItem = ({ to, icon, title, submenu, heading }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  //*if nav-item is a link, then:
  if (to) {
    return (
      <List>
        <Link to="#" className="">
          <ListItem>
            <ListIcon as={FaHome} />
            {title}
          </ListItem>
        </Link>
      </List>
    );
  }
  return (
    <List>
      <Button onClick={handleToggle}>
        <FaAngleRight />
        {title}
      </Button>
      {isActive && Array.isArray(submenu) && (
        <UnorderedList>
          <Heading heading={heading} className="" />
          {submenu.map((item) => (
            <NavItem className="" {...item} />
          ))}
        </UnorderedList>
      )}
    </List>
  );
};

export const Sidebar = () => {
  let match = useRouteMatch();

  return (
    <Box className="bg-gray-800 w-52 h-screen">
      <Box className="h-28 w-full">
        <TnafosSearchLogo className="h-24 ml-3 w-28" />
      </Box>

      <Box className="css-0  w-auto">
        <List className="gap-y-2">
          {SidebarMenu.map((item, idxxx) => (
            <Box key={idxxx}>
              <Divider />
              <ListItem>
                <Box>
                  <Text
                    className="text-CWhite p-1 font-extralight"
                    fontSize="xs"
                  >
                    {item.heading}
                  </Text>
                  {item.id === 0 ? (
                    <Link to={`${match.url}`} key={idxxx}>
                      <HStack paddingX="1" className="py-2">
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
                                  className="font-medium"
                                  key={idx}
                                >
                                  <Box
                                    paddingY="2"
                                    paddingX="1"
                                    bg="transparent"
                                    width="60%"
                                    height="10"
                                    fontSize="sm"
                                    _hover="transparent"
                                    fontSize="md"
                                  >
                                    <HStack>
                                      <Text className="text-CWhite">
                                        {ele.icon}
                                      </Text>
                                      <Text className="text-CWhite">
                                        {ele.title}
                                      </Text>
                                    </HStack>
                                  </Box>
                                </Link>
                              ) : (
                                <Menu
                                  isLazy
                                  placement="bottom"
                                  preventOverflow="true"
                                >
                                  {(isOpen) => (
                                    <>
                                      <MenuButton
                                        isActive={isOpen}
                                        paddingY="2"
                                        paddingX="1"
                                        as={Button}
                                        _expanded={{
                                          bg: "gray.600",
                                        }}
                                        _focus={{ border: "hidden" }}
                                        rightIcon={
                                          isOpen ? (
                                            <FaAngleDown />
                                          ) : (
                                            <FaAngleRight />
                                          )
                                        }
                                        className="text-CWhite"
                                        bg="transparent"
                                        width="100%"
                                        height="10"
                                        fontSize="sm"
                                        _hover="transparent"
                                        fontSize="md"
                                      >
                                        <HStack>
                                          <Text>{ele.icon}</Text>
                                          <Text>{ele.title}</Text>
                                        </HStack>
                                      </MenuButton>
                                      <MenuList overflow="hidden">
                                        {ele.submenu.map((element, index) => (
                                          <MenuItem key={index} width="100%">
                                            <Link
                                              to={`${match.url}${element.to}`}
                                            >
                                              {element.title}
                                            </Link>
                                          </MenuItem>
                                        ))}
                                      </MenuList>
                                    </>
                                  )}
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
