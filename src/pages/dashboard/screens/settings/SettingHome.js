import React, { useState, useEffect } from "react";

const SettingHome = () => {
  const [setting, setSetting] = useState(null);

  const getSettings = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/settings/");
      console.log(res.data.data);
      setSetting(res.data.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <div>
      <h1>Setting Page</h1>
    </div>
  );
};

export default SettingHome;
