import React from "react";
import {
  Box,
  Heading,
  Button,
  IconButton,
  HStack,
  Center,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Divider,
  Text,
  Spacer,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { BiUpload, BiChevronsUp } from "react-icons/bi";

export const PageLayout = ({ heading, th, idx, data }) => {
  return (
    <Box className="rounded-3xl shadow-2xl relative bg-white">
      <Text
        py="3"
        px="3"
        borderWidth="2px"
        bg="#333333"
        width="100%"
        roundedTop="2xl"
        fontSize="lg"
        color="white"
      >
        {heading}
      </Text>
      <Flex w="full" height="45px" my="8" spacing="30px">
        <HStack pl="5">
          <SecondaryButton
            rounded="full"
            width="100px"
            height="40px"
            variant="outline"
            colorScheme="gray"
            name="EXPORT"
            fontSize="xs"
            leftIcon={<BiUpload size="20px" />}
          />

          <Select
            placeholder="10"
            size="sm"
            rounded="full"
            height="40px"
            width="120px"
          >
            {/* <Divider orientation="vertical" width="1px" /> */}
            <option value="option1">25</option>
            <option value="option2">50</option>
            <option value="option3">100</option>
          </Select>
        </HStack>
        <Spacer />

        <Box mr="5" w="200px">
          <InputGroup>
            <InputLeftElement
              // pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="search"
              focusBorderColor="#F8B916"
              rounded="full"
            />
          </InputGroup>
        </Box>
      </Flex>
      <Table size="md" w="full">
        <Thead>
          <Tr bg="#333333" borderRadius="full">
            <Th>
              <Flex>
                <BiChevronsUp size="25px" color="white" />{" "}
                <Text color="white">{th}</Text>{" "}
              </Flex>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr
            onClick={() => {
              history.push(`${match.url}/${el.uuid}`);
            }}
            key={idx}
            _hover={{ bg: "gray.100" }}
          >
            <Td>{data}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
