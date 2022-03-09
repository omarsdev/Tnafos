import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../../../../api";

import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import Card from "@mui/material/Card";

const MyProfile = () => {
  const [profile, setProfile] = useState(null);

  //* grab user's profile:
  const showProfile = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/user/my-profile/");

      setProfile(res.data.data);
    } catch (err) {

    }
  };

  useEffect(() => {
    showProfile();
  }, []);

  return (
    <SuiBox my={3}>
      <Card>
        <ProfileInfoCard
          title="profile information"
          info={{
            fullName: `${profile?.first_name} ${profile?.last_name}`,
            PhoneNumber: `${profile?.phone_number}`,
            email: `${profile?.email}`,
            UUID: `${profile?.uuid}`,
          }}
        />
      </Card>
    </SuiBox>
  );
};
export default MyProfile;
