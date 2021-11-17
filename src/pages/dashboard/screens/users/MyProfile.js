import React, { useEffect, useState } from "react";
import { AxiosInstance } from "api/AxiosInstance";
import { Box, Text, Center, useColorModeValue } from "@chakra-ui/react";

export const MyProfile = () => {
  const [profile, setProfile] = useState(null);

  //* grab user's profile:
  const showProfile = async () => {
    await AxiosInstance.get("/api/dashboard/user/my-profile/")
      .then((res) => {
        console.log(res.data.data);
        setProfile(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showProfile();
  }, []);
  return (
    <Center>
      <Box
        mt="40px"
        maxW={"400px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded="xl"
        p={6}
        textAlign={"center"}
      >
        <Text className="py-2 text-gray-600 font-semibold">
          Name :{profile?.first_name} {profile?.last_name}
        </Text>
        <Text className="py-2 text-gray-600 font-semibold">
          Email: {profile?.email}
        </Text>
        <Text className="py-2 text-gray-600 font-semibold">
          Phone Number :{profile?.phone_number}
        </Text>
        <Text className="py-2 text-gray-600 font-semibold">
          UUID: {profile?.uuid}
        </Text>
      </Box>
    </Center>
  );
};
