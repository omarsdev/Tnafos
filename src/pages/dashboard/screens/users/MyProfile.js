import React, { useEffect, useState } from "react";

export const MyProfile = () => {
  const [profile, setProfile] = useState(null);

  const showProfile = async () => {
    await AxiosInstance.get("/api/dashboard/user/my-profile/")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  const getMyProfile = async () => {
    const myData = await showProfile();
    console.log(myData);
    setProfile(myData);
    // return myData;
  };

  useEffect(() => {
    getMyProfile();
  }, []);
  return <div>my profile ...</div>;
};
