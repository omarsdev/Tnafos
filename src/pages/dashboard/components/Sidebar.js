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

export const Sidebar = (id) => {
  //   const [navIndexClick, setNavIndexClick] = useState(null);
  let match = useRouteMatch();

  return (
    <Box>
      <Box>
        <HStack>
          <Image src="assets/icons/TnafosLogo" alt="Tnafos-logo" />
          <VStack spacing={0} align="stretch">
            <Text>tnafos</Text>
            <Text>تنافس</Text>
          </VStack>
        </HStack>
      </Box>

      <Box>
        <List>
          {SidebarMenu.map((item, idxxx) => (
            <Box key={idxxx}>
              <Divider />
              <ListItem>
                <Box>
                  <Text fontSize="xs">{item.heading}</Text>
                  {item.id === 0 ? (
                    <Link to={`${match.url}`} key={idxxx}>
                      <HStack>
                        {item.icon && <Text>{item.icon}</Text>}
                        {item.title && <Text>{item.title}</Text>}
                      </HStack>
                    </Link>
                  ) : (
                    <Box>
                      {item.navitem &&
                        item.navitem.map((ele, idx) => (
                          <List key={idx}>
                            <ListItem>
                              {ele.to && !ele.submenu ? (
                                <Link
                                  to={`${match.url}${ele.to}`}
                                  className="font-medium"
                                  key={idx}
                                >
                                  <Button>
                                    <HStack>
                                      <Text>{ele.icon}</Text>
                                      <Text>{ele.title}</Text>
                                    </HStack>
                                  </Button>
                                </Link>
                              ) : (
                                <Menu>
                                  <>
                                    <MenuButton
                                      as={Button}
                                      rightIcon={<FaAngleDown />}
                                    >
                                      {ele.title}
                                    </MenuButton>
                                    <MenuList>
                                      {ele.submenu.map((element, index) => (
                                        <MenuItem key={index}>
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
