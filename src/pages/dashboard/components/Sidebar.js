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
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import { Link, useRouteMatch } from "react-router-dom";
import { SidebarMenu } from "../../../config";
import { FaHome, FaAngleRight } from "react-icons/fa";

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
    <Box className="bg-gray-800 w-44 h-screen">
      <Box className="h-24 items-center w-full">
        {/* <HStack className="flex flex-row h-18 items-center justify-center p-5">
          <Box className="">
            <Image src="/assets/icons/svg/TnafosLogo.svg" alt="Tnafos-logo" />
          </Box>
          <VStack spacing={0} align="stretch">
            <Text className="h-8 w-20 text-CWhite">tnafos</Text>
            <Text className="h-8 w-20 text-CWhite">تنافس</Text>
          </VStack>
        </HStack> */}
        <TnafosSearchLogo />
      </Box>

      <Box className="css-0  w-auto">
        <List className="gap-y-2">
          {SidebarMenu.map((item, idxxx) => (
            <Box key={idxxx}>
              <Divider />
              <ListItem>
                <Box>
                  <Text className="text-CWhite p-1" fontSize="xs">
                    {item.heading}
                  </Text>
                  {item.id === 0 ? (
                    <Link to={`${match.url}`} key={idxxx}>
                      <HStack className="py-2">
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
                                  // bg="transparent"
                                  // width="60%"
                                  // height="10"
                                  // fontSize="sm"
                                  // _hover="transparent"
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
                                <Menu placement="bottom">
                                  <>
                                    <MenuButton
                                      // as={Button}
                                      // rightIcon={<FaAngleDown />}
                                      className="text-CWhite"
                                      // bg="transparent"
                                      // width="100%"
                                      // height="10"
                                      // fontSize="sm"
                                      // _hover="transparent"
                                    >
                                      <HStack>
                                        <Text>{ele.icon}</Text>
                                        <Text>{ele.title}</Text>
                                      </HStack>
                                    </MenuButton>
                                    <MenuList w="20">
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
