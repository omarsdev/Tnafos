import React, { useState } from "react";
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
  Center,
  Flex,
} from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";
import SidebarMenu from "../../../constants/SidebarMenu";

import { TnafosSearchLogo } from "../../../assets/icons/svg/TnafosSearchLogo";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const LogoLink = ({ isToggleOpen }) => {
  return (
    <Flex mt="1rem" w="100%" pl={isToggleOpen ? "1rem" : "1.5rem"}>
      <Link to="/">
        <TnafosSearchLogo
          height={isToggleOpen ? "3rem" : "1.5rem"}
          isFullLogo={!isToggleOpen}
        />
      </Link>
    </Flex>
  );
};

const NavbarItemLink = ({ item, isChild, isToggleOpen }) => {
  let { path } = useRouteMatch();
  return (
    <Link to={`${path}${item.to ?? "/"}`}>
      <Flex
        mb="2"
        key={item.id}
        fontSize={{ base: "small" }}
        pl={isToggleOpen && "1rem"}
      >
        <Flex
          justify={{ base: isToggleOpen ? "start" : "center" }}
          align="center"
          w="100%"
        >
          <Text textColor="#ffffff">{item.icon}</Text>
          {(isToggleOpen || isChild) && (
            <Text textColor="#ffffff" pl="2">
              {item.title}
            </Text>
          )}
        </Flex>
      </Flex>
    </Link>
  );
};

const NavbarItemText = ({ item, isToggleOpen }) => {
  return !!!item.to ? (
    <Flex
      justify={{ base: isToggleOpen ? "start" : "center" }}
      align="center"
      w="100%"
      pl={isToggleOpen && "1rem"}
    >
      <Accordion w="full" allowMultiple margin={0}>
        <AccordionItem border="0px">
          <AccordionButton padding={0} margin={0} color="white">
            <HStack
              flex="1"
              mb="2"
              fontSize={{ base: "small" }}
              justify={{ base: isToggleOpen ? "start" : "center" }}
              alignItems="center"
            >
              {item.icon}
              {isToggleOpen && <Text>{item.title}</Text>}
              {isToggleOpen && <AccordionIcon mr={2} />}
            </HStack>
          </AccordionButton>
          <AccordionPanel padding={0} backgroundColor={"grey"}>
            {item.items.map((item) => (
              <NavbarItemLink key={item.id} item={item} isChild={true} />
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  ) : (
    <NavbarItemLink key={item.id} item={item} isToggleOpen={isToggleOpen} />
  );
};

const NavbarItem = ({ item, isToggleOpen }) => {
  return (
    <ListItem>
      <Box px={{ base: "1rem" }} my={{ base: "2" }}>
        <Text
          textColor="#ffffff"
          fontWeight="normal"
          opacity="0.50"
          fontSize={{ base: "xs" }}
          textAlign={!isToggleOpen && "center"}
        >
          {item.heading}
        </Text>
      </Box>
      {!!item.items &&
        item.items.map((item) => (
          <NavbarItemText
            item={item}
            key={item.id}
            isToggleOpen={isToggleOpen}
          />
        ))}
    </ListItem>
  );
};

export const Sidebar = ({ isOpen }) => {
  const [isToggleOpen, setIsToggleOpen] = useState(true);

  const handleIsToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <Box
      bg="brand.dark"
      overflowY="scroll"
      h="100vh"
      w={{ base: isToggleOpen ? 60 : 20 }}
      display={{ base: isOpen ? "block" : "none" }}
    >
      <LogoLink isToggleOpen={isToggleOpen} />

      <Box w={{ base: "auto" }}>
        <List gap="2">
          {SidebarMenu.map((item) => (
            <NavbarItem item={item} key={item.id} isToggleOpen={isToggleOpen} />
          ))}
        </List>
        <Center>
          {isToggleOpen ? (
            <AiOutlineArrowLeft
              size="20"
              onClick={handleIsToggleOpen}
              color="white"
            />
          ) : (
            <AiOutlineArrowRight
              size="20"
              onClick={handleIsToggleOpen}
              color="white"
            />
          )}
        </Center>
      </Box>
    </Box>
  );
};
