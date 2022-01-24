import React from "react";
import {
  List,
  ListItem,
  HStack,
  Box,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
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
      <HStack
        mb="2"
        key={item.id}
        ml={isChild ? 6 : 2}
        fontSize={{ base: "small", lg: "medium" }}
      >
        <Text textColor="#ffffff">{item.icon}</Text>
        <Text textColor="#ffffff">{item.title}</Text>
      </HStack>
    </Link>
  );
};

const NavbarItemText = ({ item }) => {
  return !!!item.to ? (
    <Accordion allowMultiple margin={0}>
      <AccordionItem border="0px">
        <AccordionButton padding={0} margin={0} color="white">
          <HStack
            flex="1"
            px={{ base: "1", lg: "2" }}
            mb="2"
            fontSize={{ base: "small", lg: "medium" }}
          >
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
      <Box px={{ base: "0.5", lg: "2" }} my={{ base: "0.5", lg: "2" }}>
        <Text
          textColor="#ffffff"
          fontWeight="normal"
          p={{ base: 0.4, lg: "1" }}
          opacity="0.50"
          fontSize={{ base: "xx-small", lg: "xs" }}
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
  return (
    <Box bg="brand.dark" overflowY="scroll" h="100vh" w={{ base: 60 }}>
      <LogoLink />

      <Box w={{ base: "auto" }}>
        <List gap="2">
          {SidebarMenu.map((item) => (
            <NavbarItem item={item} key={item.id} />
          ))}
        </List>
      </Box>
    </Box>
  );
};
