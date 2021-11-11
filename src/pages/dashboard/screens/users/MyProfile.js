import React, { useEffect, useState } from "react";
import { showProfile } from "../../../../utils";

export const MyProfile = () => {
  const [profile, setProfile] = useState(null);

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
