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

const CustomTableee = ({ tableHeading, headRow, data, list }) => {
  const match = useRouteMatch();
  const history = useHistory();
  return !list ? (
    <Center h="70vh" w="100%">
      <Spinner size="xl" color="#F8B916" />
    </Center>
  ) : (
    <Box className="rounded-3xl shadow-2xl relative bg-white">
      <Text
        py="3"
        px="3"
        // borderBottom="groove"
        borderWidth="2px"
        bg="#333333"
        width="100%"
        roundedTop="2xl"
        fontSize="lg"
        color="white"
      >
        {tableHeading}
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
            size="sm"
            rounded="full"
            height="40px"
            width="120px"
            // onChange={(e) => {
            //   const selectedOption = e.target.value;
            //   setRowsNumber(selectedOption);
            // }}
          >
            {/* <Divider orientation="vertical" width="1px" /> */}
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </Select>
        </HStack>
        <Spacer />

        <Box mr="5" w="200px">
          <InputGroup>
            <InputLeftElement children={<Search2Icon color="gray.300" />} />
            <Input
              type="text"
              placeholder="search"
              focusBorderColor="#F8B916"
              rounded="full"
              //   value={searchInput}
              //   onChange={(e) => setSearchInput(e.target.value)}
              //   onKeyPress={handleKeypress}
            />
          </InputGroup>
        </Box>
      </Flex>
      <form>
        <Table size="md" w="full">
          <Thead>
            <Tr bg="#333333" borderRadius="full">
              <Th>
                <Flex justifyContent="center" alignItems="center">
                  {" "}
                  //* ليش اول حقل مختلف عن البقيان وبالنسبة للداتا تحت ليش هيك
                  معمولة؟؟؟
                  <BiChevronsUp size="25px" color="white" />{" "}
                  <Text color="white">{headRow}</Text>{" "}
                </Flex>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {list.map((el, idx) => (
              <Tr key={idx} _hover={{ bg: "gray.100" }}>
                <Td>{el.data}</Td>
                <Td>
                  <Flex justify={"center"} gap="10px">
                    <IconButton
                      justify={"center"}
                      fontSize={"md"}
                      rounded={"full"}
                      bg={"#F8B916"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "orange.400",
                      }}
                      icon={<FiEdit />}
                      onClick={() => {
                        history.push(`${match.url}/${el.uuid}`);
                      }}
                    />
                    <IconButton
                      justify={"center"}
                      fontSize={"md"}
                      rounded={"full"}
                      bg={"#F8B916"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "orange.400",
                      }}
                      icon={<BsTrash />}
                      onClick={handleDeleteClick}
                    />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </form>
    </Box>
  );
};

export default CustomTableee;
