import React, { useEffect, useState } from "react";
import { Box, Text, Center, useColorModeValue } from "@chakra-ui/react";

import { AxiosInstance } from "../../../../api";

const MyProfile = () => {
  const [profile, setProfile] = useState(null);

  //* grab user's profile:
  const showProfile = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/user/my-profile/");
      console.log(res.data.data);
      setProfile(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showProfile();
  }, []);
  return (
    <Center>
      <Box
        my={{ base: 2, lg: 6 }}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded="xl"
        textAlign={"center"}
        w={{ base: 200, sm: 260, md: 360, lg: 380 }}
        h={{ base: 200, sm: 230, md: 250, lg: 280 }}
        p={{ base: 2, sm: 2, md: 6, lg: 6 }}
        fontSize={{ base: "xs", sm: "xs", md: "sm", lg: "md" }}
      >
        <Text color="gray.600" pt="0.5rem" pb="0.5rem" fontWeight="600">
          Name :{profile?.first_name} {profile?.last_name}
        </Text>
        <Text color="gray.600" pt="0.5rem" pb="0.5rem" fontWeight="600">
          Email: {profile?.email}
        </Text>
        <Text color="gray.600" pt="0.5rem" pb="0.5rem" fontWeight="600">
          Phone Number :{profile?.phone_number}
        </Text>
        <Text color="gray.600" pt="0.5rem" pb="0.5rem" fontWeight="600">
          UUID: {profile?.uuid}
        </Text>
      </Box>
    </Center>
  );
};

export default MyProfile;
