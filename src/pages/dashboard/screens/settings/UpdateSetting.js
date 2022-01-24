import React, { useState, useEffect } from "react";

const UpdateSetting = () => {
  const [card, setCard] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const updateSetting = async (data) => {
    setErrors(null);
    setIsUpdating(true);
    try {
      const res = await AxiosInstance.put(
        `/api/dashboard/settings/vat/update`,
        data
      );
      console.log(res);
      setIsUpdating(false);
      setAlert({
        message: "Settings has been updated!",
        type: "info",
      });
      history.push(`/dashboard/settinghome`);
    } catch (err) {
      setIsUpdating(false);
      setErrors(err.response.data);
      setAlert({
        message: `${err.response.data.message}`,
        type: "error",
      });
    }
  };

  return <div></div>;
};
export default UpdateSetting;
