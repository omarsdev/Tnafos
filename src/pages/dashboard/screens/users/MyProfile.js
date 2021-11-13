import React, { useEffect, useState } from "react";
import { AxiosInstance } from "utils";

export const MyProfile = () => {
  const [profile, setProfile] = useState(null);

  //* grab user's profile:
  const showProfile = async () => {
    await AxiosInstance.get("/api/dashboard/user/my-profile/")
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showProfile();
  }, []);
  return <div>my profile ...</div>;
};
