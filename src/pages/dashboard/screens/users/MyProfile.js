import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../../../../api";

import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import Grid from "@mui/material/Grid";

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
    <SuiBox mt={5} mb={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} xl={4}>
          <ProfileInfoCard
            title="profile information"
            info={{
              fullName: `${profile?.first_name} ${profile?.last_name}`,
              PhoneNumber: `${profile?.phone_number}`,
              email: `${profile?.email}`,
              UUID: `${profile?.uuid}`,
            }}
            action={{ route: "", tooltip: "Edit Profile" }}
          />
        </Grid>
      </Grid>
    </SuiBox>
  );
};
export default MyProfile;
