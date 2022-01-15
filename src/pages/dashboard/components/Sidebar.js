import React from "react";
import {
  List,
  ListItem,
  HStack,
  Box,
  Text,
  // Button,
  // Divider,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";
import { Link, useRouteMatch } from "react-router-dom";
import SidebarMenu from "../../../constants/SidebarMenu";

import { TnafosSearchLogo } from "../../../assets/icons/svg/TnafosSearchLogo";

const LogoLink = () => {
  return (
    <Stack w={"w-full"} h={"h-32"} ml="3" my="2">
      <Link to="/">
        <TnafosSearchLogo />
      </Link>
    </Stack>
  );
};

const NavbarItemLink = ({ item, isChild }) => {
  let { path } = useRouteMatch();
  return (
    <Link to={`${path}${item.to ?? "/"}`}>
      <HStack mb="2" key={item.id} ml={isChild ? 6 : 2}>
        <Text className="text-CWhite">{item.icon}</Text>
        <Text className="text-CWhite">{item.title}</Text>
      </HStack>
    </Link>
  );
};

const NavbarItemText = ({ item }) => {
  return !!!item.to ? (
    <Accordion allowMultiple margin={0}>
      <AccordionItem border="0px">
        <AccordionButton padding={0} margin={0} color="white">
          <HStack flex="1" px="2" mb="2">
            <Text>{item.icon}</Text>
            <Text>{item.title}</Text>
          </HStack>
          <AccordionIcon mr={2} />
        </AccordionButton>
        <AccordionPanel padding={0} backgroundColor={"grey"}>
          {item.items.map((item) => (
            <NavbarItemLink key={item.id} item={item} isChild={true} />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ) : (
    <NavbarItemLink key={item.id} item={item} />
  );
};

const NavbarItem = ({ item }) => {
  return (
    <ListItem>
      <Box px="2" my="2">
        <Text
          className="text-CWhite p-1 font-extralight"
          opacity="0.50"
          fontSize="xs"
        >
          {item.heading}
        </Text>
      </Box>
      {!!item.items &&
        item.items.map((item) => <NavbarItemText item={item} key={item.id} />)}
    </ListItem>
  );
};

export const Sidebar = () => {
  const match = useRouteMatch();
  return (
    <Box className="bg-CBlack w-60 h-screen overflow-scroll">
      <LogoLink />

      <Box className="css-0 w-auto">
        <List className="gap-y-2">
          {SidebarMenu.map((item) => (
            <NavbarItem item={item} key={item.id} />
          ))}
        </List>
      </Box>
    </Box>
  );
};
